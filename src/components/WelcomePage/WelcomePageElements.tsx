import styled from "styled-components";

export const WelcomePageWrapper = styled.div`
  width: 412px;
  height: 148px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--black-font);
`;
export const WelcomePageHeader = styled.h1`
  font-family: var(--secondary-font);
`;
export const WelcomePageP = styled.p`
  margin: 7px 0 20px 0;
  font-family: var(--main-font);
`;
export const StartGameButton = styled.button`
  width: 193px;
  height: 52px;
  color: #f5f7fb;
  font-family: var(--main-font);
  background: var(--secondary-color);
  border-radius: 15px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    border: 2px solid #00ebff;
  }
`;
