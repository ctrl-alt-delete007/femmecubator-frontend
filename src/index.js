import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./components/App";
import Root from "./components/root";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
// import { Provider } from "react-redux";
import couponReducer from "./reducers/couponReducer";
import eventReducer from "./reducers/eventReducer";
import accountReducer from "./reducers/accountReducer";
import wishlistReducer from "./reducers/wishlistReducer";
import * as serviceWorker from "./serviceWorker";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  couponsInfo: couponReducer,
  eventsInfo: eventReducer,
  accountInfo: accountReducer,
  wishlistInfo: wishlistReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

ReactDOM.render(<Root store={store} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
