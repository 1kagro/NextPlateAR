import { useState } from 'react';
import { useParams } from 'react-router-dom';
import MenuItemCard from '../MenuItemCard/MenuItemCard';
import ARView from '../ARView/ARView';
import styles from './RestaurantDetail.module.css';

function RestaurantDetail({ restaurants }) {
    const { id } = useParams();
    const restaurant = restaurants.find(r => r.id.toString() === id);

    const [isViewingAR, setIsViewingAR] = useState(false);
    const [selectedDish, setSelectedDish] = useState(null);

    const handleViewInAR = (dish) => {
        setIsViewingAR(true);
        setSelectedDish(dish);
    };

    const handleBackToList = () => {
        setIsViewingAR(false);
        setSelectedDish(null);
    };

    return (
        <div>
            {isViewingAR ? (
                <>
                    <ARView dish={selectedDish} />
                    <button onClick={handleBackToList}>Volver al Menú</button>
                </>
            ) : (
                <div className={styles.dishMain}>
                    <h1>{restaurant.name}</h1>
                    <img src={restaurant.imageUrl} alt={restaurant.name} />
                    <div>
                        {restaurant.menu.map(dish => (
                            <MenuItemCard
                                key={dish.id}
                                dish={dish}
                                onViewInAR={() => handleViewInAR(dish)}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>

    );
}

export default RestaurantDetail;