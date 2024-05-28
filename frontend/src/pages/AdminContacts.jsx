
import React, { useEffect, useState } from 'react';

const AdminContacts = () => {
  const [adminContacts, setAdminContacts] = useState([]);
  const getAllContacts = async () => {
    await fetch('http://localhost:3000/api/admin/contacts', {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then(response => response.json())
      .then(data => setAdminContacts(data))
      .catch(error => console.error('Error fetching data:', error));
  }
  useEffect(() => {
    getAllContacts();
  }, []);
  const deleteContact = async (id) => {
    try {
      const resp = await fetch(`http://localhost:3000/api/admin/users/contact/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: localStorage.getItem('token')
        }
      })
      const data = resp?.json()
      if (resp?.status === 200) {
        getAllContacts();
        alert("Contact Deleted Succesfuly")
      }
    } catch (error) {
      console.error('Error fetching data:', error);

    }
  }

  return (
    <div className="overflow-x-auto ml-3">
      <h1 className='text-4xl'>Admin Contacts</h1>
      <table className="table m-4">
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Email</th>
            <th>UserName</th>
            <th>Message</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {  adminContacts?.length===0?
          <p>No Data Found!</p>
          :
          adminContacts?.map((contct, index) => (
            <tr key={index} className='hover'>
              <td>{index + 1}</td>
              <td>{contct?.email}</td>
              <td>{contct?.username}</td>
              <td>{contct?.message}</td>
              <td>
                <button
                  onClick={() => deleteContact(contct?._id)}
                  className='text-red-500 bg-blue-400 p-1 border-r-2'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminContacts;
