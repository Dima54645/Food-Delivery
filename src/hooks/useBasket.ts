import { useTypedSelector } from "./useTypedSelector";

export const useBasket = () => {
  const { basket } = useTypedSelector((state) => state);
  
  return { basket };
};
