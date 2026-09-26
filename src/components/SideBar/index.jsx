import { CoonatinerAll, Container, Bar, Content } from './styles';
import { useUser } from '../../hooks/UserContext';
import { useNavigate } from 'react-router-dom';

export function SideBar({ active }) {
	const { logout, userInfo } = useUser();
	const navigate = useNavigate();

	function logoutUser() {
		logout();
		navigate('/');
	}

	const closeSideBar = () => {
		active(false);
	};

	return (
		<CoonatinerAll>
			<Container sideBar={active}>
				<Bar>
					<i className="ri-user-3-line"></i>
					<p>Olá, {userInfo.data.name}!</p>
					<i className="ri-close-fill" onClick={closeSideBar} ></i>
				</Bar>
				<Content>
					<a className="data">Acessar seus dados</a>
					<a className="data" onClick={() => navigate('/carrinho')} >Carrinho</a>
					<a style={{ color: '#9E1C00' }} className="logout" onClick={logoutUser}>
						Sair da conta
					</a>
				</Content>
			</Container>
		</CoonatinerAll>
	);
}
