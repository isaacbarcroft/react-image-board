

function ImageForm(props){
//      function deleteImage(){

//      }
// function addImage(){

// }
    function handleSubmit(event) {
        event.preventDefault();
        props.creatImage(event.target.text.value);
    
    }


    return (
        <form onSubmit={handleSubmit}>
        <input name="url" type="url" id="new-image" />
        <input name="text" type="text" id="image-text" />
        <button type="delete"> Cancel</button> 
        <button type="submit">Add Image</button>
      </form>
    )
}


export default ImageForm;