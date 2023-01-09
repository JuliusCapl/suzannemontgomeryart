import { useState } from "react";
import { sendContactForm } from "../utils/apimailer";
import { useRouter } from "next/router";

const initValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
const initState = { values: initValues };

const Contact = () => {
  const router = useRouter()
  const [state, setState] = useState(initState);
  const {values} = state
  const handleChange = ({target}) => setState((prev)=>({
    ...prev,
    values: {
      ...prev.values,
      [target.name]:target.value
    }
  }))
  const onSubmit = async () => {
    try {
      await sendContactForm(values)
      setState(initState)
      alert('Thanks for your message, I will get back to you ASAP')
      router.push('/')
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <>
      <section className="main-view pt-5">
        <div className="container">
          <h2 className="text-center my-5">Let's get in touch</h2>
          <div className="row contact--row mb-5">
            <div className="image--container col-12 col-md-6">
              <img className="image--contact" src="/img/bio--sm.jpg" alt="Image of my contact form" />
            </div>
            <div className="col-12 col-md-6 my-auto">
              <form id="formEmail" className="container">
                <div>
                  <label htmlFor="name" className="form-label">
                    Write your name
                  </label>
                  <input type="text" name="name" id="name" className="form-control" value={values.name} onChange={handleChange}/>
                </div>
                <div>
                  <label htmlFor="email" className="form-label">
                    Write your email
                  </label>
                  <input type="email" name="email" id="email" className="form-control" value={values.email} onChange={handleChange}/>
                </div>
                <div>
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input type="text" name="subject" id="subject" className="form-control" value={values.subject} onChange={handleChange}/>
                </div>
                <div>
                  <label htmlFor="message">Write your message</label>
                  <textarea name="message" id="message" cols="30" rows="5" className="form-control" value={values.message} onChange={handleChange}/>
                </div>
                {/* <div>
                  <label htmlFor="">I would like to subscribe to the newsletter</label>
                  <input type="selection" />
                </div> */}
                <button type="submit" className="btn btn-outline-primary" disabled={!values.name|| !values.email || !values.subject || !values.message} onClick={onSubmit} 
                // isLoading={isLoading}
                >
                  Send
                </button>
                <button type="reset" className="btn btn-outline-secondary m-3">
                  Clear
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
