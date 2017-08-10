import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { LoadProducts } from "./catalog/catalog/catalog-actions";
import * as AppReducers from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _store: Store<AppReducers.State>){
    _store.dispatch( new LoadProducts( {} ) );
  }
}
