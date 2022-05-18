import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { INavConfig } from '../../constants/nav-config.const';

@Component({
  selector: 'am-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {
  public readonly navigationConfig = INavConfig;

  constructor() {}

  public ngOnInit(): void {}
}
