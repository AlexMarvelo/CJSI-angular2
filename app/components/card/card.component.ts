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
            src="http://kingofwallpapers.com/picture/picture-005.jpg"
            alt="Pokemon #{{pokemon.id}}">
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">
            {{pokemon.name}}
            <i class="material-icons right">more_vert</i>
          </span>
          <p><a href="#">This is a link</a></p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">
            {{pokemon.name}}
            <i class="material-icons right">close</i>
          </span>
          <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
      </div>
    </div>`
})
export class CardComponent {
  @Input() pokemon: Pokemon;
}
