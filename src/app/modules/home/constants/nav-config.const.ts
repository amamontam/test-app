import {
  CALENDAR_ROUTE_CONFIG,
  CONTACTS_ROUTE_CONFIG,
  MESSAGES_ROUTE_CONFIG,
} from 'src/app/shared/constants/routing-path.consts';
import { INavItem } from '../interfaces/nav-item.interfaces';

export const INavConfig: INavItem[] = [
  {
    routerLink: MESSAGES_ROUTE_CONFIG.fullPath,
    text: 'common.messages',
  },
  {
    routerLink: CONTACTS_ROUTE_CONFIG.fullPath,
    text: 'common.contacts',
  },
  {
    routerLink: CALENDAR_ROUTE_CONFIG.fullPath,
    text: 'common.calendar',
  },
];
