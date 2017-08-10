import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadCatalogDataComponent } from './load-catalog-data/load-catalog-data.component';
import { CatalogContainerComponent } from './catalog/catalog-container.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { SearchComponent } from './catalog/search/search.component';
import { ProductListComponent } from './catalog/product-list/product-list.component';
import {
    MdProgressBar,
    MdHint,
    MdInputContainer,
    MdInputModule,
    MdHeaderRow,
    MdHeaderCell,
    MdNativeDateModule,
    MdTableModule, MdProgressBarModule
} from '@angular/material';
// import {MdTableModule} from '@angular/material'
import { CdkHeaderRow, DataSource, CdkTableModule } from '@angular/cdk';
@NgModule( {
    imports: [
        CommonModule,
        MdInputModule,
        MdTableModule,
        CdkTableModule,
        MdProgressBarModule,
    ],
    declarations: [
        LoadCatalogDataComponent,
        CatalogContainerComponent,
        ProductOverviewComponent,
        SearchComponent,
        ProductListComponent,
    ],
} )
export class CatalogModule {
}
