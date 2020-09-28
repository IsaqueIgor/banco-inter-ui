import React from 'react';

import {
  FiBarChart2,
  FiHexagon,
  FiCreditCard,
  FiSmartphone,
  FiFileText,
  FiUmbrella,
  FiShield,
} from 'react-icons/fi';

import { i18n } from '../translate/i18n';

export default {
  'Digital Account': {
    icon: <FiSmartphone />,
    label: i18n.t('navigation.digitalAccount'),
  },
  Cards: {
    icon: <FiCreditCard />,
    label: i18n.t('navigation.cards'),
  },
  Investments: {
    icon: <FiBarChart2 />,
    label: i18n.t('navigation.investments'),
  },
  Insurance: {
    icon: <FiUmbrella />,
    label: i18n.t('navigation.insurances'),
  },
  Loans: {
    icon: <FiHexagon />,
    label: i18n.t('navigation.loans'),
  },
  Reports: {
    icon: <FiFileText />,
    label: i18n.t('navigation.reports'),
  },
  Safety: {
    icon: <FiShield />,
    label: i18n.t('navigation.safety'),
  },
} as const;
