import React, { useState, useRef, useCallback } from 'react';

import { useTheme } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { Container, AnimatedDropdown, NavButton } from './styles';
import { DROP_DOWN_ANIMATION } from './animations';
import { User } from '../Header';
import useEventListener from '../../../hooks/useEventListener';

const removeHashFromColor = (color: string): string => color.slice(1);

type AccountDropdownProps = {
  user: User;
};

const AccountDropdown: React.FC<AccountDropdownProps> = ({ user }) => {
  const { lightGrey, secondary } = useTheme().colors;
  const { i18n } = useTranslation();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownVisibility = (): void => {
    setIsDropdownVisible(true);
  };

  const handleSelectChange = (lng: string): void => {
    i18n.changeLanguage(lng);
    window.location.reload();
  };

  const handleCloseDropdown = useCallback(
    ({ target }: Event): void => {
      if (dropdownRef.current?.contains(target as Node)) {
        return;
      }

      setIsDropdownVisible(false);
    },
    [setIsDropdownVisible],
  );

  useEventListener('click', handleCloseDropdown, {
    enabled: isDropdownVisible,
  });
  return (
    <Container onClick={handleDropdownVisibility}>
      <img
        src={`https://ui-avatars.com/api/?rounded=true&format=svg&background=${removeHashFromColor(
          lightGrey,
        )}&color=${removeHashFromColor(secondary)}&name=${user.name}`}
        alt="user"
      />
      <AnimatePresence>
        {isDropdownVisible && (
          <AnimatedDropdown
            variants={DROP_DOWN_ANIMATION}
            initial="hidden"
            animate="visible"
            exit="hidden"
            ref={dropdownRef}
          >
            <ul>
              <NavButton onClick={() => handleSelectChange('en')}>
                English
              </NavButton>
              <NavButton onClick={() => handleSelectChange('pt')}>
                Português
              </NavButton>
            </ul>
          </AnimatedDropdown>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default AccountDropdown;
