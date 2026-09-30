import { SignOut } from '@phosphor-icons/react'

import { Container, NavLinkContainer, NavLink, Footer } from './styles'

import { navLinks } from './navLinks';
import { useUser } from '../../hooks/UserContext';

export function SideBarAdmin() {

    const { logout } = useUser();

	return (
		<Container>
			<h1>Burger House</h1>
			<NavLinkContainer>
				{navLinks.map((data) => (
					<NavLink key={data.id} to={data.path}>
                        {data.icon}
                        <span>{data.label}</span>
                    </NavLink>
				))}
			</NavLinkContainer>
            <Footer>
                <NavLink to='/' onClick={logout} >
                    <SignOut />
                    <span>Sair</span>
                </NavLink>
            </Footer>
		</Container>
	);
}
