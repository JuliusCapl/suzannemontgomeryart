import { redirect } from "next/dist/server/api-utils";
import { useState } from "react";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter()
  const [form, setForm] = useState({email:''})

  const handleChange = (e) => {
    const {value, name} = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    postData(form)
  }
  const resetForm = () => {
    setForm({email:''})
    alert('Thank you for subscribe!!')
  }
  const postData = async (form) => {
    try {
      console.log(form)
      const res = await fetch('/api/emailList',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      console.log(data)
      resetForm()
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <footer>
        <div className="my--footer">
          <div className="mt-5 pt-5 footer--form">
            <h2>SUBSCRIBE!!!</h2>
            <p>Be the first one to see my upcoming paintings right in your email</p>
            <form onSubmit={handleSubmit} className="input-group text-center">
              <input
                className="form-control"
                type="email"
                placeholder="Write your email"
                autoComplete="off"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
              <button className="input-group-text" id="basic-addon2">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="container text-center footer-text pt-3 pb-3">
          <div className="fs-1">
            <a href="">
              <i className="fa-brands fa-instagram me-3"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-linkedin ms-3"></i>
            </a>
          </div>
          <p>© Suzanne Montgomery - Painter</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
