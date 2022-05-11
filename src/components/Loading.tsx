import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid rgba(255, 255, 255, 0.3);
  border-right: 2px solid rgba(255, 255, 255, 0.3);
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  border-left: 4px solid #0084ff;
  background: transparent;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loading = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  );
};
