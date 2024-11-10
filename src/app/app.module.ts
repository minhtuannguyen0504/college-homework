import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserEffects } from './state/effects/user.effects';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from './state/reducers/user.reducers';
import { StoreModule } from '@ngrx/store';
import { UserWithNgrxService } from './services/user-with-ngrx.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    EffectsModule.forRoot([UserEffects]),
    StoreModule.forRoot({ user: userReducer }),
  ],
  providers: [UserWithNgrxService],
  bootstrap: [AppComponent],
})
export class AppModule {}
