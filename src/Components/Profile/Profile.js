import React from "react";


const Profile = () => {
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
        <img className="mask mask-circle" src="https://placeimg.com/160/160/arch" alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">User Name</h2>
          <p>User Email</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Joined on: ...</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
