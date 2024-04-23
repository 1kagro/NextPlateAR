import styles from './Navbar.module.css';
import { FaBars, FaUser, FaShoppingCart } from 'react-icons/fa';

function Navbar({ toggleSidebar }) {
    return (
        <nav className={styles.navbar}>
            <div className={styles.menuIcon} onClick={toggleSidebar}>
                {/* <span>☰</span> */}
                <FaBars size={16} />
            </div>
            <input type="text" placeholder="Buscar restaurantes..." className={styles.searchInput} />
            <div className={styles.navbarIcons}>
                <div className='icon'>
                    <FaUser size={16} />
                </div>
                <div className='icon'>
                    <FaShoppingCart size={16} />
                </div>
                {/* <span>👤</span> */}
                {/* <span>🛒</span> */}
            </div>
        </nav>
    );
}

export default Navbar;