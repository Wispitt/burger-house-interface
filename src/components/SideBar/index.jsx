import { Container, Bar, Content } from './styles';
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
        <Container sideBar={active}>
            <Bar>
            <i onClick={closeSideBar} className="ri-user-3-line"><p>{userInfo.name}</p></i>

            </Bar>
            <Content onClick={logoutUser}>
                <a onClick={logoutUser}>Sair da conta</a>
            </Content>
        </Container>
    );
}