import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TelaRecepcaoComponent } from './tela-recepcao/tela-recepcao.component';
import { TelaEmTransitoComponent } from './tela-em-transito/tela-em-transito.component';
import { TelaColetaComponent } from './tela-coleta/tela-coleta.component';
import { FundoComponent } from './fundo/fundo.component';
import { AppRoutingModule } from './app-routing.module';

import {HttpClientModule} from '@angular/common/http'

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TelaRecepcaoComponent,
    TelaEmTransitoComponent,
    TelaColetaComponent,
    FundoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
