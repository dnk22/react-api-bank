export type TMenuSideBar = {
  name: string;
  icon: string;
  key: string;
  children?: TMenuSideBar[];
};
export const menuSideBar: TMenuSideBar[] = [
  {
    name: 'Tổng quan',
    key: '/dashboard',
    icon: 'icon-home',
  },
  {
    name: 'Hóa đơn',
    key: '/billing',
    icon: 'fa fa-shopping-cart',
  },
  {
    name: 'Cổng thanh toán',
    key: '/payment-management',
    icon: 'fa fa-credit-card-alt',
  },
  {
    name: 'Captcha',
    icon: 'fa fa-id-badge',
    key: '/captcha',
  },
  {
    name: 'Quản lý cron job',
    key: '/cron-management',
    icon: 'fa fa-superpowers',
  },
];
