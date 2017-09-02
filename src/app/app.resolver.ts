import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { RouterStateSerializer } from "@ngrx/router-store";

@Injectable()
export class DataResolver implements Resolve<any> {
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return Observable.of({ res: 'I am data'});
  }
}


export interface RouterStateUrl {
  url: string;
}

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const url = routerState ? routerState.url : '';

    // Only return an object including the URL
    // instead of the entire snapshot
    return { url };
  }
}


/**
 * An array of services to resolve routes with data.
 */
export const APP_RESOLVER_PROVIDERS = [
  DataResolver,
  { provide: RouterStateSerializer, useClass: CustomSerializer }
];
