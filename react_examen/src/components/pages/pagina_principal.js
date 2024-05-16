import React from 'react';
import NavBar from '../molecules/barra_navegacion';
import Sidebar from '../molecules/barra_lateral';
import './pagina_principal.css';

const sampleVideos = [
  {
    thumbnail: 'video1.jpg',
    title: 'Video 1',
    channelName: 'Channel 1',
    uploadTime: 'Hace 1 día',
    channelImage: 'channel1.jpg',
  },
  // Agrega más videos de muestra según sea necesario
];

const HomePage = () => (
  <div className="homepage">
    <NavBar />
    <div className="main-content">
      <Sidebar />
    </div>
  </div>
);

export default HomePage;