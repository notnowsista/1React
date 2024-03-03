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
      colorButton: "success",
      textButton:"Adopta ahora",
      sexo: "Macho",
      colorSexo: "dark"
    },
    {
      imagen: "src/assets/img/2.jpg",
      nombre: "Luna",
      descripcion: "Luna es una perrita dulce y tranquila que disfruta de largas siestas bajo el sol y de recibir mimos en su pancita.",
      colorButton:"warning",
      textButton:"Dona para su operación",
      sexo: "Hembra",
      colorSexo: "danger"
    },
    {
      imagen: "src/assets/img/3.jpg",
      nombre: "Rocky",
      descripcion: "Rocky es un perro valiente y leal que siempre protegerá a su familia y les dará amor incondicional.",
      colorButton: "success",
      textButton:"Adopta ahora",
      sexo: "Macho",
      colorSexo: "dark"
    },
    {
      imagen: "src/assets/img/4.jpg",
      nombre: "Bella",
      descripcion: "Bella es una perrita elegante y graciosa que adora correr por el jardín y perseguir mariposas.",
      colorButton: "success",
      textButton:"Adopta ahora",
      sexo: "Hembra",
      colorSexo: "danger"
    },
    {
      imagen: "src/assets/img/5.jpg",
      nombre: "Coco",
      descripcion: " Coco es un perro inteligente y curioso que le encanta aprender nuevos trucos y explorar el mundo que lo rodea.",
      colorButton: "success",
      textButton:"Adopta ahora",
      sexo: "Macho",
      colorSexo: "dark"
    },
    {
      imagen: "src/assets/img/6.jpg",
      nombre: "Daisy",
      descripcion: "Daisy es una perrita energética y aventurera que nunca se cansa de jugar al aire libre y descubrir nuevos lugares emocionantes.",
      colorButton:"warning",
      textButton:"Dona para su operación",
      sexo: "Hembra",
      colorSexo: "danger"
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
            colorButton={tarjeta.colorButton} 
            textButton={tarjeta.textButton} 
            sexo={tarjeta.sexo}
            colorSexo={tarjeta.colorSexo}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default App;
