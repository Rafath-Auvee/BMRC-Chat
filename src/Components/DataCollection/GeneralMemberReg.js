import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { auth } from "../../firebase.init";
import { toast } from "react-toastify";
import axios from "axios";
import Loading from "./../Shared/Loading";

const GeneralMemberReg = () => {
  const [user] = useAuthState(auth);
  const [updateUser, setUpdateUser] = useState([]);
  const [addloading, setAddloading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const imgStorageKey = "f3f22ee15d3ef328ecec838de6b26a6d";

  const onSubmit = async (data) => {
    setAddloading(true);
    const currentUser = {
      id: data?.id,
      name: data?.name,
      email: data?.email,
      phone: data?.phone,
      department: data?.department,
      level: data?.level,
      term: data?.term,
      designation: "General Member",
    };

    const image = data.image[0];
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    const formData = new FormData();
    formData.append("image", image);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const image = result.data.url;
          const product = {
            id: data?.id,
            name: data?.name,
            email: data?.email,
            phone: data?.phone,
            department: data?.department,
            level: data?.level,
            term: data?.term,
            designation: "General Member",
            url: image,
          };

          axios
            .post(`https://bmrc.onrender.com/generalmember`, product)
            .then((res) => {
              //console.log(inserted);
              console.log(res);
              if (res.data.acknowledged) {
                setAddloading(false);
                toast.success("Thanks. added successfully");
                reset();
              } else {
                setAddloading(false);
                toast.error("Failed");
              }
            });
        }
      });

    };
    console.log(user);

  return (
    <div>
      {addloading ? (
        <Loading />
      ) : (
        <div>
          <h1 className="text-2xl font-serif font-bold text-center">
            Update Profile
          </h1>
          <div className="bg-transparent mx-auto max-w-xs mb-5 rounded-2xl w-100 ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  disabled  
                  value={user?.name}
                  placeholder={user?.displayName}
                  className="input input-bordered font-black w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                  })}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">ID</span>
                </label>
                <input
                  type="text"
                  value={updateUser?.id}
                  className="input input-bordered w-full max-w-xs"
                  {...register("id", {
                    required: {
                      value: true,
                      message: "ID is Required",
                    },
                  })}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Level</span>
                </label>
                <input
                  type="text"
                  value={updateUser?.level}
                  className="input input-bordered w-full max-w-xs"
                  {...register("level", {
                    required: {
                      value: true,
                      message: "Level is Required",
                    },
                  })}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Term</span>
                </label>
                <input
                  type="text"
                  value={updateUser?.term}
                  className="input input-bordered w-full max-w-xs"
                  {...register("term", {
                    required: {
                      value: true,
                      message: "Term is Required",
                    },
                  })}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Department</span>
                </label>
                <input
                  type="text"
                  value={updateUser?.department}
                  className="input input-bordered w-full max-w-xs"
                  {...register("department", {
                    required: {
                      value: true,
                      message: "Department is Required",
                    },
                  })}
                />
              </div>

              <div className="form-control w-full max-w-xs mb-5">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  value={updateUser?.phone}
                  className="input input-bordered w-full max-w-xs"
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Phone is Required",
                    },
                  })}
                />
              </div>


              {/* (
            // <div className="w-16 h-16 border-b-2 border-amber-900 rounded-full animate-spin mx-auto"></div>
            
          )} */}

              <input
                className="btn w-full max-w-xs my-5"
                type="submit"
                value="Add"
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeneralMemberReg;
