import { Injector, NgModule } from '@angular/core';
import { SparkoutChatWidgetComponent } from './sparkout-chat-widget.component';
import  { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


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
  ]
})
export class SparkoutChatWidgetModule {
  constructor(private injector: Injector) {
    const element = createCustomElement(SparkoutChatWidgetComponent, { injector: this.injector });
    customElements.define('sparkout-chat-widget', element);
  }
  ngDoBootstrap() {}
}
