import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import authImg from "../../assets/others/authentication2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "User login successful!",
          showClass: {
            popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
          },
          hideClass: {
            popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
          },
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(`Login failed: ${error.message}`);
      });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="min-h-screen bg-auth-bgImg flex items-center justify-center">
        <div className="w-full max-w-5xl flex bg-auth-bgImg md:my-10 border-2 shadow-2xl rounded-lg overflow-hidden">
          {/* Left Section - Image */}
          <div className="w-1/2 hidden lg:flex items-center justify-center p-8 bg-cover bg-center">
            <img src={authImg} alt="" className="max-w-sm" />
          </div>

          {/* Right Section - Form */}
          <div className="card w-full lg:w-1/2 pt-4 md:p-12">
            <h1 className="text-4xl font-bold text-center mb-4 md:mb-8">
              Login
            </h1>
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
                <label className="block text-sm font-medium mb-2">
                  Password
                </label>
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
                  onBlur={handleValidateCaptcha}
                  name="captcha"
                  placeholder="Type the captcha above"
                  className="w-full input input-bordered mt-4"
                  required
                />
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
                <Link
                  to={"/signup"}
                  className="font-semibold text-[#b9812b] link link-hover"
                >
                  Create a New Account
                </Link>
              </p>
              <div className="divider">Or sign in with</div>
              <div className="mt-4">
                <SocialLogin />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
