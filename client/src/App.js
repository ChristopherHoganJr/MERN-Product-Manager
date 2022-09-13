import "./App.css";
import { Routes, Route } from "react-router-dom";

// views
import Main from "./views/Main";
import SingleProduct from "./views/SingleProduct";
import EditProduct from "./views/EditProduct";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/:id' element={<SingleProduct />} />
        <Route path='/:id/edit' element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;
