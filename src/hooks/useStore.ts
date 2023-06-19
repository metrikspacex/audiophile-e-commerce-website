import { useContext } from "react";

import type { UseStoreContext } from "../context/store";
import StoreContext from "../context/store";

const useStore = (): UseStoreContext => {
  return useContext(StoreContext);
};

export default useStore;
