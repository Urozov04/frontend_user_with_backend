import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup
  .object({
    fullname: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(7).required(),
    username: yup.string().required(),
    phoneNumber: yup.string().required(),
    confirmPassword: yup.string().oneOf([yup.ref("password")]),
    gender: yup.string().required(),
  })
  .required();

const Home = () => {
  const {
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur"
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-slate-100 dark:bg-black">
      <div className="w-[800px] bg-white p-5 shadow-lg rounded-lg dark:bg-gray-300">
        <h2 className="text-2xl font-bold uppercase ml-[30%]">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)} action="" className="mt-6">
          <div className="grid grid-cols-2 gap-2">
            <div className="mb-3">
              <label htmlFor="name">
                <span className="text-sm inline-block mb-2 text-gray-500">
                  Full Name
                </span>
                <input
                  type="text"
                  id="name"
                  className="border w-full h-10 indent-3 border-gray-200 rounded-md focus:border-blue-400 focus:outline-2"
                  placeholder="Enter your full name"
                  {...register("fullname")}
                />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="username">
                <span className="text-sm inline-block mb-2 text-gray-500">
                  Username
                </span>
                <input
                  type="text"
                  id="username"
                  className="border w-full h-10 indent-3 border-gray-200 rounded-md focus:border-blue-400 focus:outline-2"
                  placeholder="Enter your username"
                  {...register("username")}
                />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="email">
                <span className="text-sm inline-block mb-2 text-gray-500">
                  Email
                </span>
                <input
                  type="email"
                  id="email"
                  className="border w-full h-10 indent-3 border-gray-200 rounded-md focus:border-blue-400 focus:outline-2"
                  placeholder="Enter your email"
                  {...register("email")}
                />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="number">
                <span className="text-sm inline-block mb-2 text-gray-500">
                  Phone Number
                </span>
                <input
                  type="text"
                  id="number"
                  className="border w-full h-10 indent-3 border-gray-200 rounded-md focus:border-blue-400 focus:outline-2"
                  placeholder="Enter your full phone number"
                  {...register("phoneNumber")}
                />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="password">
                <span className="text-sm inline-block mb-2 text-gray-500">
                  Password
                </span>
                <input
                  type="text"
                  id="password"
                  className="border w-full h-10 indent-3 border-gray-200 rounded-md focus:border-blue-400 focus:outline-2"
                  placeholder="Enter your full password"
                  {...register("password")}
                />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword">
                <span className="text-sm inline-block mb-2 text-gray-500">
                  Confirm Password
                </span>
                <input
                  type="text"
                  id="confirmPassword"
                  className="border w-full h-10 indent-3 border-gray-200 rounded-md focus:border-blue-400 focus:outline-2"
                  placeholder="Enter your full confirm password"
                  {...register("confirmPassword")}
                />
              </label>
            </div>
          </div>
          <div>
            <button className="w-[50%] ml-[150px] h-10 rounded-md bg-blue-500 text-white cursor-pointer disabled:opacity-60 disabled:cursor-progress">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default React.memo(Home);
