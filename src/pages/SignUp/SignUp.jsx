import React from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import authImg from "../../assets/others/authentication2.png";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="min-h-screen bg-auth-bgImg flex items-center justify-center">
      <div className="w-full max-w-5xl flex flex-row-reverse bg-auth-bgImg md:my-10 border-2 shadow-2xl rounded-lg overflow-hidden">
        {/*Image */}
        <div className="w-1/2 hidden lg:flex items-center justify-center p-8 bg-cover bg-center">
          <img src={authImg} alt="" className="max-w-sm" />
        </div>

        {/* Form */}
        <div className="card w-full lg:w-1/2 pt-4 md:p-12">
          <h1 className="text-4xl font-bold text-center mb-4 md:mb-8">
            Sign Up
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control mb-4">
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Enter your name"
                className="w-full input input-bordered"
              />
              {errors.name && (
                <span className="text-red-500 mt-1">Name is required</span>
              )}
            </div>
            <div className="form-control mb-4">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="Enter your email"
                className="w-full input input-bordered"
              />
              {errors.email && (
                <span className="text-red-500 mt-1">Email is required</span>
              )}
            </div>
            <div className="form-control mb-4">
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$&*])/,
                })}
                name="password"
                placeholder="Enter your password"
                className="w-full input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500 mt-1">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500 mt-1">
                  Password must be 6 characters
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-500 mt-1">
                  Password must be less than 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500 mt-1">
                  Password must have one uppercase, one lowercase, one number
                  and one special character.
                </p>
              )}
            </div>
            <button
              type="submit"
              className="btn bg-[#DBB884] hover:bg-[#D1A054] border-none"
            >
              Sign Up
            </button>
            <p className="text-center mt-6 text-sm">
              Already registered?{" "}
              <Link
                to={"/login"}
                className="font-semibold text-[#b9812b] link link-hover"
              >
                Go to login
              </Link>
            </p>
            <div className="divider">Or sign up with</div>
            <div className="flex justify-center space-x-6 mt-4">
              <button className="btn btn-circle btn-outline border-gray-300">
                <FaFacebookF />
              </button>
              <button className="btn btn-circle btn-outline border-gray-300">
                <FaGoogle />
              </button>
              <button className="btn btn-circle btn-outline border-gray-300">
                <FaGithub />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
