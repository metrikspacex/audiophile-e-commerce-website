import type { ReactElement } from "react";
import { createContext, useCallback, useReducer } from "react";

type StoreState = {
  cart: CartItem[];
  cartModal: boolean;
  menuModal: boolean;
};

const initialStoreState: StoreState = {
  cart: [],
  cartModal: false,
  menuModal: false,
};

const REDUCER_ACTION_TYPE = {
  ADDCART: "ADDCART",
  DELETECART: "DELETECART",
  SHOWCART: "SHOWCART",
  SHOWMENU: "SHOWMENU",
  UPDATECART: "UPDATECART",
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
  payload?: CartItem;
  type: string;
};

const reducer = (state: StoreState, action: ReducerAction): StoreState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADDCART: {
      if (!action.payload) {
        throw new Error("ADD CART - Action payload missing");
      }

      let _cart = [...state.cart];
      const foundInCart = _cart.find((item) => item.id === action.payload?.id);

      if (foundInCart === undefined) {
        _cart = [...state.cart, action.payload];
      } else {
        const _filtedById = _cart.filter(
          (item) => item.id !== action.payload?.id
        );
        const updatedItem: CartItem = {
          categoryImage: foundInCart.categoryImage,
          id: foundInCart.id,
          name: foundInCart.name,
          price: foundInCart.price,
          quantity: foundInCart.quantity + action.payload.quantity,
        };
        _cart = [..._filtedById, updatedItem];
      }

      return { ...state, cart: _cart };
    }
    case REDUCER_ACTION_TYPE.DELETECART: {
      return { ...state, cart: [] };
    }
    case REDUCER_ACTION_TYPE.SHOWCART: {
      return {
        ...state,
        cartModal: !state.cartModal,
      };
    }
    case REDUCER_ACTION_TYPE.SHOWMENU: {
      return { ...state, menuModal: !state.menuModal };
    }
    case REDUCER_ACTION_TYPE.UPDATECART: {
      if (!action.payload) {
        throw new Error("ADD CART - Action payload missing");
      }

      let _cart = [...state.cart];
      const foundInCart = _cart.find((item) => item.id === action.payload?.id);

      if (foundInCart === undefined) {
        _cart = [...state.cart, action.payload];
      } else {
        const _filtedById = _cart.filter(
          (item) => item.id !== action.payload?.id
        );
        const updatedItem: CartItem = {
          categoryImage: foundInCart.categoryImage,
          id: foundInCart.id,
          name: foundInCart.name,
          price: foundInCart.price,
          quantity: action.payload.quantity,
        };
        _cart = [..._filtedById, updatedItem];
      }

      return { ...state, cart: _cart };
    }
    default: {
      throw new Error("Invalid action type");
    }
  }
};

const useStoreContext = (initial: StoreState) => {
  const [state, dispatch] = useReducer(reducer, initial);

  const addItemToCart = useCallback(
    (cartItem: CartItem) =>
      dispatch({ payload: cartItem, type: REDUCER_ACTION_TYPE.ADDCART }),
    []
  );

  const deleteCart = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.DELETECART }),
    []
  );

  const setCartModal = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.SHOWCART }),
    []
  );

  const setMenuModal = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.SHOWMENU }),
    []
  );

  const updateCart = useCallback(
    (cartItem: CartItem) =>
      dispatch({ payload: cartItem, type: REDUCER_ACTION_TYPE.UPDATECART }),
    []
  );

  return {
    addItemToCart,
    deleteCart,
    setCartModal,
    setMenuModal,
    state,
    updateCart,
  };
};

export type UseStoreContext = ReturnType<typeof useStoreContext>;

const StoreContext = createContext<UseStoreContext>({
  addItemToCart: () => {},
  deleteCart: () => {},
  setCartModal: () => {},
  setMenuModal: () => {},
  state: initialStoreState,
  updateCart: () => {},
});

export function StoreProvider({
  children,
}: {
  children?: ReactElement | ReactElement[] | undefined;
}): ReactElement {
  return (
    <StoreContext.Provider value={useStoreContext(initialStoreState)}>
      {children}
    </StoreContext.Provider>
  );
}

export default StoreContext;
