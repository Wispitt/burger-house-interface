import * as Yup from 'yup';
import { api } from '../../services/api.js';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useUser } from '../../hooks/UserContext.jsx';

import {
	Container,
	ContainerMain,
	Form,
	Paragraph,
	InputLogin,
	ContainersSocial,
	Name,
	ContainersForm,
	EndParagraph,
	GoogleContainer,
	AppleContainer,
} from './styles';

import { Title } from '../../components/Title';
import logoGoogle from '../../assets/img/google.png';
import logoApple from '../../assets/img/apple.png';
import { Button } from '../../components/Button';

export function Login() {
	const navigate = useNavigate();

	const { putUserData } = useUser();

	const schema = Yup.object({
		email: Yup.string()
			.email('E-mail ou senha incorretos')
			.required('O e-mail é obrigatório'),
		password: Yup.string()
			.min(6, 'E-mail ou senha incorretos')
			.required('A senha é obrigatória'),
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data) => {
		try {
			const response = await api.post(
				'/sessions',
				{
					email: data.email,
					password: data.password,
				},
				{
					validateStatus: () => true,
				},
			);

			if (response.status === 200 || response.status === 201) {
				toast.success('Login realizado com sucesso!');
				setTimeout(() => {
					navigate('/home');
				}, 1000);
			} else if (response.status === 400) {
				toast.error('E-mail ou senha incorretos!');
			} else {
				throw new Error();
			}

			putUserData(response);
			// localStorage.setItem('token', token);
		} catch {
			toast.error('Ocorreu um erro! Tente novamente.');
		}
	};

	return (
		<Container>
			<ContainerMain>
				<Title />

				<Paragraph>Faça login para acessar sua conta</Paragraph>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<ContainersForm>
						<p>E-mail</p>
						<InputLogin
							type="email"
							{...register('email')}
							placeholder="Digite seu email"
						/>
						<span>{errors?.email?.message}</span>
					</ContainersForm>

					<ContainersForm>
						<p>Senha</p>
						<InputLogin
							type="password"
							{...register('password')}
							placeholder="Digite sua senha"
						/>
						<span>{errors?.password?.message}</span>
					</ContainersForm>

					<ContainersForm>
						<a>Esqueceu a senha?</a>
						<Button type="submit">Entrar</Button>
					</ContainersForm>
				</Form>
				<p style={{ fontSize: '17px' }}>ou continue com</p>

				<ContainersSocial>
					<GoogleContainer>
						<img src={logoGoogle}></img>
						<Name>Google</Name>
					</GoogleContainer>

					<AppleContainer>
						<img src={logoApple}></img>
						<Name>Apple</Name>
					</AppleContainer>
				</ContainersSocial>

				<EndParagraph>
					Ainda não tem conta?
					<a onClick={() => navigate('/cadastro-de-usuario')}>Cadastre-se</a>
				</EndParagraph>
			</ContainerMain>
		</Container>
	);
}
