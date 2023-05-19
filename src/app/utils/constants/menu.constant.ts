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
    key: '/payment-gate',
    icon: 'fa fa-credit-card-alt',
    children: [
      {
        name: 'Ví điện tử',
        icon: 'fa fa-regular file-invoice-dollar',
        key: '/payment-gate/wallet',
        children: [
          {
            name: 'Momo',
            icon: 'momo',
            key: '/payment-gate/wallet/momo',
          },
          {
            name: 'ViettelPay',
            icon: 'momo',
            key: '/payment-gate/wallet/viettelpay',
          },
          {
            name: 'ZaloPay',
            key: '/payment-gate/wallet/zalopay',
            icon: 'momo',
          },
        ],
      },
      {
        name: 'Ngân hàng',
        icon: 'fa fa-university',
        key: '/payment-gate/bank',
        children: [
          {
            name: 'Vietcombank',
            key: '/payment-gate/bank/vcb',
            icon: 'momo',
          },
          {
            name: 'Vietinbank',
            key: '/payment-gate/bank/ctg',
            icon: 'momo',
          },
          {
            name: 'MB bank',
            key: '/payment-gate/bank/mbb',
            icon: 'momo',
          },
          {
            name: 'BIDV',
            key: '/payment-gate/bank/bidv',
            icon: 'momo',
          },
        ],
      },
    ],
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
