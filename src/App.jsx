// Home, Edit, Sort and Search-Bar
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Layout from './Component/Layout';
import Edit from './pages/Edit';
import MovieDetail from './Component/MovieDetail';
function App() {

  return (
    <>
    <BrowserRouter>
     <Routes>
     <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />}/>
        <Route path='/movieDetails/:id' element={<MovieDetail />}/>
        <Route path='edit' element={<Edit />}/>
     </Route>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
