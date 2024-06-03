import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AdminUsers = () => {
  const [adminUsers, setAdminUsers] = useState([]);
  const [showError, setshowError] = useState();
  const getAllUsers = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/admin/users', {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem('token')
        }
      });
  
      if (!response.ok) {
        if(response?.status===401){
          throw new Error('Please Login');
        }else if(response?.status===403){
          throw new Error('You are not an Admin! ');
        } 
        console.log(response?.message,'resssss');
      }
  
      const data = await response.json();
      setAdminUsers(data);
    } catch (error) {
      console.log(error);
      setshowError(error)
    }
  };
  
  useEffect(() => {
    getAllUsers();
  }, []);
  const deleteUser = async (id) => {
    try {
      const resp = await fetch(`http://localhost:3000/api/admin/user/${id}delete`, {
        method: "DELETE",
        headers: {
          Authorization: localStorage.getItem('token')
        }
      })
      const data = resp?.json()
      if (resp?.status === 200) {
        getAllUsers();
        alert("User Deleted Succesfuly")
      }
      console.log(resp, 'kkkkkkk');
    } catch (error) {
      console.error('Error fetching data:', error);

    }
  }
  return (
    <div className="overflow-x-auto rounded-lg shadow-md mx-3">
      <h1 className='text-2xl font-bold text-gray-800 p-4'>Admin Users</h1>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-100 text-left text-gray-600">
            <th className="p-2">Sr.No</th>
            <th className="p-2">Email</th>
            <th className="p-2">Username</th>
            <th className="p-2">Phone</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {adminUsers?.length === 0 ? (
            <tr className="text-center">
              <td colSpan={6}>
                <p className="text-red-300 py-4">{showError!==''?showError?.toString():"No Data Found"}</p>
              </td>
            </tr>
          ) : (
            adminUsers?.map((user, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{user?.email}</td>
                <td className="p-2">{user?.username}</td>
                <td className="p-2">{user?.phone}</td>
                <td className="p-2 flex justify-end space-x-2">
                  <Link
                    to={`/admin/user/${user?._id}/edit`}
                    className="inline-block px-2 py-1 bg-green-500 text-white rounded hover:bg-green-700"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user?._id)}
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

export default AdminUsers;
