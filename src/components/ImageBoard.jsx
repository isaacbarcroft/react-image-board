import { useState } from "react";
import ImageForm from "./ImageForm";
import ImageList from "./ImageList";
import { useEffect } from "react";

function ImageBoard() {

const [images, setImages] = useState([]);
const [counter, setCounter] = useState(0);
useEffect(() => {
    setImages([
      {
        id: 1, 
        url: "https://cdn.mos.cms.futurecdn.net/Qr79KnkPe3XEEdrqUbKQRD.jpg",
        text: "Pirlo"
        
      },
      {
        id: 2, 
        url: "https://www.gannett-cdn.com/-mm-/0a015f5e27f7d4ab57db1c374b7efdca09c64fee/c=0-27-727-996/local/-/media/2018/01/17/USATODAY/USATODAY/636518268389723579-AFP-AFP-WY4L3-96648265.JPG?width=300&height=400&fit=crop&format=pjpg&auto=webp",
       text: "Ronaldinho"
      },
      {
        id: 3, 
        url: "https://cdn.vox-cdn.com/thumbor/qY7bEPWjArWDsJ0p5Sid0ZIAkaY=/0x0:2592x3888/1400x1050/filters:focal(1130x1022:1544x1436):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/53214769/78215886.0.jpg",
        text: "Maldini"
        
      },
    ])
  }, []); // empty array = run on did mount

console.log(...images);

function createImage(url, text){
    const newImage = {id: counter, url, text}
    setImages([...images, newImage])
    setCounter(counter + 1); 
}

    return(
        <div className="App">
        <ImageForm  createImage={createImage} />
        <ImageList images={images} setImages={setImages}/>
      </div>
    )
}

export default ImageBoard;