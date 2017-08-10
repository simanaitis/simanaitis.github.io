import { Product } from './product';
import * as CatalogActions from './catalog-actions';

export interface State {
    loaded: boolean;
    products: Product[];
}

const initialState: State = {
    loaded: false,
    products: []
};

export function reducer ( state = initialState, action: CatalogActions.All ): State {
    switch ( action.type ) {
        case CatalogActions.LOAD_PRODUCTS: {
            return {
                ...state,
                loaded: true
            };
        }

        case CatalogActions.LOAD_PRODUCTS_SUCCESS: {
            return {
                loaded: true,
                products: action.payload
            };
        }

        default: {
            return state;
        }
    }
}
