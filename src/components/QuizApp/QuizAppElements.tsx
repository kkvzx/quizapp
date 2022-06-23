import styled from "styled-components";

export const QuestionsWrapper = styled.div``;

export const Scoreboard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 0 0;
`;

export const ScoreboardP = styled.p`
  font-family: var(--main-font);
  font-weight: 700;
  font-size: 12.8px;
  color: var(--black-font);
  margin: 0 14px;
`;

export const ScoreboardButton = styled.button`
  font-family: var(--main-font);
  font-weight: 700;
  font-size: 10.25px;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1.6px solid #00ebff;
  background-color: var(--secondary-color);
  color: white;
  cursor: pointer;
`;
