import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './components/app/app.module';
// window.jQuery = require('jquery');
// require('materialize');

platformBrowserDynamic().bootstrapModule(AppModule);
