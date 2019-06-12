import { teal, activeTeal, gray, lightGray, white } from './colors';
import { media } from './style-utils';

/* usually would use an external component library for this */
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

export const buttonStyle = `
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
font-size: 18px;
height: 50px;
background: ${gray};
width: 100%;
color: #000;
cursor: pointer;
transition: box-shadow 250ms, background-color 250ms;
&:hover {
  background: ${lightGray};
}
&:active {
  box-shadow: none;
  background: ${white};
}
&:focus {
  outline: 0;
}
${media.smQuery`
  width: 50%;
  max-width: 200px;
`}
`;
