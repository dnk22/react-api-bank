export type TMenuSideBar = {
  name: string;
  icon: string;
  key: string;
  children?: TMenuSideBar[];
};
export const menuSideBar: TMenuSideBar[] = [
  {
    name: 'Hóa đơn',
    key: '/billing',
    icon: 'icon-grid',
  },
  {
    name: 'Cổng thanh toán',
    key: '/payment-gate',
    icon: 'icon-grid',
    children: [
      {
        name: 'Ví điện tử',
        icon: '',
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
        icon: '',
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
    icon: 'icon-grid',
    key: '/captcha',
  },
  {
    name: 'Quản lý cron job',
    key: '/cron-management',
    icon: 'icon-grid',
  },
];
