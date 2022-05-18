import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from 'src/environments/environment';

export const translateHttpLoaderFactory = (
  http: HttpClient
): TranslateHttpLoader => {
  return new TranslateHttpLoader(http);
};

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient],
      },
      useDefaultLang: true,
    }),
  ],
  exports: [TranslateModule],
})
export class TranslateRootModule {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(environment.localization.defaultLanguage);
  }
}
