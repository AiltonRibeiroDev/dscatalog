import NavBarAdm from './NavBarAdm';
import './styles.css'

const Admin = () => {
  return (
    <div className="admin-container">
      <NavBarAdm />
      <div className="admin-content">
        <h1>Conteudo</h1>
      </div>
    </div>
  );
};

export default Admin;
