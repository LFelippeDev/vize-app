import styled from '@emotion/styled';
import background from '../../assets/background.jpg';

export const Container = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;
