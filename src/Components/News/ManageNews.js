import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';

const ManageNews = () => {
    const navigate = useNavigate();
  
    const navigateToUpdate = (id) => {
      alert('we are working on it')
      navigate(``);
    };
    const [tasks, setTasks] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
      fetch("http://localhost:5000/news")
        .then((res) => res.json())
        .then((data) => setTasks(data));
    }, [tasks]);
    const handleDelete = (id) => {
      const proceed = window.confirm("R you sure?");
      if (proceed) {
        fetch(`http://localhost:5000/news/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const remaining = tasks.filter((task) => task._id !== id);
            setTasks(remaining);
          });
      }
    };
    const handleUpdateproduct = (id) => {
        alert('we are working on it')
    //   const updateproduct = { status: "completed" };
    //   fetch(`https://herokutodolistdaddy.herokuapp.com/tasksstat/${id}`, {
    //     method: "PUT",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(updateproduct),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log("success", data);
    //     });
    };
    return (
      <div class="overflow-x-auto lg:ml-10 lg:mr-10 min-h-screen">
        <table class="table w-full">
          <thead>
            <tr class="hover">
              <th>Sl</th>
              <th>Name</th>
              <th>News</th>
              <th>operations</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              
                  <tr class="hover">
                    <th>{index + 1}</th>
                    <td>{task.name}</td>
                    <td >{task.news.slice(0,25)}...</td>
                    <td>
                      <div class="btn-group">
                        {" "}
                        
                        {user && (
                          <>
                            <button
                              class="btn"
                              onClick={() => navigateToUpdate(task._id)}
                            >
                              Update
                            </button>
                            <button
                              class="btn"
                              onClick={() => handleDelete(task._id)}
                            >
                              Delete
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default ManageNews;