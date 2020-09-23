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

export default {
  'Digital Account': {
    icon: <FiSmartphone />,
  },
  Cards: {
    icon: <FiCreditCard />,
  },
  Investments: {
    icon: <FiBarChart2 />,
  },
  Insurance: {
    icon: <FiUmbrella />,
  },
  Loans: {
    icon: <FiHexagon />,
  },
  Reports: {
    icon: <FiFileText />,
  },
  Safety: {
    icon: <FiShield />,
  },
} as const;
