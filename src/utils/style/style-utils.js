import { css } from 'styled-components';

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
