import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './componentes/Header';
import MyCard from './componentes/MyCard';
import Footer from './componentes/Footer';


const App = () => {

  const datosTarjetas = [
    {
      imagen: "src/assets/img/1.jpg",
      nombre: "Max",
      descripcion: "Max es un perro cariñoso y juguetón que siempre está listo para salir a pasear y hacer nuevos amigos en el parque.",
      sexo: "Macho",
      colorSexo: "dark",
      castrado: "Esterilizado",
      colorCastrado: "success"
    },
    {
      imagen: "src/assets/img/2.jpg",
      nombre: "Luna",
      descripcion: "Luna es una perrita dulce y tranquila que disfruta de largas siestas bajo el sol y de recibir mimos en su pancita.",
      sexo: "Hembra",
      colorSexo: "danger",
      castrado: "No esterilizado",
      colorCastrado: "primary"
    },
    {
      imagen: "src/assets/img/3.jpg",
      nombre: "Rocky",
      descripcion: "Rocky es un perro valiente y leal que siempre protegerá a su familia y les dará amor incondicional.",
      sexo: "Macho",
      colorSexo: "dark",
      castrado: "Esterilizado",
      colorCastrado: "success"
    },
    {
      imagen: "src/assets/img/4.jpg",
      nombre: "Bella",
      descripcion: "Bella es una perrita elegante y graciosa que adora correr por el jardín y perseguir mariposas.",
      sexo: "Hembra",
      colorSexo: "danger",
      castrado: "Esterilizado",
      colorCastrado: "success"
      
    },
    {
      imagen: "src/assets/img/5.jpg",
      nombre: "Coco",
      descripcion: " Coco es un perro inteligente y curioso que le encanta aprender nuevos trucos y explorar el mundo que lo rodea.",
      sexo: "Macho",
      colorSexo: "dark",
      castrado: "Esterilizado",
      colorCastrado: "success"
    },
    {
      imagen: "src/assets/img/6.jpg",
      nombre: "Daisy",
      descripcion: "Daisy es una perrita energética y aventurera que nunca se cansa de jugar al aire libre y descubrir nuevos lugares emocionantes.",
      sexo: "Hembra",
      colorSexo: "danger",
      castrado: "Esterilizado",
      colorCastrado: "success"
    },

  ];

  return (
    <div>
      <Header titulo="Adopta un perrito" />
      <main>
        {datosTarjetas.map((tarjeta, index) => (
          <MyCard 
            key={index} 
            imagen={tarjeta.imagen} 
            nombre={tarjeta.nombre} 
            descripcion={tarjeta.descripcion} 
            sexo={tarjeta.sexo}
            colorSexo={tarjeta.colorSexo}
            castrado={tarjeta.castrado}
            colorCastrado={tarjeta.colorCastrado}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default App;
