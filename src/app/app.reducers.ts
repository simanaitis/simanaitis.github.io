import { ActionReducer, compose, combineReducers } from "@ngrx/store";
import { createSelector } from '@ngrx/store';

import {
    routerReducer
} from '@ngrx/router-store';

const nativeRouterReducer = {
    router: routerReducer
};

const commonReducers = {};


function stateSetter ( reducer: ActionReducer<any> ): ActionReducer<any> {
    return function ( state, action ) {
        if ( action.type === 'SET_ROOT_STATE' ) {
            return action.payload
        }
        return reducer( state, action )
    }
}

export function rootReducer(state, action) {
    return compose(stateSetter, combineReducers)(Object.assign({}, commonReducers, nativeRouterReducer))(state, action);
}