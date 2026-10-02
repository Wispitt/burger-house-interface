import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Image } from '@phosphor-icons/react';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import {
	Container,
	Form,
	InputGrup,
	Label,
	Input,
	ErrorMessage,
	LabelUpload,
	Select,
	SubmitButton,
} from './styles';

import { api } from '../../../services/api';

const schema = Yup.object({
	name: Yup.string().required('Digite o name do produto'),
	price: Yup.number()
		.positive()
		.required('Digite o preço do produto')
		.typeError('Digite o preço do produto'),
	category: Yup.object()
		.shape({
			id: Yup.number().required(),
		})
		.required('Escolha uma categoria')
		.typeError('Escolha uma categoria'),
	file: Yup.mixed()
		.test('required', 'Escolha um arquivo', (value) => {
			return value && value.length > 0;
		})
		.test('fileSize', 'Maximo de 5MB', (value) => {
			return value && value.length > 0 && value[0].size <= 50000;
		})
		.test('type', 'Carregue apenas imagem PNG', (value) => {
			return value && value.length > 0 && value[0].type === 'image/png';
		}),
});

export function NewProduct() {
	const [fileName, setFileName] = useState(null);
	const [categories, setCategory] = useState([]);

	useEffect(() => {
		async function loadCategories() {
			const { data } = await api.get('/categories');

			setCategory(data);
		}
		loadCategories();
	}, []);

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data) => {
		const productFormData = new FormData();

        productFormData.append('name', data.name);
        productFormData.append('price', data.price);
        productFormData.append('category_id', data.category.id);
        productFormData.append('file', data.file[0]);

        await toast.promise(api.post('/products', productFormData), {
            pending: 'Adicionando o produto...',
            success: 'Produto adicionado com sucesso!',
            error: 'Erro ao adicionar o produto, tente novamente',
        });
	};

	return (
		<Container>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<InputGrup>
					<Label>Nome:</Label>
					<Input type="text" {...register('name')} />
					<ErrorMessage>{errors?.name?.message}</ErrorMessage>
				</InputGrup>

				<InputGrup>
					<Label>Preço:</Label>
					<Input type="number" {...register('price')} />
					<ErrorMessage>{errors?.price?.message}</ErrorMessage>
				</InputGrup>
				<InputGrup>
					<LabelUpload>
						<Image alt="icone de image" />
						<input
							type="file"
							{...register('file')}
							accept="image/png"
							onChange={(value) => {
								setFileName(value?.target?.files[0]?.name);
								register('file').onChange(value);
							}}
						/>
						{fileName || 'Adicione uma imagem do produto'}
					</LabelUpload>
					<ErrorMessage>{errors?.file?.message}</ErrorMessage>
				</InputGrup>

				<InputGrup>
					<Label>Categoria:</Label>
					<Controller
						name="category"
						control={control}
						render={({ field }) => (
							<Select
								{...field}
								options={categories}
								getOptionLabel={(category) => category.name}
								getOptionValue={(category) => category.id}
								placeholder="Escolha uma categoria"
								menuPortalTarget={document.body}
							/>
						)}
					/>
					<ErrorMessage>{errors?.category?.message}</ErrorMessage>
				</InputGrup>

				<SubmitButton>Adicionar Produto</SubmitButton>
			</Form>
		</Container>
	);
}
