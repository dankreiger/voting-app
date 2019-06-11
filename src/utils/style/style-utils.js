import { css } from 'styled-components';
import { teal, activeTeal } from './colors';

export const sizes = {
  smQuery: 576,
  mdQuery: 768,
  lgQuery: 992,
  xlQuery: 1200,
  xxlQuery: 1500,
  xxxlQuery: 1750
};
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export const cardStyle = `
  text-decoration: none;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), background 450ms;
  background: ${teal};
  color: #fff;

  &:hover {
    box-shadow: 0 7px 8px rgba(0, 0, 0, 0.25);
    background: ${activeTeal};
  }
  &:active {
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.25), 0 0px 0px rgba(0, 0, 0, 0.22);
  }
`;
