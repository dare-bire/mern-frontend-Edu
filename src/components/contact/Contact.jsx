import React, { useState } from 'react';
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp';
  const [result, setResult] = useState("");
  
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "1963b8a3-7043-4947-b45c-c85f8fd6522d");
    
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    
    const data = await response.json();
    
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map} title="Google Map of the location"></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Oromia, Ethiopia</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> derartualemayehu268@gmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +251966792413</p>
              </div>
            </div>

            <form onSubmit={onSubmit}>
              <div className='flexSB'>
                <input type='text' placeholder='Name' name='name' required />
                <input type='email' placeholder='Email' name='email' required />
              </div>
              <input type='text' placeholder='Subject' name='subject' required />
              <textarea cols='30' rows='10' name='message' placeholder='Create a message here...' required></textarea>
              <button className='primary-btn' type='submit'>SEND MESSAGE</button>
              <p className='form-result'>{result}</p>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
