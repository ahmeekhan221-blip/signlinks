
"use client"
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xkgoqqzg");
  
  if (state.succeeded) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="p-8 rounded-3xl max-w-md w-full text-center space-y-4">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
          <p className="text-2xl font-semibold text-gray-800">Message sent successfully!</p>
          <p className="text-gray-600">Thank you for reaching out. We&#39;ll get back to you soon.</p>
        </div>
      </div>
    );
  }
  
  return (
    <div id='contact'>
      <div className="min-h-[250px] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg">We&#39;d love to hear from you. Send us a message and we&#39;ll respond as soon as possible.</p>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  className="block w-full px-4 py-3 text-gray-700 bg-white border-2 
                    border-gray-200 rounded-xl appearance-none focus:outline-none focus:border-blue-500 
                    peer transition-colors"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute text-sm text-gray-500 duration-300 transform 
                    -translate-y-6 scale-75 top-3 origin-[0] bg-white px-2
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
                    peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:scale-75 
                    peer-focus:-translate-y-6 peer-focus:text-blue-500 left-2"
                >
                  Full Name
                </label>
              </div>

              <div className="relative">
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full px-4 py-3 text-gray-700 bg-white border-2 
                    border-gray-200 rounded-xl appearance-none focus:outline-none focus:border-blue-500 
                    peer transition-colors"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute text-sm text-gray-500 duration-300 transform 
                    -translate-y-6 scale-75 top-3 origin-[0] bg-white px-2
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
                    peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:scale-75 
                    peer-focus:-translate-y-6 peer-focus:text-blue-500 left-2"
                >
                  Email Address
                </label>
                <ValidationError 
                  prefix="Email" 
                  field="email" 
                  errors={state.errors} 
                  className="mt-1 text-sm text-red-500" 
                />
              </div>

              <div className="relative">
                <textarea
                  required
                  id="message"
                  name="message"
                  className="block w-full px-4 py-3 text-gray-700 bg-white border-2 
                    border-gray-200 rounded-xl appearance-none focus:outline-none focus:border-blue-500 
                    peer transition-colors resize-none"
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className="absolute text-sm text-gray-500 duration-300 transform 
                    -translate-y-6 scale-75 top-3 origin-[0] bg-white px-2
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
                    peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:scale-75 
                    peer-focus:-translate-y-6 peer-focus:text-blue-500 left-2"
                >
                  Your Message
                </label>
                <ValidationError 
                  prefix="Message" 
                  field="message" 
                  errors={state.errors} 
                  className="mt-1 text-sm text-red-500" 
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full px-6 py-3 text-white bg-blue-500 rounded-xl
                  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 
                  focus:ring-offset-2 transition-all disabled:opacity-50 disabled:hover:bg-blue-500
                  flex items-center justify-center space-x-2"
              >
                <span>{state.submitting ? 'Sending...' : 'Send Message'}</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
