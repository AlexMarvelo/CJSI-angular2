import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <app-header></app-header>
    <div class="section no-pad-bot" id="index-banner">
      <div class="container">
        <br><br>
        <h1 class="header center orange-text">Starter Template</h1>
        <div class="row center">
          <h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
        </div>
        <div class="row center">
          <a href="http://materializecss.com/getting-started.html" id="download-button" class="btn-large waves-effect waves-light orange">Get Started</a>
        </div>
        <br><br>
      </div>
    </div>
    <app-footer></app-footer>`
})
export class AppComponent { }
