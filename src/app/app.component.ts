import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AppReducers from './reducers';
import { LoadProducts } from "demo-core/ngrx/actions/catalog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _store: Store<AppReducers.State>) {
    _store.dispatch( new LoadProducts( {} ) );
  }
}
