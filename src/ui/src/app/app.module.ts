import {NgModule} from '@angular/core';
import {CommonModule, HashLocationStrategy, LocationStrategy} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {NgxResponsiveEmbedModule} from "ngx-responsive-embed";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PlayerComponent} from './routes/player/player.component';
import {VideoPlayerComponent} from './shared/components/video-player/video-player.component';
import {SafeVideoUrlPipe} from './shared/pipes/safe-video-url-pipe/safe-video-url.pipe';
import {ShikivideosService} from "./services/shikivideos-api/shikivideos.service";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    VideoPlayerComponent,
    SafeVideoUrlPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    NgxResponsiveEmbedModule,
    CommonModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    ShikivideosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
