import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {RoutesComponent} from './routes/routes.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {SetupComponent} from './setup/setup.component';
import {HttpClientModule} from '@angular/common/http';
import {DigitransitService} from './services/digitransit.service';
import {FormsModule} from '@angular/forms';
import {AgmCoreModule} from '@agm/core';
import {RouteDirectionPipe} from './pipes/route-direction.pipe';
import {PipePipe} from './pipes/pipe.pipe';
import {MatExpansionModule, MatIconModule, MatListModule} from '@angular/material';
import {RouteDirectionToClassPipe} from './pipes/route-direction-to-class.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
    declarations: [
        AppComponent,
        RoutesComponent,
        TopBarComponent,
        SetupComponent,
        RouteDirectionPipe,
        PipePipe,
        RouteDirectionToClassPipe
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBlTQFBUh8yESrZ3Xhuks_JIW1MA9DnvnY'
        }),
        FlexLayoutModule,
        MatExpansionModule,
        MatListModule,
        MatIconModule
    ],
    providers: [DigitransitService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
