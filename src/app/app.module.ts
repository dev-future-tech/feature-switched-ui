import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PuppyListingComponent } from './puppy-listing/puppy-listing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { PetSearchComponent } from './pet-search/pet-search.component';
import { initializer } from './_service/initializer';
import { FlagrService } from './_service/flagr.service';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FlagrComponent } from './flagr/flagr.component';

@NgModule({
  declarations: [
    AppComponent,
    PuppyListingComponent,
    PetSearchComponent,
    FlagrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [ FlagrService ]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
