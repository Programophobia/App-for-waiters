import styles from './NavBar.module.scss'
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Nav className={styles.navigation}>
            <h2 className="mb-4 text-left">WAITER APP</h2>
        </Nav>
    )
}


export default NavBar