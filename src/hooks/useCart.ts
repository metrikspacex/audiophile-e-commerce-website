import { useContext } from "react";

import type { UseStoreContext } from "../context/store";
import StoreContext from "../context/store";

const useCart = (): UseStoreContext => {
  return useContext(StoreContext);
};

export default useCart;
