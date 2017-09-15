import { Routes } from '@angular/router';
import { LoadCatalogDataComponent } from './load-catalog-data/load-catalog-data.component';
import { CatalogContainerComponent } from './catalog/catalog-container.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
export const CATALOG_ROUTES: Routes = [
    { path: '', component: LoadCatalogDataComponent },
    { path: 'catalog', component: CatalogContainerComponent },
    { path: 'catalog/:productId/overview', component: ProductOverviewComponent },
];
