import React, { useEffect, useState } from "react";
import axios from "axios";

const Curd = () => {
  const url = "http://localhost:3003/user/alldata";
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setUser(response.data);
        console.log(response.data);
       
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []); 

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Name:</td>
            <td>user Id :</td>
            <td>Emails: </td>
          </tr>
        </thead>
        <tbody>
          {user.map((userData) => (
            <tr key={userData._id}>
              <td>{userData.name}</td>
              <td>{userData._id}</td>
              <td>{userData.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Curd;
