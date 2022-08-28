import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { auth } from "../../firebase.init";
import { toast } from "react-toastify";

const GeneralMemberReg = () => {
  const [user] = useAuthState(auth);
  const [updateUser, setUpdateUser] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const imgStorageKey = "f3f22ee15d3ef328ecec838de6b26a6d";

  const onSubmit = async (data) => {
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
      .then((res) =>  res.json())
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
          fetch(`https://bmrc.onrender.com/generalmember`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              //console.log(inserted);
              if (inserted.acknowledged) {
                console.log(product);
                 toast.success("Thanks. added successfully");
                reset();
              } else {
                toast.error("Failed");
              }
            });
        }
      });

    console.log(currentUser);
  };

  return (
    <div>
      <h1 className="text-2xl font-serif font-bold text-center">
        General Member Informations
      </h1>
      <div className="bg-transparent mx-auto max-w-xs mb-5 rounded-2xl w-100 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              value={updateUser?.name}
              className="input input-bordered w-full max-w-xs"
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
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              value={updateUser?.email}
              className="input input-bordered w-full max-w-xs"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is Required",
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
          <div class="w-full md:w-96 md:max-w-full mx-auto">
            <div class="p-6 border border-gray-300 sm:rounded-md">
              <label class="block mb-6">
                <span class="text-gray-700">Your photo</span>
                <input
                  required
                  name="photo"
                  {...register("image", {
                    required: {
                      value: true,
                      message: "Image is Required",
                    },
                  })}
                  type="file"
                  class="block w-full mt-1 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </label>
            </div>
          </div>
          <label className="label">
            {errors.image?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.image.message}
              </span>
            )}
          </label>

          <input
            className="btn w-full max-w-xs my-5"
            type="submit"
            value="Add"
          />
        </form>
      </div>
    </div>
  );
};

export default GeneralMemberReg;
