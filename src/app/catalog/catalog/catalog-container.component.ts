import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import * as AppReducers from '../../reducers';

@Component({
  selector: 'app-catalog-container',
  templateUrl: './catalog-container.component.html',
  styleUrls: ['./catalog-container.component.css']
})
export class CatalogContainerComponent implements OnInit {

  constructor(private _store: Store<AppReducers.State>) {
    _store.select( 'catalog' ).subscribe( ( catalog ) => {
     console.log(catalog);
    } );
  }

  ngOnInit() {
  }

}
