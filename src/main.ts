//Necesary for compiler
import '@angular/compiler'
import 'zone.js'
// end

import { bootstrapApplication } from '@angular/platform-browser'
import { appConfig } from './app/app.config'
import { AppComponent } from './app/app.component'

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err))
