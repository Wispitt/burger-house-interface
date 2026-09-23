import { Table } from '../index';
import { useCart } from '../../hooks/CartContext';
import { formatePrice } from '../../utils/formatePrice';
import { ButtonGroup, ProductImage, EmptyCart, TrashImage } from './styles';

import TrashIcon from '../../assets/img/trash.svg';

export function CartItems() {
	const { cartProducts, increaseProduct, decreaseProduct, deleteProduct } =
		useCart();

	return (
		<Table.Root>
			<Table.Header>
				<Table.Tr>
					<Table.Th></Table.Th>
					<Table.Th>Items</Table.Th>
					<Table.Th>Preço</Table.Th>
					<Table.Th>Quantidade</Table.Th>
					<Table.Th>Total</Table.Th>
					<Table.Th></Table.Th>
				</Table.Tr>
			</Table.Header>
			<Table.Body>
				{cartProducts?.length ? (
					cartProducts.map((product) => (
						<Table.Tr key={product.id}>
							<Table.Td>
								<ProductImage
									style={product.id === 44 ? { width: '78px' } : undefined}
									src={product.url}
								/>
							</Table.Td>
							<Table.Td>{product.name}</Table.Td>
							<Table.Td>{product.currencyValue}</Table.Td>
							<Table.Td>
								<ButtonGroup>
									<button onClick={() => decreaseProduct(product.id)}>-</button>
									{product.quantity}
									<button onClick={() => increaseProduct(product.id)}>+</button>
								</ButtonGroup>
							</Table.Td>
							<Table.Td>
								{formatePrice(product.quantity * product.price)}
							</Table.Td>
							<Table.Td>
								<TrashImage
									src={TrashIcon}
									alt="lixeira"
									onClick={() => deleteProduct(product.id)}
								/>
							</Table.Td>
						</Table.Tr>
					))
				) : (
					<EmptyCart>Carrinho vaziou</EmptyCart>
				)}
			</Table.Body>
		</Table.Root>
	);
}
