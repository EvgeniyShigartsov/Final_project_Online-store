import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { reducer as authReducer } from './auth/reducer';
import { MODULE_NAME as cart, cartReducer } from './cart/reducer'
import { MODULE_NAME as productsModule, reducer as productsReducer } from './products/reducer';
import { subscribersReducer } from './createSubscribe/reducer'
import { MODULE_NAME as wishlistModule, reducer as wishlistReducer } from './wishlist/reducer'
import { reducer as mainCatalogReducer} from './mainCatalog/reducer';
import { MODULE_NAME as subscribeModalModule, reducer as subscribeModalReducer } from './subscriceOnProductModal/reducer'

const persistConfig = {
  key: 'authLS',
  storage,
}

const persistedAuthReducer = persistReducer(persistConfig, authReducer)

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  [cart]: cartReducer,
  [productsModule]: productsReducer,
  subscribe: subscribersReducer,
  [wishlistModule]: wishlistReducer,
  mainCatalog: mainCatalogReducer,
  [subscribeModalModule]: subscribeModalReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);

export default store;
