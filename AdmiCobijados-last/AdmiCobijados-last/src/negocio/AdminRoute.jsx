import { Routes, Route } from "react-router-dom";
import UserList from "../pages/userList/UserList";
import User from "../pages/user/User";
import ProductList from "../pages/productList/ProductList";
import Product from "../pages/product/Product";
import "./admin.css"

const AdminRoute = () => {
    return (
    <Routes>
        <Route path="/admin" element={<ProductList />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:productId/:categoria" element={<Product />} />
    </Routes>
      );
}

export {AdminRoute}