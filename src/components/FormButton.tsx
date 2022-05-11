import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { isMobile } from '../helpers/isMobile';

interface IFormButtonProps {
  text: string;
  isSubmit?: boolean;
}

const StyledButton = styled(Button)`
  border-radius: 2rem;
`;

export const FormButton = ({ text, isSubmit }: IFormButtonProps) => {
  const navigate = useNavigate();
  const deviceIsMobile = isMobile();

  return (
    <StyledButton
      sx={{ m: 1, width: deviceIsMobile ? '100%' : '20rem' }}
      variant="contained"
      color="primary"
      type={isSubmit ? 'submit' : 'button'}
      onClick={() => {
        if (!isSubmit) navigate('/register');
      }}
    >
      {text}
    </StyledButton>
  );
};
