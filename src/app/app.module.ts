import {NgModule} from "@angular/core"
import {BrowserModule, platformBrowser} from "@angular/platform-browser"

import {AppComponent} from "./app.component"

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

