import logoBurger from '../../assets/img/burger-icon.png';
import { IconLogo, SnackBar, TitleWrapper } from './styles';

export function Title() {
	return (
		<>
			<TitleWrapper>
				<IconLogo src={logoBurger} alt="logo" />
				<h1>Burger House</h1>
			</TitleWrapper>

			<SnackBar>
				<span>SNACK BAR</span>
			</SnackBar>
		</>
	);
}
