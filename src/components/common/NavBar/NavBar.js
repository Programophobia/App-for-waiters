import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const NavBar = () => {
    return (
        <Nav className="me-auto">
             <Nav.Link as={NavLink} to="/">Home</Nav.Link>
        </Nav>
    )
}

export default NavBar