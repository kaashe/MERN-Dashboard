import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EditUser = () => {
    const params = useParams();
    const [adminUser, setAdminUser] = useState([]);
    console.log(adminUser);
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
   
  return (
    <div>
      Edit:   {adminUser?.username}
    </div>
  )
}

export default EditUser
