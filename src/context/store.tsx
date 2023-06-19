import type { ReactElement } from "react";
import { createContext, useCallback, useReducer } from "react";

// const testStore = [
//   {
//     categoryImage: {
//       desktop:
//         "/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg",
//       mobile:
//         "/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg",
//       tablet:
//         "/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg",
//     },
//     id: 4,
//     name: "XX99 Mk II Headphones",
//     price: 2999,
//     quantity: 1,
//   },
//   {
//     categoryImage: {
//       desktop:
//         "/product-xx59-headphones/desktop/image-category-page-preview.jpg",
//       mobile: "/product-xx59-headphones/mobile/image-category-page-preview.jpg",
//       tablet: "/product-xx59-headphones/tablet/image-category-page-preview.jpg",
//     },
//     id: 2,
//     name: "XX59 Headphones",
//     price: 899,
//     quantity: 2,
//   },
//   {
//     categoryImage: {
//       desktop: "/product-yx1-earphones/desktop/image-category-page-preview.jpg",
//       mobile: "/product-yx1-earphones/mobile/image-category-page-preview.jpg",
//       tablet: "/product-yx1-earphones/tablet/image-category-page-preview.jpg",
//     },
//     id: 1,
//     name: "YX1 Earphones",
//     price: 599,
//     quantity: 1,
//   },
// ];

type StoreState = {
  cart: CartItem[];
  cartModal: boolean;
  checkoutModal: boolean;
  menuModal: boolean;
};

const initialStoreState: StoreState = {
  cart: [],
  cartModal: false,
  checkoutModal: false,
  menuModal: false,
};

const REDUCER_ACTION_TYPE = {
  ADDCART: "ADDCART",
  DELETECART: "DELETECART",
  FETCHCART: "FETCHCART",
  SHOWCART: "SHOWCART",
  SHOWCHECKOUT: "SHOWCHECKOUT",
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

      window.localStorage.setItem("cart", JSON.stringify(_cart));
      return { ...state, cart: _cart };
    }
    case REDUCER_ACTION_TYPE.DELETECART: {
      return { ...state, cart: [] };
    }
    case REDUCER_ACTION_TYPE.FETCHCART: {
      const _fetchedCart = window.localStorage.getItem("cart");

      if (_fetchedCart !== null) {
        return { ...state, cart: JSON.parse(_fetchedCart) };
      }

      window.localStorage.setItem("cart", JSON.stringify([]));
      return { ...state, cart: [] };
    }
    case REDUCER_ACTION_TYPE.SHOWCART: {
      return {
        ...state,
        cartModal: !state.cartModal,
      };
    }
    case REDUCER_ACTION_TYPE.SHOWCHECKOUT: {
      return {
        ...state,
        checkoutModal: !state.checkoutModal,
      };
    }
    case REDUCER_ACTION_TYPE.SHOWMENU: {
      return { ...state, menuModal: !state.menuModal };
    }
    case REDUCER_ACTION_TYPE.UPDATECART: {
      if (!action.payload) {
        throw new Error("Update CART - Action payload missing");
      }

      let _cart = [...state.cart];
      const foundInCart = _cart.find((item) => item.id === action.payload?.id);

      if (foundInCart === undefined) {
        _cart = [...state.cart, action.payload];
      } else {
        const _filtedById = _cart.filter(
          (item) => item.id !== action.payload?.id
        );

        if (action.payload.quantity > 0) {
          const updatedItem: CartItem = {
            categoryImage: foundInCart.categoryImage,
            id: foundInCart.id,
            name: foundInCart.name,
            price: foundInCart.price,
            quantity: action.payload.quantity,
          };
          _cart = [..._filtedById, updatedItem];
        } else {
          _cart = [..._filtedById];
        }
      }

      window.localStorage.setItem("cart", JSON.stringify(_cart));

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

  const fetchCart = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.FETCHCART }),
    []
  );

  const setCartModal = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.SHOWCART }),
    []
  );

  const setCheckoutModal = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.SHOWCHECKOUT }),
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
    fetchCart,
    setCartModal,
    setCheckoutModal,
    setMenuModal,
    state,
    updateCart,
  };
};

export type UseStoreContext = ReturnType<typeof useStoreContext>;

const StoreContext = createContext<UseStoreContext>({
  addItemToCart: () => {},
  deleteCart: () => {},
  fetchCart: () => {},
  setCartModal: () => {},
  setCheckoutModal: () => {},
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
