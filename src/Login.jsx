import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Nav from "./Nav";
import imgHero1 from "./assets/herop.png";
import logo from "./assets/logoBook.png";
function Login() {
  const [api, setapi] = useState([]);
  const [texterror, settexterror] = useState("");
  const navigate = useNavigate();

  const check = () => {
    axios
      .get("https://6689ba9f0ea28ca88b88bd30.mockapi.io/book")
      .then((res) => {
        const a = res.data.filter((e) => e.email == api.email);

        if (api.email == undefined || api.password == undefined) {
          settexterror("Email and password cannot be empty");
        }
        // else if(api.email!=)
        else if (a.length == 0) {
          settexterror("email is not found");
        } else if (a[0].password !== api.password) {
          settexterror("Email or password is incorrect");
        } else {
          localStorage.setItem("id", a[0].id);
          navigate("/");
        }
      });
  };

  return (
    <section
      className="bg-60 
  relative rounded-md
   flex 
   justify-center items-center h-screen"
    >
      <section
        className="w-[70%] h-[70%]
  max-sm:w-full  max-sm:mx-7 
   max-sm:pb-4 bg-opacity-60 bg-white "
      >
        {/* <Nav login={true} title='login'/> */}
        <section
          className=" flex  h-full 
   justify-center items-center 
   max-sm:items-center max-sm:flex-col  mt-3"
        >
          <img className="w-[50%]  max-sm:w-[70%]   " src={imgHero1} alt="" />
          <div
            id="login"
            className="w-[50%] 
justify-center max-sm:w-full text-4xl
  gap-4 flex flex-col 
  items-center h-full
   font-sans  relative"
          >
            <Link
              to={"/"}
              className="absolute top-1 mb-2  
    text-xl max-sm:text-lg p-2 max-sm:hidden  "
            >
              <img className="w-20" src={logo} alt="" />
            </Link>

            <h1
              className="text-4xl 
    text-center font-extrabold"
            >
              Welcome back!{" "}
            </h1>

            <p className="text-center opacity-70 text-lg ">Hello agin </p>

            <label
              className="bg-gray-300  w-[60%]
   items-center   rounded-md  px-2 p-1  flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-6 w-6 opacity-60 mx-2"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                onChange={(e) => {
                  setapi({ ...api, email: e.target.value });
                }}
                type="email"
                className="
   bg-transparent  placeholder:text-gray-500
   focus:outline-none placeholder:text-xl
   "
                placeholder="E-mail"
              />
            </label>
            <label
              className="bg-gray-300
  w-[60%]
   items-center
   rounded-md  px-2 p-1
  flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-6 w-6 opacity-50 mx-2"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                onChange={(e) => {
                  setapi({ ...api, password: e.target.value });
                }}
                type="password"
                className="
   bg-transparent  placeholder:text-gray-500
   focus:outline-none placeholder:text-xl
   "
                placeholder="password"
              />
            </label>

            <button
              onClick={check}
              className="bg-40
 text-gray-50 w-[60%] px-2 p-1 rounded-md"
            >
              Login
            </button>
            <span className="text-red-500 text-xl">{texterror}</span>
            <span>
              Don't have an account yet?{" "}
              <Link
                className="px-2 cursor-pointer text-20 font-bold"
                to="/signUp"
              >
                Sign Up.
              </Link>{" "}
            </span>
          </div>
        </section>
      </section>

      {/* <div className='absolute -bottom-32 -left-20 w-60 h-60 bg-20 rounded-full'></div> */}

      {/* <div className='absolute -bottom-20 -left-20 w-80 h-80 bg-20 rounded-full'></div> */}
    </section>
  );
}
export default Login;
