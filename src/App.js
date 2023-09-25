import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import ProductList from "./components/ProductList";
// import ProductDetail from './components/ProductDetail';
// import Category from './components/Category';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<ProductList/>} />
      {/* <Route path="/product/:id" element={<ProductDetail/>} /> */}
      {/* <Route path="/category/:categoryName" element={<Category/>} /> */}
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
