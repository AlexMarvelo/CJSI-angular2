import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <h1 class="mdl-layout-title mdl-layout-title_centered">Pokedex</h1>
        </div>
      </header>
      <main class="mdl-layout__content">
        <div class="page-content">
          <div class="container">
            <section id="filter__container" class="row"></section>
            <section class="row cards__container">
              <div id="bigCard__container" class="col-md-4 col-md-push-8"></div>
              <div class="col-md-8 col-md-pull-4">
                <div id="smallCard__container" class="row"></div>
                <div id="loadMore__container">
                  <div id="loadMore" class="loadMore hidden">
                    <button id="loadMoreButton" class="waves-effect waves-light btn-large loadMore__btn"><i class="material-icons right">cloud</i>Load more</button>
                  </div>
                </div>
              </div>
            </section>
            <section id="preload__container">
              <div class="preloader-wrapper big active preloader_centered">
                <div class="spinner-layer spinner-blue">
                  <div class="circle-clipper left">
                    <div class="circle"></div>
                  </div>
                  <div class="gap-patch">
                    <div class="circle"></div>
                  </div>
                  <div class="circle-clipper right">
                    <div class="circle"></div>
                  </div>
                </div>
                <div class="spinner-layer spinner-red">
                  <div class="circle-clipper left">
                    <div class="circle"></div>
                  </div>
                  <div class="gap-patch">
                    <div class="circle"></div>
                  </div>
                  <div class="circle-clipper right">
                    <div class="circle"></div>
                  </div>
                </div>
                <div class="spinner-layer spinner-yellow">
                  <div class="circle-clipper left">
                    <div class="circle"></div>
                  </div>
                  <div class="gap-patch">
                    <div class="circle"></div>
                  </div>
                  <div class="circle-clipper right">
                    <div class="circle"></div>
                  </div>
                </div>
                <div class="spinner-layer spinner-green">
                  <div class="circle-clipper left">
                    <div class="circle"></div>
                  </div>
                  <div class="gap-patch">
                    <div class="circle"></div>
                  </div>
                  <div class="circle-clipper right">
                    <div class="circle"></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>`
})
export class AppComponent { }
