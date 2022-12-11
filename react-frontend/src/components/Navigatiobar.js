import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cours from './../images/cours.jpg';

function Navigationbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Link to={''} className="navbar-brand">
        <img src={cours} width="25" height="25" /> Ensias
      </Link>
      <Link to={'add'} className="nav-link" style={{ margin: '20px' }}>
        Ajouter un Module
      </Link>
      <Link to={'list'} className="nav-link">
        Liste des Modules
      </Link>
    </Navbar>
  );
}

export default Navigationbar;
