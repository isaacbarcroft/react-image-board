import { useState } from "react";

function ImageForm(props){
    const [text, setText] = useState('');
    const [url, setUrl] = useState('');
    function handleTextChange(event){
        console.log(event);
        setText(event.target.value)
    }

    function handleUrlChange(event){
        console.log(event);
        setUrl(event.target.value)
    }


    function handleSubmit(event) {
        event.preventDefault();
        props.createImage(url, text);
        setText('');
        setUrl('');
        console.log(event.target.url.value);
        console.log(event);
        console.log(event.target);
    }


    return (
        
    <form style={{display: "flex", justifyContent: "center"}} onSubmit={handleSubmit}>
        <input style={{}} value={url} name="url" type="url" id="new-image" placeholder="Image URL" onChange={handleUrlChange} />
        <input name="text" value={text} type="text" id="image-text" placeholder="Image Caption" onChange={handleTextChange} />
        <button style= {{backgroundColor: "#1E9D45"}} type="submit">Add Image</button>
      </form>
    )
}


export default ImageForm;