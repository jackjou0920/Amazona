import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookies from 'js-cookie';
import { 
  productListReducer, 
  productDetailsReducer, 
  productSaveReducer, 
  productDeleteReducer 
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { 
  userSigninReducer, 
  userRegisterReducer,
  userUpdateReducer
} from './reducers/userReducers';
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  myOrderListReducer,
  orderListReducer,
  orderDeleteReducer,
} from './reducers/orderReducers';

const cartItems = Cookies.getJSON("cartItems") || [];
const userInfo = Cookies.getJSON("userInfo") || null;

const initialState = { 
  cart: { cartItems, shipping: {}, payment: {} }, 
  userSignin: { userInfo } 
};

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  userUpdate: userUpdateReducer,
  productSave: productSaveReducer,
  productDelete: productDeleteReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  myOrderList: myOrderListReducer,
  orderList: orderListReducer,
  orderDelete: orderDeleteReducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;