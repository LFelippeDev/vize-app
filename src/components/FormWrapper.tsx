import styled from '@emotion/styled';

const Container = styled.form`
  background-color: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(8px);
  border-radius: 2rem;
  padding: 4rem;
  width: max-content;
  height: max-content;
  box-shadow: 30px 30px 35px rgba(0, 0, 0, 0.25);
  border: 2px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    padding: 2rem 1rem;
    backdrop-filter: none;
    width: 80vw;
  }
`;

interface IFormWrapperProps {
  children: React.ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
}

export const FormWrapper = ({ children, onSubmit }: IFormWrapperProps) => {
  return <Container onSubmit={onSubmit}>{children}</Container>;
};
