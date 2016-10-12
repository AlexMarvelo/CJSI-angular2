import { NgModule }      from '@angular/core';
import { HttpModule }    from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent } from '../header/header.component';
import { PokemonsListComponent } from '../pokemons-list/pokemons-list.component';
import { CardComponent } from '../card/card.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PokemonsListComponent,
    CardComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
