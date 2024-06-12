import React ,{useRef}from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import Giticon from '../../assets/github-mark.png';
import Linkdin from '../../assets/icons8-linkedin-48.png';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_dmpl87j', 'template_7phbjaa', form.current, {
            publicKey: 'KWH6Mm2YgLdJm_lH3',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return (
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact me</h1>
             <br></br>
             <br></br>
                <span className="contactDesc">Please fill out the form below to discuss any job opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='your Name' name="user_name"/>
                    <input type="email" className="email" placeholder='your Email' name="user_email"/>
                    <textarea className='msg' name="message" row="5" placeholder='your Message'></textarea>
                    <button type='submit' value='Send' className="submitBtn">Submit</button>
                    <div className="links">
                        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">

                        <img src={Giticon} alt="Git" className="link" />
                        </a>
                        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                        <img src={Linkdin} alt="Linkdin" className="link" /> </a>
                    </div>
                </form>
            </div>
        </section>
    );
}
export default Contact;