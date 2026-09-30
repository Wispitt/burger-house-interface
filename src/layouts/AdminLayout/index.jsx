import { Outlet, Navigate } from 'react-router-dom';

import { SideBarAdmin } from '../../components';
import { Container } from './styles';

export function AdminLayout() {
    const { data: { admin: isAdmin } } = JSON.parse(
        localStorage.getItem('burger-house:userData')
    );

    return isAdmin ?
        (
            <Container>
                <SideBarAdmin />
                <main>
                    <section>
                        <Outlet />
                    </section>
                </main>
            </Container>
        ) : <Navigate to={'/'} />;
}