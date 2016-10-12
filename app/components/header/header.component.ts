import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
    <nav class="light-blue lighten-1" role="navigation">
      <div class="nav-wrapper container">
        <a id="logo-container" routerLink="/pokemons" class="brand-logo">{{logoText}}</a>
        <ul class="right hide-on-med-and-down">
        </ul>
        <ul id="nav-mobile" class="side-nav">
        </ul>
        <a href="#" data-activates="nav-mobile" class="button-collapse">
          <i class="material-icons">menu</i>
        </a>
      </div>
    </nav>`
})
export class HeaderComponent {
  logoText: string = 'Pokedex';
}
