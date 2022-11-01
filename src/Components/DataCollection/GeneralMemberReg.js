import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { auth } from "../../firebase.init";
import { toast } from "react-toastify";
import axios from "axios";
// <<<<<<< HEAD
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { storage } from "../../firebase.init";

import Loading from "./../Shared/Loading";

const GeneralMemberReg = () => {
  const [user] = useAuthState(auth);
  const [updateUser, setUpdateUser] = useState([]);
  const [addloading, setAddloading] = useState(false);
  const Dep = ["Select", "CSE", "EEE", "ME", "CE", "ENG", "BBA"];
  const [imageUrl, setImageUrl] = useState("");
  const [data, setData] = useState([]);
  const db = getFirestore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleFile = async (e) => {
    const image = data.image[0];
    console.log(image);
    const imageStorageRef = ref(storage, `avatar/${image.name}`);
    console.log(imageStorageRef);
    uploadBytesResumable(imageStorageRef, image).then(() => {
      getDownloadURL(imageStorageRef).then((url) => setImageUrl(url));
    });
  };
  const onSubmit = (data) => {
    console.log("added");

    const currentUser = {
      id: data?.id,
      name: user.displayName,
      email: user.email,
      phone: data?.phone,
      department: data?.department,
      level: data?.level,
      term: data?.term,
      designation: "General Member",
    };

    updateDoc(doc(db, "users", user.uid), currentUser);
    toast.success("data added");
    console.log(currentUser);
  };

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
                  <span className="label-text">Department</span>
                </label>
                <select
                  class="select select-bordered w-full max-w-xs"
                  {...register("department")}
                >
                  {Dep.map((com) =>
                    com === "Select" ? (
                      <option disabled selected>
                        {com}
                      </option>
                    ) : (
                      <option value={com}>{com}</option>
                    )
                  )}
                </select>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Level</span>
                </label>
                <select
                  class="select select-bordered w-full max-w-xs"
                  {...register("level")}
                >
                  <option disabled selected>
                    Select
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Term</span>
                </label>
                <select
                  class="select select-bordered w-full max-w-xs"
                  {...register("term")}
                >
                  <option disabled selected>
                    Select
                  </option>
                  <option value="I">I</option>
                  <option value="II">II</option>
                </select>
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
