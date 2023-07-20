import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { SparkoutChatWidgetComponent } from './sparkout-chat-widget.component';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

@NgModule({
  declarations: [
    SparkoutChatWidgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    SparkoutChatWidgetComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SparkoutChatWidgetModule {
  constructor(private injector: Injector, private faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIcons(farStar);
    const element = createCustomElement(SparkoutChatWidgetComponent, { injector: this.injector });
    customElements.define('sparkout-chat-widget', element);
  }
  ngDoBootstrap() { }
}
