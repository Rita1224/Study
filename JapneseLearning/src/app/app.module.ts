import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientJsonpModule} from  '@angular/common/http';

import { AppComponent } from './app.component';
import { WordListLayoutComponent } from './word-list/word-list-layout/word-list-layout.component';
import {WordFormatComponent} from "./word-list/word-format/word-format.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from "@angular/forms";
import { ErrorListComponent } from './word-list/error-list/error-list.component';
import { SentencesListComponent } from './word-list/sentences-list/sentences-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    WordListLayoutComponent,
    WordFormatComponent,
    ErrorListComponent,
    SentencesListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatTabsModule,
    MatSidenavModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
