import './SignIn.css';
import {Link, Navigate} from 'react-router-dom';
import SignInForm from 'components/SignInForm/SignInForm';
import {useSelector} from 'react-redux';
import {useTheme} from 'contexts/themeContext';

function SignIn() {
  const {token, user} = useSelector((store) => store.auth);
  const {isDark} = useTheme();

  if (token && user) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="auth flex justify-center items-center h-screen bg-white dark:bg-dark dark:text-white">
      <div className="logo-parent w-[500px]">
        <img
          className="logo w-[400px]"
          src={`/images/logo-${isDark ? 'white' : 'black'}.png`}
          alt=""
        />
      </div>
      <div className="button-container w-[600px] h-[400px] flex flex-col justify-start items-center gap-3">
        <div>
          <h1 className="header text-7xl font-medium text-center mb-5">
            POST MONKEY
          </h1>
        </div>

        <div className="form container w-[400px]">
          <div className="w-full">
            <div className="flex justify-center mb-8 ">
              <p className="inline-block align-baseline  text-sm font-light tracking-wider">
                Don't have an account?{' '}
                <Link
                  className="inline-block align-baseline  text-sm text-orange-600 hover:text-orange-800 font-light"
                  to={'/sign-up'}
                >
                  Sign Up
                </Link>
              </p>
            </div>

            <SignInForm />

            {/*<button
              onClick={() => navigate('/sign-in')}
              className="btn btn-outline-orange bg-transparent w-80"
            >
              Sign in
            </button>*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
