import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios'
import Button from '../Button/Button';

function Contact() {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')


  const handleSubmit = () => {
    axios.post(`http://localhost:3002/send`,{
        email: email,
        subject: subject,
        message: message
      }).then((response) => {
        console.log(response.json());
      })
      .catch(() => {
        resetForm()
    })
  }

  const resetForm = () => {
    setEmail('')
    setSubject('')
    setMessage('')
  }

  return (
    <div className='contact'>
      <div className='contact-items'>
        <div className='contact-title' data-aos='fade-zoom-in'>
          Contact Me
        </div>
        <div className='contact-subtitle'></div>
        <div>
          <form className='report-form'>
            {/* {<div class="error-message"></div>} */}
            <div className='form-row'>
              <div>
                <textarea
                  className='input-text input-text-title'
                  type='text'
                  id='add'
                  name='email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder='Email'
                  data-aos='fade-left'
                  data-aos-delay='200'
                ></textarea>
              </div>
              <div>
                <textarea
                  className='input-text input-text-title'
                  type='text'
                  id='add'
                  name='title'
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                  placeholder='Subject'
                  data-aos='fade-right'
                  data-aos-delay='300'
                ></textarea>
              </div>
            </div>
            <div style={{ marginBottom: '20px' }} data-aos-delay='200'>
              <textarea
                className='input-text'
                type='text'
                id='add'
                name='description'
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder='Message'
                data-aos='fade-left'
                data-aos-delay='400'
              ></textarea>
            </div>
            <Button
              id='submitButton'
              text='Send'
              onClick={handleSubmit}
              aos='fade-zoom-in'
              delay='100'
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
