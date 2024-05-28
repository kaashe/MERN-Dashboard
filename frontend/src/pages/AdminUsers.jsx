import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AdminUsers = () => {
  const [adminUsers, setAdminUsers] = useState([]);
  const getAllUsers = async () => {
    await fetch('http://localhost:3000/api/admin/users', {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then(response => response.json())
      .then(data => setAdminUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }
  useEffect(() => {
    getAllUsers();
  }, []);
  const deleteUser = async (id) => {
    try {
      const resp = await fetch(`http://localhost:3000/api/admin/users/delete/${id}`, {
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
    <div className="overflow-x-auto ml-3">
      <h1 className='text-4xl'>Admin Users</h1>
      <table className="table m-4">
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Email</th>
            <th>UserName</th>
            <th>Phone</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            adminUsers?.length === 0 ?
              <p>No Data Found!</p>
              :
              adminUsers?.map((user, index) => (
                <tr key={index} className='hover'>
                  <td>{index + 1}</td>
                  <td>{user?.email}</td>
                  <td>{user?.username}</td>
                  <td>{user?.phone}</td>
                  <td>
                    <Link
                      to={`/admin/users/${user?._id}/edit`}
                      className=' via-green-200 bg-blue-400 p-1 px-2 border-r-2'>Edit</Link>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteUser(user?._id)}
                      className='text-red-500 bg-blue-400 p-1 border-r-2'>Delete</button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;
