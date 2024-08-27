import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Product, productActions } from "..";

export const useProductMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: productActions.createProduct,
    onMutate: (data) => {
      const optimisticProduct = { id: Math.random(), ...data };
      queryClient.setQueryData<Product[]>(
        ["products", { filterKey: data.category }],
        (old) => {
          if (!old) return [optimisticProduct];
          return [...old, optimisticProduct];
        }
      );
    },
    onSuccess: (data) => {
      queryClient.setQueryData<Product[]>(
        ["products", { filterKey: data.category }],
        (old) => {
          if (!old) return [data];
          return [...old, data];
        }
      );
    }
  });

  return mutation;
};
