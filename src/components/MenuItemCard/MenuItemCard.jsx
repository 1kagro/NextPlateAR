import styles from './MenuItemCard.module.css';

function MenuItemCard({ dish, onViewInAR }) {
    const handleAddToCart = () => {
        console.log(`Agregar ${dish.name} al carrito`);
        // Aquí puedes implementar la lógica para agregar el plato al carrito de compras
    };

    // const handleViewInAR = () => {
    //     console.log(`Ver ${dishName} en Realidad Aumentada`);
    //     // Aquí puedes implementar la lógica para ver el plato en Realidad Aumentada
    // };

    return (
        <div className={styles.card}>
            <h4>{dish.name}</h4>
            <p>{dish.description}</p>
            <p>${dish.price.toFixed(2)}</p>
            <button onClick={handleAddToCart}>Agregar al carrito</button>
            <button onClick={() => onViewInAR(dish)}>Ver en RA</button>
        </div>
    );
}

export default MenuItemCard;