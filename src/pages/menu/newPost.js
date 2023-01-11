import { useState } from "react";
import { createPost } from "../../utils/request";

const newPost = () => {
  const[image, setImage] = useState(null)
  const[imageInput, setImageInput] = useState(null)
  const[name, setName] = useState('')
  const[dimensions, setDimensions] = useState('')
  const[description, setDescription] = useState('')
 
  const handleImage = (e) => {
    const file = e.target.files[0]
    setImageInput(file)
    const fileReader = new FileReader()
    fileReader.onload = function(e){
      console.log(e.target.result)
      setImage(e.target.result)
    }
    fileReader.readAsDataURL(file)
  }  
  const handleFormData = async (e) => {
    e.preventDefault()
    const form = new FormData()
    form.append('name', name)
    form.append('dimensions', dimensions)
    form.append('description', description)
    
    const result = await createPost(form)
    console.log(result)
  }
  return (
    <section className="main-view flex-column container">
      <h2>New posts</h2>
        <div className={image?'d-block':'d-none'}>
          <img src={image} style={{maxWidth:'150px'}} />
        </div>
      <form onSubmit={handleFormData}>
        <div className="row my-3">
          <div className="col">
            <h4>Name:</h4>
          </div>
          <div className="col">
            <input className="form-control" 
            required type="text" 
            name="name" 
            value={name} 
            onChange={e=>setName(e.target.value)}
            />
          </div>
        </div>
        <div className="row my-3">
          <div className="col">
            <h4>Dimensions:</h4>
          </div>
          <div className="col">
            <input className="form-control" 
            type="text" 
            name="dimensions" 
            value={dimensions} 
            onChange={e=>setDimensions(e.target.value)}
            />
          </div>
        </div>
        <div className="row my-3">
          <div className="col">
            <h4>Description:</h4>
          </div>
          <div className="col">
            <textarea className="form-control" 
            type="text" 
            name="description" 
            value={description} 
            onChange={e=>setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="row my-3">
          <div className="col">
            <h4>Painting:</h4>
          </div>
          <div className="col">
            <input required type="file" 
            name="file" 
            // value={form.file} 
            onChange={handleImage}
          />
          </div>
        </div>
        <div className="row container mx-auto px-0">
          <input className="btn btn-primary" type="submit" value="Upload painting" />
        </div>
      </form>
    </section>
  );
};

export default newPost;
