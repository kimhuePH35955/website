import { IProduct } from "@/common/types/product";
import instance from "@/configs/axios";

export const getProducts = async () => {
  try {
    const { data } = await instance.get("/products");
    return data;
  } catch (error) {
    console.log(error);
  }
};  


// xóa sản phẩm
export const removeProductById = async (id:number) => {
  try {
      const { data } = await instance.delete(`/products/${id}`);
      return data;

  } catch (error) {
      console.log(error);
  }
}

export const addProduct = async (product:IProduct) => {
  try {
      const { data } = await instance.post('/products', product);
      return data;

  } catch (error) {
      console.log(error);
  }
}

//update sp
export const updateProduct = async (product:IProduct) => {
  try {
      const { data } = await instance.put(`/products/${product.id}`, product);
      return data;

  } catch (error) {
      console.log(error);
  }
}


export const getProductsById = async (id:any) => {
  try {
      const { data } = await instance.get(`/products/${id}`);
      return data;

  } catch (error) {
      console.log(error);
  }
}



