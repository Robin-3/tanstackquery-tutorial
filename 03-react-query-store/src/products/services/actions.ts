import { productsApi } from "../api/productsApi";
import { type Product } from "../interfaces/product";

interface GetProductsOptions {
  filterKey?: string;
}

export const getProducts = async ({
  filterKey
}: GetProductsOptions): Promise<Product[]> => {
  const { data } = await productsApi.get<Product[]>("/products");

  return data;
};
