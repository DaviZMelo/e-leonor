import styled from 'styled-components';

export const MuralContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;

  padding: 7.5rem 0 3rem;
  text-align: center;

  margin: 0 auto;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    max-width: 80%;
    grid-template-columns: 1fr;
  }
`;

export const MuralWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`;
