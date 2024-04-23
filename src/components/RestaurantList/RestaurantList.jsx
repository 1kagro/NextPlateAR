import RestaurantCard from '../RestaurantCard/RestaurantCard';
import styles from './RestaurantList.module.css';

function RestaurantList({ restaurants }) {
    return (
        <div className={styles.restaurantList}>
            {restaurants.map((restaurant) => (
                <RestaurantCard
                    key={restaurant.id}
                    id={restaurant.id}
                    name={restaurant.name}
                    logoUrl={restaurant.logoUrl}
                    imageUrl={restaurant.imageUrl}
                    distance={restaurant.distance}
                    deliveryCost={restaurant.deliveryCost}
                />
            ))}
        </div>
    );
}

export default RestaurantList;
