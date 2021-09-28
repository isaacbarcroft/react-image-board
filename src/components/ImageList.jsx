

function ImageList(props){
console.log(props);
const imageHTML = props.images.map(image => <div><li><img style={{width: "100px"}} src={image.image} /></li> <p>{image.text}</p></div>)
    
    return(
        <>
        <h2>Soccer Players</h2>
        <ul>
           {imageHTML}
        </ul>
</>
    )
};


export default ImageList;