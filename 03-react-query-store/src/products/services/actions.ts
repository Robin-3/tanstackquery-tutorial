import { productsApi } from "../api/productsApi";
import { type Product } from "../interfaces/product";

const sleep = (seconds: number): Promise<boolean> =>
  new Promise((resolve) => setTimeout(() => resolve(true), seconds * 1000));

interface GetProductsOptions {
  filterKey?: string;
}

export const getProducts = async ({
  filterKey
}: GetProductsOptions): Promise<Product[]> => {
  const filterUrl = filterKey ? `category=${filterKey}` : "";
  const { data } = await productsApi.get<Product[]>(`/products?${filterUrl}`);

  return data;
};

export const getProductById = async (id: number): Promise<Product> => {
  const { data } = await productsApi.get<Product>(`/products/${id}`);

  return data;
};

export interface ProductLike {
  id?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const createProduct = async (product: ProductLike): Promise<Product> => {
  await sleep(5);

  const { data } = await productsApi.post<Product>("/products", product);
  return data;
};
