import { css } from '@emotion/react';
import styled from "styled-components";


export const container = css`
  padding    : 0px;
  margin     : 0px;
  display    : block;
  overflow   : hidden;
  min-height : 100vh;
`;

export const CardsGrid = styled.div`
  gap                   : 20px;
  margin                : 0 auto;
  display               : grid;
  max-width             : 1000px;
  align-items           : center;
  font-family           : sans-serif;
  padding-top           : 30px;
  padding-left          : 5vw;
  padding-right         : 5vw;
  grid-auto-rows        : auto;
  grid-template-columns : repeat(auto-fill, minmax(225px, 1fr));

  @media (max-width: 576px) {
    margin-top: 20px;
    padding: 0;
  }
`;

// Text Styles

export const cardsTitle = css`
  color       : #000000;
  font-size   : 15px;
  text-align  : start;
  font-weight : 600;
`;

export const cardsInfo = css`
  color       : #6E6863;
  font-size   : 15px;
  text-align  : start;
`;
