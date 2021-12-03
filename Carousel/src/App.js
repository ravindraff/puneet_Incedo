import React, { useState } from "react";
import Carousel from "./components/carousel";
import "./App.css";

export default function App() {
  const [images, setImages] = useState([
    {
      src: "https://c4.wallpaperflare.com/wallpaper/109/220/12/dragon-ball-dragon-ball-super-ultra-instinct-son-goku-wallpaper-preview.jpg",
    },
    {
      src: "https://3.bp.blogspot.com/-UIFUASbaQyk/XIgDPrU6YLI/AAAAAAAAAcI/HdPqRHzt244xomjQy626u28msHn2Fjr7gCKgBGAs/w0/naruto-sasuke-uhdpaper.com-4K-56.jpg",
    },
    {
      src: "https://c4.wallpaperflare.com/wallpaper/133/604/874/anime-jojo-s-bizarre-adventure-dio-brando-jotaro-kujo-wallpaper-preview.jpg",
    },
  ]);

  return (
    <div>
      <Carousel src={images} />
    </div>
  );
}
