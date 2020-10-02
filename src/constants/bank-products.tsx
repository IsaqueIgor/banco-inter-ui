import React from 'react';

import { i18n } from '../translate/i18n';
import {
  HomeIcon,
  TicketIcon,
  SmartphoneIcon,
  CarIcon,
  BasketballIcon,
} from '../assets/images/icons';

export default {
  Casa: {
    label: i18n.t('navigation.house'),
    icon: <HomeIcon />,
  },
  Entretenimento: {
    label: i18n.t('navigation.entertainment'),
    icon: <TicketIcon />,
  },
  Tecnologia: {
    label: i18n.t('navigation.tecnology'),
    icon: <SmartphoneIcon />,
  },
  Transporte: {
    label: i18n.t('navigation.transport'),
    icon: <CarIcon />,
  },
  Esporte: {
    label: i18n.t('navigation.sport'),
    icon: <BasketballIcon />,
  },
};
