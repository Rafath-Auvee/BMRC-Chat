import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, storage } from "../../firebase.init.js";

import { updateDoc, doc } from "firebase/firestore";
import { AuthContext } from "../Context/Auth.js";
// import { useHistory } from "react-router-dom";


// import logo from "../../image/logo.png";
const Navbar = () => {
  const [user] = useAuthState(auth);
  // const history = useHistory();
  const logout = async () => {
    await updateDoc(doc(db, "users", auth.currentUser.uid), {
      isOnline: false,
    });

    await signOut(auth);
    // history.replace("/login");
  };

  const userMenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/room">Chat Room</Link>
      </li>
      <li>
        <Link to="/news">News</Link>
      </li>
      {/* <li>
        <Link to="/gmdata">Update Profile</Link>
      </li> */}
      {
        user &&(
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        )
      }
      {!user && (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </>
      )}
    </>
  );
  const authMenu = (
    <>
      {/* <li className="hover-bordered">
        <Link to="/dashboard">My Profile</Link>
      </li> */}
      <li>
        {user ? (
          <button
            className="btn bg-primary text-white hover:text-white btn-ghost"
            onClick={logout}
          >
            Sign Out
          </button>
        ) : (
          <Link to="/login">Login</Link>
          // <Link to="/signup">Sign Up</Link>
        )}
      </li>
      {user && <>
          <li>
            <Link to="/managenews">Manage News</Link>
          </li>
          <li>
            <Link to="/addnews">Add News</Link>
          </li>
          </>}

      {/* <button
        className="btn bg-neutral text-base-100 hover:text-neutral btn-ghost"
        onClick={logout}
      >
        Sign Out
      </button> */}
    </>
  );

  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
            >
              {userMenu}
            </ul>
          </div>
          {/* <img src={logo} alt="" /> */}
          <p href="/" className="btn btn-ghost normal-case text-xl">
            BMRC
          </p>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal p-0">{userMenu}</ul>
        </div>

        <div className="navbar-end">
          {user && (
            <div>
              <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex="0"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      {/* <img src={user?.photoURL} /> */}
                      {user?.photoURL ? (
                        <img src={user?.photoURL} />
                      ) : (
                        <img
                          src="https://i.ibb.co/LJ2BGT2/121105442-creative-illustration-of-default-avatar-profile-placeholder-isolated-on-background-art-des.webp"
                          alt=""
                        />
                      )}
                    </div>
                  </label>
                  <ul
                    tabIndex="0"
                    className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 text-base-content"
                  >
                    {authMenu}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
