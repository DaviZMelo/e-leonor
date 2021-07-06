import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;

  max-width: 300px;

  img {
    border-radius: 12px;
    margin-top: 12px;
    border: 3px solid rgb(255, 130, 92);
  }

  button {
    margin-top: 12px;
  }

  h4 {
    color: rgb(255, 130, 92);
    font-size: 24px;
  }

  border: 1px solid rgb(255, 130, 92);
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 10px 20px rgb(23 31 114 / 20%);
`;
