import { VisibilityOff, Visibility } from '@mui/icons-material';
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { useState } from 'react';
import { isMobile } from '../helpers/isMobile';

interface IInputProps {
  name: string;
  label: string;
  isPassword?: boolean;
  isError?: boolean;
  setValue: (value: string) => void;
  value: string;
}

export const Input = ({
  name,
  label,
  isPassword,
  isError,
  setValue,
  value,
}: IInputProps) => {
  const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(false);
  const deviceIsMobile = isMobile();

  return (
    <FormControl
      sx={{ m: 1, width: deviceIsMobile ? '100%' : '20rem' }}
      variant="outlined"
    >
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <OutlinedInput
        id={name}
        type={isVisiblePassword || !isPassword ? 'text' : 'password'}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        error={isError}
        endAdornment={
          isPassword && (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setIsVisiblePassword(!isVisiblePassword)}
                onMouseDown={() => {}}
                edge="end"
              >
                {isVisiblePassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }
        label={label}
      />
    </FormControl>
  );
};
