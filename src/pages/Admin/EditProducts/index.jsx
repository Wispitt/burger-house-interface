import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Image } from '@phosphor-icons/react';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';

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
	ContainerCheckBox,
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
	offer: Yup.bool(),
});

export function EditProducts() {
	const [fileName, setFileName] = useState(null);
	const [categories, setCategory] = useState([]);

	const {
		state: { product },
	} = useLocation();

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
		productFormData.append('offer', data.offer);

		await toast.promise(api.put(`/products/${product.id}`, productFormData), {
			pending: 'Editanto o produto...',
			success: 'Produto editado com sucesso!',
			error: 'Erro ao editar o produto, tente novamente',
		});
	};

	return (
		<Container>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<InputGrup>
					<Label>Nome:</Label>
					<Input
						type="text"
						{...register('name')}
						defaultValue={product.name}
					/>
					<ErrorMessage>{errors?.name?.message}</ErrorMessage>
				</InputGrup>

				<InputGrup>
					<Label>Preço:</Label>
					<Input
						type="number"
						{...register('price')}
						defaultValue={product.price / 100}
					/>
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
						defaultValue={product.category}
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
								defaultValue={product.category}
							/>
						)}
					/>
					<ErrorMessage>{errors?.category?.message}</ErrorMessage>
				</InputGrup>

				<InputGrup>
				<ContainerCheckBox>
					<input type='checkbox'
					defaoltCheaked={product.offer} 
					{...register('offer')}
					/>
					<Label>Produto em orferta?</Label>
				</ContainerCheckBox>
				</InputGrup>

				<SubmitButton>Adicionar Produto</SubmitButton>
			</Form>
		</Container>
	);
}
