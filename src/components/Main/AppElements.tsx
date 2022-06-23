import styled from "styled-components";

export const AppWrapper = styled.div`
  background: radial-gradient(
    73.23% 106% at 34.94% 108.33%,
    #f7cbfd 0%,
    #7758d1 100%
  );
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const AppSection = styled.div`
  background: var(--background-color);
  width: 650px;
  height: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  padding: 0 70px 0 70px;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: inset 1px 0px 0px rgba(255, 255, 255, 0.1);
`;
