import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  NgModule,
  ApplicationRef
} from '@angular/core';
import {
  removeNgStyles,
  createNewHosts,
  createInputTransfer
} from '@angularclass/hmr';
import {
  RouterModule,
  PreloadAllModules, RouterStateSnapshot, Resolve, ActivatedRouteSnapshot
} from '@angular/router';

import {
  StoreRouterConnectingModule,
  routerReducer,
  RouterStateSerializer
} from '@ngrx/router-store';
import { Store, StoreModule } from '@ngrx/store';
import 'rxjs/add/operator/take';

/**
 * Dev only imports
 */

const DEV_IMPORTS = [];

// if (module.hot) {
  const { StoreDevtoolsModule } = require('@ngrx/store-devtools');
  DEV_IMPORTS.push(StoreDevtoolsModule.instrument({
    maxAge: 25 //  Retains last 25 states
  }));
// }


/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { CatalogModule } from './catalog/catalog.module';
import { MdToolbarModule, MdButtonModule, MdProgressBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateCatalogComponent } from './catalog/update-catalog/update-catalog.component';

import { reducers } from './reducers';
import { CatalogEffect } from './catalog/load-catalog-data/load-catalog-data.effects';
import { EffectsModule } from '@ngrx/effects';

import '../styles/styles.scss';
import '../styles/headings.css';
import { rootReducer, selectRootState } from "./app.reducers";
import { AppComponent } from "./app.component";

// Application wide providers

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};


/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [AppComponent],
   declarations: [
    AppComponent,
    UpdateCatalogComponent
  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CatalogModule,
    MdToolbarModule,
    MdButtonModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CatalogEffect]),
    StoreRouterConnectingModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    ...DEV_IMPORTS
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
    ENV_PROVIDERS,
    class DataResolver implements Resolve<any> {
       public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {}
     }
  ]
})
export class AppModule {

  constructor(public appRef: ApplicationRef, private _store: Store<any>) {

  }
  hmrOnInit(store) {
    if (!store || !store.rootState) return

    // restore state by dispatch a SET_ROOT_STATE action
    if (store.rootState) {
      this._store.dispatch({
        type: 'SET_ROOT_STATE',
        payload: store.rootState
      })
    }

    if ('restoreInputValues' in store) { store.restoreInputValues() }
    this.appRef.tick()
    Object.keys(store).forEach(prop => delete store[prop])
  }
  hmrOnDestroy(store) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement)
    //TODO wait until ngrx4 gets some improvement regarding ruoting and dev tools
    this._store.take(1).subscribe((s) => store.state = s);
    store.disposeOldHosts = createNewHosts(cmpLocation)
    store.restoreInputValues = createInputTransfer()
    removeNgStyles()
  }
  hmrAfterDestroy(store) {
    store.disposeOldHosts()
    delete store.disposeOldHosts
  }

}
