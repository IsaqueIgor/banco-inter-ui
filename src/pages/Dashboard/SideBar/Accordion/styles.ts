import styled from 'styled-components';

import Button from '../../../../components/Button';

export const Container = styled(Button)`
  > div {
    :first-child {
      width: 3.2rem;
      height: 3.2rem;
      background: ${({ theme }) => theme.colors.lightGrey};
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      margin-right: 1.2rem;

      svg {
        stroke: ${({ theme }) => theme.colors.primary};
      }
    }
  }
  > svg {
    margin-left: auto;
  }
`;
