import { APP_INITIALIZER, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateService } from './shared/services/translate.service';
import { SharedModule } from './shared/shared.module';
import { IndexModule } from './views/base/index/index.module';
import { ProductModule } from './views/pages/product/product.module';
import { UserModule } from './views/pages/user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* to load and set en.json as the default application language */
export function setupTranslateFactory(service: TranslateService) {
  return () => service.use("en");
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndexModule,
    ProductModule,
    UserModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [TranslateService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
