import React from 'react';

import { Wrapper } from './styles';
import navigation from './navigation';
import Accordion from './Accordion';

const SideBar: React.FC = () => {
  return (
    <Wrapper>
      {Object.entries(navigation).map(([key, value]) => (
        <Accordion key={key} icon={value.icon} sectionName={key} />
      ))}
    </Wrapper>
  );
};
export default SideBar;
