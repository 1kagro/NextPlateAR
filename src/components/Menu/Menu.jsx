function Menu({ menuItems }) {
    return (
        <div>
            <h3>Menú</h3>
            <ul>
                {menuItems.map(item => (
                    <li key={item.dishId}>
                        {item.dishName} - ${item.price.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Menu;