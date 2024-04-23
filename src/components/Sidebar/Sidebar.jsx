import styles from './SideBar.module.css'

function Sidebar({ onClose }) {
    return (
        <aside className={styles.sidebar}>
            <button className={styles.closeSidebar} onClick={onClose}>×</button>
            <ul>
                <li>Inicio</li>
                <li>Restaurantes</li>
                <li>Contacto</li>
            </ul>
        </aside>
    );
}

export default Sidebar;
