

function ImageList(props){
console.log(props);
const imageHTML = props.images.map(image => <div style={{display: "flex", justifyContent: "center"}}><li><img style={{width: "200px", height: "250px"}} src={image.url} /> <p>{image.text}</p></li></div>)
    
    return(
        <>
        <h2 style={{display: "flex", justifyContent: "center"}}>Soccer Players</h2>
        <ul>
           {imageHTML}
        </ul>
</>
    )
};


export default ImageList;