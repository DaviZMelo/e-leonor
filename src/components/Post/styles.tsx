import styled from 'styled-components';

export const PostContainer = styled.div`
  position: relative;
  padding: 1.5rem 0 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }

  img {
    max-width: 300px;
    max-height: 300px;
    border-radius: 12px;
    margin-bottom: 24px;
  }

  max-width: 720px;

  @media only screen and (max-width: 768px) {
    padding: 4rem 0 3rem;
    max-width: 80%;
  }
`;

export const PostWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
