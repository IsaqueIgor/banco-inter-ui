import React from 'react';

import {
  FiBarChart2,
  FiCreditCard,
  FiGift,
  FiUmbrella,
  FiRepeat,
} from 'react-icons/fi';

import { i18n } from '../translate/i18n';
import { BoletoIcon } from '../assets/images/icons';

export default {
  Transferring: {
    label: i18n.t('navigation.transferring'),
    icon: <FiRepeat />,
  },
  Payments: {
    label: i18n.t('navigation.payments'),
    icon: <BoletoIcon />,
  },
  Investments: {
    label: i18n.t('navigation.investments'),
    icon: <FiBarChart2 />,
  },
  Cards: {
    label: i18n.t('navigation.cards'),
    icon: <FiCreditCard />,
  },
  'Gift Card': {
    label: i18n.t('navigation.giftCard'),
    icon: <FiGift />,
  },
  Insurances: {
    label: i18n.t('navigation.insurances'),
    icon: <FiUmbrella />,
  },
} as const;
