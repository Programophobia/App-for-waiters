import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        <Nav className="me-auto">
             <Nav.Link as={NavLink} to="/">
             <button type="button" className="btn btn-success">HOME</button>
             </Nav.Link>
        </Nav>
    )
}

export default NavBar