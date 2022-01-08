import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { createBrowserHistory } from "history";
import { rootReducer, RootState } from './index';

export const history:any = createBrowserHistory();

export const routerMiddleware = createRouterMiddleware(history);

export function configureStore(initialState?:RootState) {
  const middlewares = [routerMiddleware];
  const enhancer = compose(applyMiddleware(...middlewares));
  return createStore(rootReducer, initialState!, enhancer);
}