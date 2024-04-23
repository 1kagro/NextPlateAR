import styles from './RestaurantCard.module.css';
import { FaClock, FaMotorcycle } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function RestaurantCard({ id, name, logoUrl, imageUrl, distance, deliveryCost }) {
    return (
        <Link to={`/restaurant/${id}`} className={styles.card}>
            <img src={imageUrl} alt={name} className={styles.image} />
            <div className={styles.info}>
                <img src={logoUrl} alt={`${name} logo`} className={styles.logo} />
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.distance}><FaClock /> {distance}km</p>
                <p className={styles.deliveryCost}><FaMotorcycle/> ${deliveryCost}</p>
            </div>
        </Link>
    );
}

export default RestaurantCard;