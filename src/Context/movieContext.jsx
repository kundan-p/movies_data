/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const movieContext = createContext();

export const MovieContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const loadMovie = async () => {
    const res = await fetch("http://localhost:3000/movieData");
    const json = await res.json();
    setData(json);
  };
  const updateMovie = async (item) => {
    const res = await fetch(`http://localhost:3000/movieData/${item.id}`, {
      method: "PUT",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const json = await res.json();
    const index = data.findIndex((x) => x.id === json.id);
    setData((val) => [...val.slice(0, index), json, ...val.slice(index + 1)]);
  };
  const sorting = (number) => {
    if (number) {
      setData((val) => [...val].sort((a, b) => a.title.localeCompare(b.title)));
    }
    if (!number) {
      const sortedData = [...data].sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      setData(sortedData);
    }
  };

  useEffect(() => {
    loadMovie();
  }, []);

  const value = useMemo(
    () => ({
      data,
      updateMovie,
      sorting,
      loadMovie,
    }),
    [data, updateMovie, sorting, loadMovie]
  );
  return (
    <movieContext.Provider value={value}>{children}</movieContext.Provider>
  );
};

export const UsemovieContext = () => useContext(movieContext);
