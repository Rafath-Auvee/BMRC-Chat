import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { auth } from '../../firebase.init';



const GeneralMemberReg = () => {
    const [user] = useAuthState(auth)
    const [updateUser,setUpdateUser] = useState([])
   
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async data => {
        const currentUser = {
            id:data?.id,
            name:data?.name,
            email: data?.email,
            phone: data?.phone,
            department: data?.department,
            level: data?.level,
            term: data?.term,
            designation: 'General Member',

            

        }
        console.log(currentUser);
        
            // fetch(`https://sleepy-fjord-78360.herokuapp.com/user/${email}`, {
            //     method: 'PUT',
            //     headers: {
            //         'content-type': 'application/json'
            //     },
            //     body: JSON.stringify(currentUser)
            // })
            //     .then(res => res.json())
            //     .then(data => {
            //         if (data.result.acknowledged) {
            //             alert("Updated Successfully")
            //             reset()
            //         }

            //     })
        

    }


    return (
        <div>
            <h1 className='text-2xl font-serif font-bold text-center'>My Informations</h1>
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
                            {...register("name")}
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
                            {...register("id")}
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
                            {...register("level")}
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
                            {...register("term")}
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
                            {...register("department")}
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
                            {...register("email")}
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input
                            type="text"
                            value={updateUser?.phone}
                            className="input input-bordered w-full max-w-xs"
                            {...register("phone")}
                        />

                    </div>
                    <input className='btn w-full max-w-xs my-5' type="submit" value="Update" />
                </form>
            </div>
        </div>
    );
};

export default GeneralMemberReg;