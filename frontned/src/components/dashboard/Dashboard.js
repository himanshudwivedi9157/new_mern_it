// import React, { useEffect, useState } from "react";

// const Dashboard = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   if (!user) return <div>Loading...</div>;

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Date of Birth</th>
//             <th>Email</th>
//             <th>Password</th>
//             <th>Date Created</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>{user.id}</td>
//             <td>{user.name}</td>
//             <td>{user.dateOfBirth}</td>
//             <td>{user.email}</td>
//             <td>{user.password}</td>
//             <td>{new Date(user.dateCreated).toLocaleDateString()}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="dashboard-container">
      <header className="header">
        <h1>Dashboard</h1>
      </header>

      <main className="content">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Email</th>
              <th>Password</th>
              <th>Date Created</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.dateOfBirth}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{new Date(user.dateCreated).toLocaleDateString()}</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Dashboard;
