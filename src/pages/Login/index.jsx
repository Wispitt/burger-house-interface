import * as Yup from 'yup';
import { api } from '../../services/api.js';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

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
import { AxiosError } from 'axios';

export function LoginUser() {
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
		const { status } = await api.post(
			'/sessions',
			{
				emal: data.email,
				password: data.password,
			},
			{
				validateStatus: () => true,
			},
		);

		if (status === 200  status === 201)

		console.log(status);
	};

	const navigate = useNavigate();

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
						<Button type="submit" onClick={() => navigate('/home')}>
							Entrar
						</Button>
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
