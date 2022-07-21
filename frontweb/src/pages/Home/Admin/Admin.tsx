import ButtonIcon from 'components/ButtonIcon';
import { Routes, Route, Outlet } from 'react-router-dom';
import NavBarAdm from './NavBarAdm';
import './styles.css';

const Admin = () => {
  return (
    <div className="admin-container">
    <NavBarAdm />
      <div className="admin-content">
    
        <Routes>
          <Route path="/admin" element={<Admin />}>
            <Route
              path="/admin/products"
              element={<ButtonIcon text="teste" />}
            />
            <Route path="/admin/categories" element={<h1>Categori CRUD</h1>} />
            <Route path="/admin/users" element={<h1>User CRUD</h1>} />
          </Route>
        </Routes>
      </div>
      <Outlet/>
    </div>
         
  );
};

export default Admin;
