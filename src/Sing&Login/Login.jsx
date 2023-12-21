/* eslint-disable react-hooks/rules-of-hooks */
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
            <div
              className=" flex items-center justify-center"
              onClick={googleAuth}
            >
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
