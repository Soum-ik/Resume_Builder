import styles from "../style/Style";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/authSetUp";
import System from "../components/System";

const logIn = () => {
  const { googleAuth } = useAuth();
  return (
    <div className={`${styles.marginX}`}>
      <div className={`${styles.paddingY} ${styles.flexCenter} `}>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Log in to your account
            </h2>
          </div>

          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className=" outline-none block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 hover:ring-2 hover:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className=" hover:ring-2 hover:ring-indigo-600 border ring-1 ring-gray-300 mt-2 flex rounded-md flex-1 items-center justify-centerring-inset placeholder:text-gray-400 ">
                  <input
                    id="password"
                    name="password"
                    type="text"
                    autoComplete="current-password"
                    required
                    className="   outline-none block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm  ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                  <AiFillEye size={30} className="p-2" />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Log in
                </button>
              </div>
            </form> */}
            <div className=" flex items-center justify-center" onClick={googleAuth}>
              <System icon={"Google"} name={"Google"} gap={"10"} />
            </div>
            <p className=" text-center pt-5">
              <Link to="/singUppage" className="text-secondary my-4">
                I am not registered —{" "}
                <span className=" text-primary font-medium">Sing In </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default logIn;
