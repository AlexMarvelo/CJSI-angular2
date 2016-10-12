import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <app-header></app-header>
    <pokemon-detailed></pokemon-detailed>
    <app-footer></app-footer>`
})
export class AppComponent {}

//<pokemons-list></pokemons-list>
//<pokemon-detailed></pokemon-detailed>
