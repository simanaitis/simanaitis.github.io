import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AppReducers from '../../reducers';
import { LoadProducts } from '../catalog/catalog-actions';

@Component( {
    selector: 'app-load-catalog-data',
    templateUrl: './load-catalog-data.component.html',
    styleUrls: [ './load-catalog-data.component.css' ]
} )
export class LoadCatalogDataComponent implements OnInit {
    constructor ( private _store: Store<AppReducers.State> ) {
        _store.dispatch( new LoadProducts( {} ) );
        _store.select( 'catalog' ).subscribe( ( catalog ) => {
            if ( catalog.loaded ) {
                console.log( 'loaded' );
            }
        } );
    }

    ngOnInit () {
    }

}
