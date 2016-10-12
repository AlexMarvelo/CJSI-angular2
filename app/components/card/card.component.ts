import { Component, Input } from '@angular/core';

import { Pokemon } from '../../models/pokemon.model';

@Component({
    selector: 'card',
    template: `
    <div class="col s4">
      <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
          <img
            class="activator"
            src="{{pokemon.imgSrc}}"
            alt="{{pokemon.name}}">
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">
            {{pokemon.name}}
            <i class="material-icons right">more_vert</i>
          </span>
          <p><a href="#">Visit pokemon page</a></p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">
            {{pokemon.name}}
            <i class="material-icons right">close</i>
          </span>
          <p style="margin-bottom: 5px;">
            Types:
          </p>
          <ul style="margin-top: 5px; padding-left: 10px;">
            <li *ngFor="let type of pokemon.types">{{type.name.slice(0,1).toUpperCase() + type.name.slice(1).toLowerCase()}}</li>
          </ul>
        </div>
      </div>
    </div>`
})
export class CardComponent {
  @Input() pokemon: Pokemon;
}
