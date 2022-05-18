import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Locales } from '../enums/locales.enum';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private translateService: TranslateService) {}

  public initLanguage(): void {}

  public setLanguage(language: Locales): void {
    this.translateService.use(language);
  }
}
