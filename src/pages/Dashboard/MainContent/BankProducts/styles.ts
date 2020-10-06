import styled, { css } from 'styled-components';

import { Container as ButtonContainer } from '../../../../components/Button/styles';
import ButtonBackground from '../../../../assets/images/illustrations/button-background.svg';
import { Navigation, AnimatedCard } from '../NavigationCards/styles';

export const Container = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    border-radius: ${theme.radii.default};
    box-shadow: ${theme.shadows.flat};
    padding: 2.4rem;
    width: 100%;

    > div {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      + div {
        margin-top: 2.4rem;
        display: grid;
        grid-gap: 2.4rem;
        grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
        min-height: 18.4rem;
      }
    }
  `}
`;

export const ShoppingButton = styled(ButtonContainer)`
  ${({ theme }) => css`
    padding: 1.6rem 2.4rem;
    justify-content: space-between;
    max-width: 35.2rem;
    width: 100%;
    border-radius: ${theme.radii.default};

    svg:first-of-type {
      margin-left: 1.6rem;
    }
    > div {
      color: ${theme.colors.grey};
      font-size: ${theme.fontSizes.small};
      text-align: left;
      max-width: 12rem;
      width: 100%;
      margin-left: -4rem;
      > h3 {
        color: ${theme.colors.darkGrey};
        font-size: ${theme.fontSizes.large};
      }
    }
  `}
`;

export const Products = styled(Navigation)`
  flex: 1;
  grid-template-columns: repeat(auto-fit, minmax(6.4rem, 1fr));
  margin: 0 -0.8rem 0 0.8rem;
  @media (max-width: 940px) {
    margin: 0;
  }
`;

export const ProductCard = styled(AnimatedCard)`
  ${({ theme }) => css`
    box-shadow: none;
    background: none;
    font-size: ${theme.fontSizes.small};
    min-height: 8.8rem;
    padding: 0;
    > * {
      flex-shrink: 0;
    }
    > div {
      margin-bottom: auto;
      svg {
        stroke: none;
      }
    }

    :nth-child(3) {
      > div {
        svg {
          margin: -0.4rem 0 0 -0.5rem;
        }
      }
    }
  `}
`;

export const EquityButton = styled(ButtonContainer)`
  ${({ theme }) => css`
    padding: 1.6rem 2.4rem;
    max-width: 38.4rem;
    width: 100%;
    max-height: 18.4rem;
    height: 100%;
    color: ${theme.colors.yellow};
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    border-radius: ${theme.radii.default};
    background-image: url(${ButtonBackground});
    > h3 {
      font-size: ${theme.fontSizes.large};
    }
    > div {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-end;
      width: 100%;

      > ul {
        color: ${theme.colors.label};
        li {
          display: flex;
          align-items: center;
          svg {
            stroke-width: 1.5;
            margin-right: 0.8rem;
            flex-grow: 0;
          }
        }
      }
      > button {
        font-size: ${theme.fontSizes.small};
        font-weight: 700;
        padding: 0.8rem 1.6rem;
      }
    }
  `}
`;

export const LoanButton = styled(EquityButton)`
  ${({ theme }) => css`
    background-image: none;
    > h3 {
      text-align: left;
      > span {
        display: block;
        font-weight: 300;
        color: ${theme.colors.background};
      }
    }
    > div {
      > ul {
        li {
          align-items: flex-start;
          svg {
            margin-top: 0.3rem;
          }
          span {
            max-width: 12rem;
          }
        }
      }
    }
  `}
`;
