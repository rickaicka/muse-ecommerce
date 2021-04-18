import { NgModule,  LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './features/home/home.component';
registerLocaleData(ptBr)

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    CoreModule.forRoot()
  ],
  providers: [
    { 
      provide: LOCALE_ID, 
      useValue: 'pt' 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
