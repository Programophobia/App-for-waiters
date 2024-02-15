import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom';
//import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        <nav className={styles.navigation}>
            <h2 className="mb-4 text-center">WAITER APP</h2>
        </nav>
    )
}


export default NavBar