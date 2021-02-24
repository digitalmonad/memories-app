import styled from "styled-components";

export const Root = styled.div`
  position: fixed;
  top: -60px;
  animation: enter-leave 3s ease-in-out;
  left: calc(50% - 300px);
  width: 600px;
  height: 42px;
  border: 1px solid red;
  border-radius: 4px;
  z-index: 20000;
  padding: 0px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &.error {
    border: 1px solid tomato;
    background-color: lightSalmon;
    color: darkred;
  }
  &.success {
    border: 1px solid teal;
    background-color: #66cdaa;
    color: teal;
  }
  @keyframes enter-leave {
    0% {
      top: -60px;
    }
    7.5% {
      top: 4px;
    }
    12% {
      top: 2px;
    }
    92.5% {
      top: 2px;
    }
    95% {
      top: -10px;
    }
    100% {
      top: -60px;
    }
  }
  @media screen and (max-width: 640px) {
    width: 320px;
    left: calc(50% - 180px);
  }
`;

export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Message = styled.div`
  flex-grow: 1;
  margin-left: 18px;
  font-size: 1rem;
  font-weight: 400;
`;
