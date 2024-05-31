
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminContacts = () => {
  const [adminContacts, setAdminContacts] = useState([]);
  const navigate = useNavigate(); // for redirecting on errors

  const getAllContacts = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/admin/contacts', {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem('token')
        }
      });

      if (!response.ok) {
        // Handle non-2xx status codes (e.g., 401 for unauthorized)
        if (response.status === 401) {
          toast.error('You are not logged in. Please login to continue.', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
          });
          navigate('/login'); // Redirect to login page on unauthorized access
        } else {
          // Handle other errors (e.g., server errors)
          console.error('Error fetching data:', response.statusText);
        }
        return; // Exit the function if error occurs
      }

      const data = await response.json();
      setAdminContacts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  const deleteContact = async (id) => {
    try {
      const resp = await fetch(`http://localhost:3000/api/admin/contact/${id}/delete`, {
        method: "DELETE",
        headers: {
          Authorization: localStorage.getItem('token')
        }
      });

      if (!resp.ok) {
        // Handle non-2xx status codes here (optional)
        console.error('Error deleting contact:', resp.statusText);
      } else {
        const data = await resp.json();
        if (resp.status === 200) {
          getAllContacts();
          alert("Contact Deleted Succesfully");
        }
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <div className="overflow-x-auto rounded-lg shadow-md mx-3">
      <h1 className='text-2xl font-bold text-gray-800 p-4'>Admin Contacts</h1>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-100 text-left text-gray-600">
            <th className="p-2">Sr.No</th>
            <th className="p-2">Email</th>
            <th className="p-2">Username</th>
            <th className="p-2">Message</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {adminContacts?.length === 0 ? (
            <tr className="text-center">
              <td colSpan={6}>
                <p className="text-gray-500 py-4">No Data Found!</p>
              </td>
            </tr>
          ) : (
            adminContacts?.map((contact, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{contact?.email}</td>
                <td className="p-2">{contact?.username}</td>
                <td className="p-2">{contact?.message.slice(0, 50)}...</td> {/* Truncate message */}
                <td className="p-2 flex justify-end space-x-2">
                  <Link
                    to={`/admin/contact/${contact?._id}/edit`}
                    className="inline-block px-2 py-1 bg-green-500 text-white rounded hover:bg-green-700"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteContact(contact?._id)}
                    className="inline-block px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminContacts;
