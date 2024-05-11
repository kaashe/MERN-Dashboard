import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [notification, setNotification] = useState({ message: '', type: '' });

  const onSubmit = async (data) => {
    console.log('Submitting form data:', data);
    try {
      const response = await fetch('http://localhost:3000/api/form/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        setNotification({ message: ` ${responseData.message}`, type: 'success' });
      } else {
        const errorData = await response.json();
        console.log(errorData,'fffffff');
        setNotification({ message: `Failed to submit form: ${errorData.message}`, type: 'error' });
        throw new Error(`${errorData.message}`);
      }
    } catch (error) {
      console.error('There was an error submitting the form:', error);
      setNotification({ message: error.toString(), type: 'error' });
    }
  };

  return (
    <div className='flex flex-col gap-1'>
      <div className="min-h-screen grid grid-cols-1 sm:grid-cols-12 gap-4 justify-center items-center bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="col-span-1 sm:col-span-1 lg:col-span-3"></div>
        <div className="col-span-1 sm:col-span-12 lg:col-span-3">
          <img src="./contactPic.svg" alt="Sign in banner" className="w-full h-auto" />
        </div>

        <div className="col-span-1 sm:col-span-12 lg:col-span-4 mt-6 p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-center text-2xl font-bold mb-6">Contact us</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">User name</label>
              <input type="text" id="username" {...register("username", { required: true })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              {errors.username && <span className="text-red-500 text-xs">Username is required</span>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" {...register("email", { required: true })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              {errors.email && <span className="text-red-500 text-xs">Email is required</span>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" {...register("message", { required: true })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
              {errors.message && <span className="text-red-500 text-xs">Message is required</span>}
            </div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Send Message</button>
            {notification.message && (
              <div className={`w-full text-center mt-4 py-2 ${notification.type === 'success' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                {notification.message}
              </div>
            )}
          </form>
        </div>
      </div>

      <div className='w-full'>
        <iframe src="https://www.google.com/maps/embed?..." className="w-full h-96" style={{ border: "0" }} allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>
  );
}

export default Contact;
