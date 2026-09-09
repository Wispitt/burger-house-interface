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

export function CadastroUser() {
	const schema = Yup.object({
		name: Yup.string().required('O nome é obrigatório'),
		email: Yup.string()
			.email('Digite um e-mail válido')
			.required('O e-mail é obrigatório'),
		password: Yup.string()
			.min(6, 'A senha deve ter no mínimo 6 caracteres')
			.required('A senha é obrigatória'),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais')
			.required('A confirmação de senha é obrigatória'),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data) => {
		const reponse = await toast.promise(
			api.post('/users', {
			name: data.name,
			email: data.email,
			password: data.password,
		}),
			{
				pending: 'Cadastrando usuário...',
				success: 'Cadastro realizado com sucesso!',
				error: 'Erro ao cadastrar usuário',
			}
		)
	};

	const navigate = useNavigate();

	return (
		<Container>
			<ContainerMain>
				<Title />

				<Paragraph>Crie sua conta na Burger House</Paragraph>

				<Form onSubmit={handleSubmit(onSubmit)}>
					<ContainersForm>
						<p>Nome</p>
						<InputLogin
							type="text"
							{...register('name')}
							placeholder="Digite seu nome"
						/>
						<span>{errors?.name?.message}</span>
					</ContainersForm>

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
							placeholder="Crie uma senha"
						/>
						<span>{errors?.password?.message}</span>
					</ContainersForm>

					<ContainersForm>
						<p>Confirmar senha</p>
						<InputLogin
							type="password"
							{...register('confirmPassword')}
							placeholder="Confirme sua senha"
						/>
						<span>{errors?.confirmPassword?.message}</span>
					</ContainersForm>

					<ContainersForm>
						<Button type="submit">Cadastrar-se</Button>
					</ContainersForm>
				</Form>
				<p style={{ fontSize: '17px' }}>ou cadastre-se com</p>

				<ContainersSocial>
					<GoogleContainer>
						<img src={logoGoogle} alt="Google" />
						<Name>Google</Name>
					</GoogleContainer>

					<AppleContainer>
						<img src={logoApple} alt="Apple" />
						<Name>Apple</Name>
					</AppleContainer>
				</ContainersSocial>

				<EndParagraph>
					Já tem uma conta?<a onClick={() => navigate('/')}>Entrar</a>
				</EndParagraph>
			</ContainerMain>
		</Container>
	);
}
