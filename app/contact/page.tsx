"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  function copyToClipboard(text:any) {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.info('Copied to clipboard!',{
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: 0,
      theme: "dark",
      });
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className='contact'>
      <h2>Contact Details</h2>
      <div className='data-wrapper'>
        <div className='row'>
          <Image src='/at-sign.svg' height={20} width={50} alt='email' />
          <h3>Email :</h3>
          <h3>shakirck333@gmail.com</h3>
          <Image
            src='/copy.svg'
            height={20}
            width={50}
            alt='copy to clipboard'
            onClick={() => copyToClipboard('shakirck333@gmail.com')}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div className='row'>
          <Image src='/phone.svg' height={20} width={50} alt='phone' />
          <h3>Phone :</h3>
          <h3>+91 9544622154</h3>
          <Image
            src='/copy.svg'
            height={20}
            width={50}
            alt='copy to clipboard'
            onClick={() => copyToClipboard('+91 9544622154')}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div className='row'>
          <Image src='/linkedin.svg' height={20} width={50} alt='linkedin' />
          <h3>Linkedin :</h3>
          <h3>linkedin.com/in/muhammedshakirck/</h3>
          <Image
            src='/copy.svg'
            height={20}
            width={50}
            alt='copy to clipboard'
            onClick={() => copyToClipboard('linkedin.com/in/muhammedshakirck/')}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
