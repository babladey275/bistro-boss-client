import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import loginImg from "../../assets/others/authentication2.png";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div className="min-h-screen bg-auth-bgImg flex items-center justify-center">
      <div className="w-full max-w-5xl flex bg-auth-bgImg md:my-10 border-2 shadow-2xl rounded-lg overflow-hidden">
        {/* Left Section - Image */}
        <div className="w-1/2 hidden lg:flex items-center justify-center p-8 bg-cover bg-center">
          <img src={loginImg} alt="" className="max-w-sm" />
        </div>

        {/* Right Section - Form */}
        <div className="card w-full lg:w-1/2 pt-4 md:p-12">
          <h1 className="text-4xl font-bold text-center mb-4 md:mb-8">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control mb-4">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full input input-bordered"
                required
              />
            </div>
            <div className="form-control mb-4">
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full input input-bordered"
                required
              />
            </div>
            <div className="form-control mb-6">
              <label className="block text-sm font-medium mb-2">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                ref={captchaRef}
                name="captcha"
                placeholder="Type the captcha above"
                className="w-full input input-bordered mt-4"
                required
              />
              <button
                onClick={handleValidateCaptcha}
                className="btn btn-outline mt-2 btn-xs"
              >
                Validate Captcha
              </button>
            </div>
            <button
              disabled={disabled}
              type="submit"
              className="btn bg-[#DBB884] hover:bg-[#D1A054] border-none"
            >
              Sign In
            </button>
            <p className="text-center mt-6 text-sm">
              New here?{" "}
              <Link className="text-[#D1A054] link link-hover">
                Create a New Account
              </Link>
            </p>
            <div className="divider">Or sign in with</div>
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

export default Login;
