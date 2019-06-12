import styled from 'styled-components';

export const RotatingSpinner = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  width: 64px;
  height: 64px;
  div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 32px 32px;
    &:after {
      content: ' ';
      display: block;
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.5);
      margin: -3px 0 0 -3px;
    }
    &:nth-child(1) {
      animation-delay: -0.036s;
      &:after {
        top: 50px;
        left: 50px;
      }
    }
    &:nth-child(2) {
      animation-delay: -0.072s;
      &:after {
        top: 54px;
        left: 45px;
      }
    }
    &:nth-child(3) {
      animation-delay: -0.108s;
      &:after {
        top: 57px;
        left: 39px;
      }
    }
    &:nth-child(4) {
      animation-delay: -0.144s;
      &:after {
        top: 58px;
        left: 32px;
      }
    }
    &:nth-child(5) {
      animation-delay: -0.18s;
      &:after {
        top: 57px;
        left: 25px;
      }
    }
    &:nth-child(6) {
      animation-delay: -0.216s;
      &:after {
        top: 54px;
        left: 19px;
      }
    }
    &:nth-child(7) {
      animation-delay: -0.252s;
      &:after {
        top: 50px;
        left: 14px;
      }
    }
    &:nth-child(8) {
      animation-delay: -0.288s;
      &:after {
        top: 45px;
        left: 10px;
      }
    }
  }
  @keyframes lds-roller {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const RectSpinner = styled.div`
  height: 50px;
  width: 50px;
  text-align: center;
  font-size: 10px;

  > div {
    background-color: #fff;
    height: 100%;
    width: 7px;
    margin: 0 3px 0 0;
    display: inline-block;
    animation: sk-stretchdelay 1.2s infinite ease-in-out;
  }

  .rect2 {
    animation-delay: -1.1s;
  }

  .rect3 {
    animation-delay: -1s;
  }

  .rect4 {
    animation-delay: -0.9s;
  }

  .rect5 {
    animation-delay: -0.8s;
  }

  @keyframes sk-stretchdelay {
    0%,
    40%,
    100% {
      transform: scaleY(0.4);
      -webkit-transform: scaleY(0.4);
    }
    20% {
      transform: scaleY(1);
      -webkit-transform: scaleY(1);
    }
  }
`;
