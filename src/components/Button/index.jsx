import { Buttons } from './styles';

export function Button({ children, ...rest }) {
	return (
		<>
			<Buttons {...rest}>{children}</Buttons>
		</>
	);
}
