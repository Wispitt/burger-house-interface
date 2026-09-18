import { Footer, FooterLeft, FooterMain, FooterRight } from './styles';

import instagramIcon from '../../assets/img/instagram-icon.png';
import facebookIcon from '../../assets/img/facebook-icon.png';

import visaIcon from '../../assets/img/visa-icon.png';
import masterCardIcon from '../../assets/img/mastercard-icon.png';
import eloIcon from '../../assets/img/elo-icon.png';
import pixIcon from '../../assets/img/pix-icon.jpg';

export function FooterAll() {
	return (
		<div>
			<Footer>
				<FooterLeft>
					<h4>BURGER HOUSE SNACK BAR</h4>
					<p>2024 Todos os direitos reservados.</p>
				</FooterLeft>

				<FooterMain>
					<p>Siga-nos nas redes sociais!</p>
					<div>
						<img src={instagramIcon} alt="Instagram" />
						<img src={facebookIcon} alt="Facebook" />
					</div>
				</FooterMain>

				<FooterRight>
					<p>Formas de pagamento</p>
					<div>
						<img src={visaIcon} alt="Visa" />
						<img src={masterCardIcon} alt="Mastercard" />
						<img src={eloIcon} alt="Elo" />
						<img src={pixIcon} alt="Pix" />
					</div>
				</FooterRight>
			</Footer>
		</div>
	);
}
