import * as CatalogReducer from './catalog/catalog/catalog-reducer';

export interface State {
    catalog: CatalogReducer.State;
}

export const reducers = {
    catalog: CatalogReducer.reducer
};
