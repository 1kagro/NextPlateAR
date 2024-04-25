import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import RestaurantList from './components/RestaurantList/RestaurantList';
import RestaurantDetail from './components/RestaurantDetail/RestaurantDetail';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css'

const restaurants = [
  {
    id: 1,
    name: "La Pizzeria",
    logoUrl: "/assets/piazzeta_logo.webp",
    imageUrl: "/assets/piazzeta_header.webp",
    distance: 1.2,
    deliveryCost: 5.00,
    menu: []
  },
  {
    id: 2,
    name: "N O A",
    logoUrl: "/assets/noasushi_logo.jpg",
    imageUrl: "/assets/noasushi_header.jpg",
    distance: 0.8,
    deliveryCost: 3.50,
    menu: []
  },
  {
    id: 3,
    name: "Mc Donald's",
    logoUrl: "/assets/mcdonalds.png",
    imageUrl: "/assets/mcdonalds_header.png",
    distance: 2.5,
    deliveryCost: 4.75,
    menu: [
      { id: 1, name: "Hamburguesa", price: 5.00, description: "Una deliciosa hamburguesa con queso", ar: true, modelUrl: "/ar/mc/hamburguer/realistic", marker: "/mc/",scale:"2 2 2",position:"-0.556 -0.763 0.108",rotation:"10.000 0.500 0" },
      { id: 2, name: "Papas fritas", price: 3.50, description: "Un acompañamiento perfecto", ar: true, modelUrl: "/ar/mc/f fries/", marker: "/mc/,",scale:"0.100 -0.100 0.100",position:"0 0 0",rotation:"0 0 0"},
      { id: 3, name: "Coca-Cola", price: 2.00, description: "Refresco de cola, tamaño mediano", ar: true, modelUrl: "/ar/mc/coca/", marker: "/mc/",scale:"2 2 2",position:"-0.139 -1.121 -0.521",rotation:"10.000 0.500 0"},
    ]
  }
];

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <Router>
      <div className='App'>
        <Navbar toggleSidebar={toggleSidebar} />
        {isSidebarOpen && <Sidebar onClose={closeSidebar} />}
        <Routes>
          <Route path="/" element={
            <main className='main'>
              <h1>Restaurantes</h1>
              <RestaurantList restaurants={restaurants} />
            </main>
          } />
          <Route path="/restaurant/:id" element={<RestaurantDetail restaurants={restaurants} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
