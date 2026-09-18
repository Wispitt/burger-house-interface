import { IconAdd } from './styles';

import addIcon from '../../assets/img/add-cart-icon.png';

export function CartButton({...props}) {
	return (
		<div>
			<IconAdd {...props} src={addIcon} />
		</div>
	);
}
