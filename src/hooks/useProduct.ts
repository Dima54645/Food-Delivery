import { useTypedSelector } from "./useTypedSelector";

export const useProduct = () => {
  const { product } = useTypedSelector((state) => state);
  
  return { product };
};
