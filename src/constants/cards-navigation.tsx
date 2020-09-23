import React from 'react';

import {
  FiBarChart2,
  FiCreditCard,
  FiGift,
  FiUmbrella,
  FiRepeat,
} from 'react-icons/fi';

import { BoletoIcon } from '../assets/images/icons';

export default {
  Tranferring: {
    icon: <FiRepeat />,
  },
  Payments: {
    icon: <BoletoIcon />,
  },
  Investments: {
    icon: <FiBarChart2 />,
  },
  Cards: {
    icon: <FiCreditCard />,
  },
  'Gift Card': {
    icon: <FiGift />,
  },
  Insurances: {
    icon: <FiUmbrella />,
  },
} as const;
