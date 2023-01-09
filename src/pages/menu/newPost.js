import newPostApi from "../api/newPost";
import { useState } from "react";

const newPost = () => {
  const [form, setForm] = useState({
    file:{},
    name:'',
    dimensions:'',
    description:''
  })

  const handleChange = (e) => {
    const {value, name} = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }
  return (
    <section className="main-view flex-column">
      <h2>New posts</h2>
      <form encType="multipart/form-data" >
        <div className="row my-3">
          <div className="col">
            <h4>Painting:</h4>
          </div>
          <div className="col">
            <input required type="file" name="file" value={form.file} onChange={handleChange}/>
          </div>
        </div>
        <div className="row my-3">
          <div className="col">
            <h4>Name:</h4>
          </div>
          <div className="col">
            <input className="form-control" required type="text" name="paintingname" value={form.name} onChange={handleChange}/>
          </div>
        </div>
        <div className="row my-3">
          <div className="col">
            <h4>Dimensions:</h4>
          </div>
          <div className="col">
            <input className="form-control" type="text" name="paintingdimensions" value={form.dimensions} onChange={handleChange}/>
          </div>
        </div>
        <div className="row my-3">
          <div className="col">
            <h4>Description:</h4>
          </div>
          <div className="col">
            <textarea className="form-control" type="text" name="paintingdescription" value={form.description} onChange={handleChange}/>
          </div>
        </div>

        <input className="btn btn-primary d-block ms-auto" type="submit" value="Upload painting" />
      </form>
    </section>
  );
};

export default newPost;
