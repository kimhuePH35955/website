import { Route, Routes } from "react-router-dom";
import LayoutWebsite from "@/components/Layout/LayoutWebsite";
import LayoutAdmin from "@/components/Layout/LayoutAdmin";
import HomeWebsite from "@/pages/(client)/HomeWebsite";
import NotFound from "@/components/NotFound";
import ProductDetail from "@/pages/(client)/ProductDetail";
import HomeAdmin from "@/pages/(admin)/HomeAdmin";
import Products from "@/pages/(admin)/Products";
import ProductAdd from "@/pages/(admin)/ProductAdd";
import ProductEdit from "@/pages/(admin)/ProductEdit";
import Cart from "@/pages/(client)/Cart";
import Login from "@/pages/(client)/Login";
import Register from "@/pages/(client)/Register";
import ListProduct from "@/pages/(client)/ListProduct";
import PrivateRoute from "./PrivateRoute";
import SearchProduct from "@/pages/(client)/SearchProduct";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutWebsite />}>
          <Route index element={<HomeWebsite />} />

          <Route path="products" element={<ListProduct />}>
            <Route path="search" element={<SearchProduct />} />
          </Route>

          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="carts" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route
          path="/admin"
          element={
            <PrivateRoute allowedRole={1}>
              <LayoutAdmin />
            </PrivateRoute>
          }
        >
          <Route index element={<HomeAdmin />} />
          <Route path="products" element={<Products />} />
          <Route path="products/add" element={<ProductAdd />} />
          <Route path="products/edit/:id" element={<ProductEdit />} />
          {/* <Route path="categories" element={<Categories />} /> */}
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Router;
