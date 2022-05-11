import { Container } from './styles';
import { Input, FormWrapper, FormButton, Toast } from '../../components/index';
import { FormEvent, useCallback, useState } from 'react';
import { ILogin, RequestsUser } from '../../services/requests/requests';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ManageToken } from '../../helpers/manageToken';
import { setFormState } from '../../helpers/setFormState';
import { IAuthError } from '../../interfaces/user';

export const Auth = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState<ILogin>({ password: '', email: '' });
  const [authError, setAuthError] = useState<IAuthError>({
    password: false,
    email: false,
  });
  const { email, password } = auth;

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      if (!auth) return;

      if (authError.email) toast.error('Esse email não é válido!');
      if (authError.password) toast.error('A senha deve ter 6 digitos!');

      event.preventDefault();
      const response = await RequestsUser.login(auth);

      if (response.message === 'invalid username or password') {
        toast.error('Usuário ou Senha incorretas!');
      }

      if (response.message === 'success') {
        toast.success('Usuário logado com sucesso!');
        ManageToken.set(response.data.Token);
        navigate('/users');
      }
    },
    [auth, authError.email, authError.password, navigate]
  );

  const setValue = useCallback(
    (type: 'email' | 'password', value: string) => {
      setFormState(type, value, setAuth, setAuthError);
    },
    [setAuth, setAuthError]
  );

  return (
    <Container>
      <FormWrapper onSubmit={handleSubmit}>
        <Input
          name="email"
          label="Email"
          value={email}
          setValue={(value) => setValue('email', value)}
          isError={authError.email}
        />
        <Input
          name="password"
          label="Senha"
          isPassword
          value={password}
          setValue={(value) => setValue('password', value)}
          isError={authError.password}
        />
        <FormButton text="Entrar" isSubmit />
        <FormButton text="Registrar" />
      </FormWrapper>
      <Toast />
    </Container>
  );
};
