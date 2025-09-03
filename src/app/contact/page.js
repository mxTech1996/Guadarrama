'use client';
import { useState } from 'react';
import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/button';
import Navbar from '../../components/organisms/Navbar';
import Footer from '../../components/organisms/Footer';

export default function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const regExpEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (!name || !email || !message) {
      return alert('Todos los campos son requeridos');
    }

    if (!regExpEmail.test(email)) {
      return alert('No es un email válido');
    }

    const emailToSend = `mailto:info@golarzep.com?subject=Contacto desde web | ${name}&body=${message}`;

    window.open(emailToSend, '_blank');
  };
  return (
    <main>
      <div>
        <Navbar />
        <div className='flex flex-col justify-between bg-white p-8 text-black pr-20'>
          <h2 className='uppercase text-xl font-bold'>Contact Us</h2>
          <h1>Send us a message and we will happy to help you.</h1>
        </div>

        <div className='flex flex-col py-20 px-5 lg:px-10'>
          <form className='flex flex-col mt-3' onSubmit={handleSubmit}>
            <h6 className='font-bold mb-2'>Complete all the fields.</h6>
            <div className='grid grid-cols-2 gap-3 mb-3'>
              <Input
                type='text'
                placeholder='Full Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                type='email'
                placeholder='E-mail'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <textarea
              id='message'
              rows='4'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm outline-none block w-full p-2.5 resize-none'
              placeholder='How can we help you?'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <div>
              <Button type='submit' className='mt-10' flatBlack>
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </main>
  );
}
