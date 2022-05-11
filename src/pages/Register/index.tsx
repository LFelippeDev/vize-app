import { Container } from './styles';
import { Input, FormWrapper, FormButton, Toast } from '../../components/index';
import { FormEvent, useCallback, useState } from 'react';
import { IRegister, RequestsUser } from '../../services/requests/requests';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ManageToken } from '../../helpers/manageToken';
import { IRegisterError } from '../../interfaces/user';
import { setFormState } from '../../helpers/setFormState';

export const Register = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState<IRegister>({
    password: '',
    email: '',
    name: '',
  });
  const [registerError, setRegisterError] = useState<IRegisterError>({
    password: false,
    email: false,
    name: false,
  });
  const { email, password, name } = register;

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      if (!register) return;

      if (registerError.email) toast.error('Esse email não é válido!');
      if (registerError.password) toast.error('A senha deve ter 6 digitos!');
      if (registerError.name) toast.error('O nome deve ser preenchido!');

      event.preventDefault();
      const response = await RequestsUser.login(register);

      if (
        response.message ===
        'The email address you have entered is already registered'
      ) {
        toast.error('Email já está em uso!');
      }

      if (response.message === 'success') {
        toast.success('Usuário registrado com sucesso!');
        ManageToken.set(response.data.Token);
        navigate('/users');
      }
    },
    [
      register,
      registerError.email,
      registerError.password,
      registerError.name,
      navigate,
    ]
  );

  const setValue = useCallback(
    (type: 'email' | 'name' | 'password', value: string) => {
      setFormState(type, value, setRegister, setRegisterError);
    },
    [setRegister, setRegisterError]
  );

  return (
    <Container>
      <FormWrapper onSubmit={handleSubmit}>
        <Input
          name="email"
          label="Email"
          value={email}
          setValue={(value) => setValue('email', value)}
          isError={registerError.email}
        />
        <Input
          name="name"
          label="Nome"
          value={name}
          setValue={(value) => setValue('name', value)}
          isError={registerError.name}
        />
        <Input
          name="password"
          label="Senha"
          isPassword
          value={password}
          setValue={(value) => setValue('password', value)}
          isError={registerError.password}
        />
        <FormButton text="Registrar" isSubmit />
      </FormWrapper>
      <Toast />
    </Container>
  );
};
