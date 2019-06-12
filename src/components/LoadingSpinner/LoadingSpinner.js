import React from 'react';
import { RotatingSpinner, RectSpinner } from './LoadingSpinner.styles';

export const LoadingSpinner = ({ variation }) => {
  if (variation === 'rect') {
    return (
      <RectSpinner>
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
      </RectSpinner>
    );
  } else {
    return (
      <RotatingSpinner>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </RotatingSpinner>
    );
  }
};

export default LoadingSpinner;
