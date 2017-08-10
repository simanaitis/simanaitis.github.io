import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { CatalogModule } from './catalog/catalog.module';
import { MdToolbarModule, MdButtonModule, MdProgressBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateCatalogComponent } from './catalog/update-catalog/update-catalog.component';

import { Store, StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { CatalogEffect } from './catalog/load-catalog-data/load-catalog-data.effects';
import { EffectsModule } from '@ngrx/effects';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    UpdateCatalogComponent
  ],
  imports: [
    BrowserModule,
    CatalogModule,
    RouterModule.forRoot(ROUTES, { useHash: false, preloadingStrategy: PreloadAllModules }),
    MdToolbarModule,
    MdButtonModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CatalogEffect]),
    HttpModule
  ],
  providers: [
   [
     class DataResolver implements Resolve<any> {
       public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {}
     }
   ]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
