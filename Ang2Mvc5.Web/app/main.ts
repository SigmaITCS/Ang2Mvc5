import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import Appmodule = require("./app.module");
const platform = platformBrowserDynamic();

platform.bootstrapModule(Appmodule.AppModule);