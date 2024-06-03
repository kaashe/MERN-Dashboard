import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {
  const params = useParams();
  const { id } = params;
  const token = localStorage.getItem('token');
  const [adminUser, setAdminUser] = useState([]);
  const navigate = useNavigate();
  const [showLoading, SetShowLoading] = useState(false);
  const [notification, setNotification] = useState({ message: '', type: '' });
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  console.log(adminUser);
  const onSubmit = async (data) => {
    console.log('Submitting form data:', data);
    SetShowLoading(true)
    try {
      const response = await fetch(`http://localhost:3000/api/admin/user/${id}/update`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        setNotification({ message: 'User Updated successfuly!', type: 'success' });
        SetShowLoading(false)
        setTimeout(() => {
          navigate('/admin/users');
        }, 2000);

      } else {
        const errorData = await response.json();
        setNotification({ message: `Failed to Update: ${errorData.message}`, type: 'error' });
        throw new Error(`${errorData.message}`); 
        SetShowLoading(false)
      }
    } catch (error) {
      console.error('There was an error submitting the form:', error);
      setNotification({ message: "Can't Update user, Failed!", type: 'error' });
    }
    SetShowLoading(false)
  };
  useEffect(() => {
    getSingleUser();
  }, [params?.id]);
  const getSingleUser = async () => {
    await fetch(`http://localhost:3000/api/admin/user/${params?.id}/edit`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then(response => response.json())
      .then(data => setAdminUser(data))
      .catch(error => console.error('Error fetching data:', error));
  }
  useEffect(() => {
    if (adminUser) {
      reset(adminUser)
    }

  }, [adminUser]);
  return (
    <div className='flex flex-col gap-1'>
      <div className="min-h-screen grid grid-cols-1 sm:grid-cols-12 gap-4 justify-center items-center bg-gray-50 px-4 sm:px-6 lg:px-8">

        <div className="col-span-1 sm:col-span-12 lg:col-span-4  p-5 bg-white shadow-lg rounded-lg">

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="form-group">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input type="text" id="username" {...register("username", { required: true })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              {errors.username && <span className='text-red-500 text-xs'>Username is required</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" {...register("email", { required: true })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              {errors.email && <span className="text-red-500 text-xs">Email is required</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input type="tel" id="phone" {...register("phone", { required: true })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              {errors.phone && <span className="text-red-500 text-xs">Phone is required</span>}
            </div>
            <button disabled={showLoading} type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">{showLoading ? 'Update...' : 'Update'}</button>
            {/* Notification message here */}
            {notification.message && (
              <div className={`mt-3 text-sm font-medium px-4 py-2 rounded-md text-center ${notification.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {notification.message}
              </div>
            )}
          </form>
        </div>

      </div>

      <div className='w-full'>
        <iframe src="https://www.google.com/maps/embed?..." className="w-full h-96" style={{ border: "0" }} allowFullScreen="" loading="lazy"></iframe>
      </div>
    </div>
  )
}

export default EditUser
