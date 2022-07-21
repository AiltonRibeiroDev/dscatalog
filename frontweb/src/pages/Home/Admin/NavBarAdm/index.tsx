import { NavLink, Outlet, Link } from 'react-router-dom';
import './styles.css';

const NavBarAdm = () => {
  return (
    <nav className="admin-nav-container">
      <ul>
        <li>
          <NavLink to={'/admin/products'} className="admin-nav-item active">
            <p>Produtos</p>
          </NavLink>
        </li>
        <li>
          <NavLink to={'/admin/categories'} className="admin-nav-item">
            <p>Categorias</p>
          </NavLink>
        </li>
        <li>
          <NavLink to={'/admin/users'} className="admin-nav-item">
            <p>Usuários</p>
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </nav>
  );
};

export default NavBarAdm;
