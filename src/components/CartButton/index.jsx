import { IconAdd } from './styles';

import addIcon from '../../assets/img/add-cart-icon.png';
import { useCart } from '../../hooks/CartContext';

export function CartButton({ product }) {
	const { putProductInCart } = useCart();

	return (
		<div>
			<IconAdd
				onClick={() => putProductInCart(product)}

				src={addIcon}
			/>
		</div>
	);
}
