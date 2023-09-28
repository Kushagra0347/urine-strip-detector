import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ImageUpload from './components/ImageUpload'
import Results from './components/Results'
import Loader from './components/Loader'
import LoginForm from './components/Forms/LoginForm'
import SignupForm from './components/Forms/SignUpForm'
import { logout } from './redux/actions/userActions'

function App() {
  const [state, setState] = useState('login')

  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.getUrineStrip)
  const { userInfo } = useSelector((state) => state.loginInfo)

  function handleStateChange(event) {
    const name = event.target.name

    if (name === 'loginBtn' && state !== 'login') {
      setState('login')
    } else if (name === 'signupBtn' && state !== 'signup') {
      setState('signup')
    }
  }

  function handleClick() {
    dispatch(logout())
  }

  return (
    <div className="font-gladiora flex min-h-screen max-w-full items-center justify-center overflow-hidden bg-gradient-to-br from-amber-200 via-amber-400 to-yellow-400">
      {!userInfo ? (
        <div className="bg-quaternary h-fit w-1/3 rounded-3xl px-10 py-5">
          <div className="mt-4 flex items-center justify-center">
            <button
              className={`${
                state === 'login' ? 'font-bold' : 'font-normal text-slate-400'
              } text-4xl`}
              name="loginBtn"
              onClick={handleStateChange}
            >
              Login
            </button>
            <span className="text-4xl text-slate-500"> / </span>
            <button
              className={`${
                state === 'signup' ? 'font-bold' : 'font-normal text-slate-400'
              } text-4xl`}
              name="signupBtn"
              onClick={handleStateChange}
            >
              Signup
            </button>
          </div>
          <div className="flex items-center justify-center">
            {state === 'login' ? <LoginForm /> : <SignupForm />}
          </div>
        </div>
      ) : (
        <div className="min-h-screen w-full">
          <div className="flex items-center justify-between px-10 pt-6 text-slate-700">
            <h1 className="inline-block text-4xl">
              Urine Strip Color Extractor
            </h1>
            <button
              className={
                'flex h-10 w-44 items-center justify-center rounded-lg bg-neutral-600 px-4 py-2 text-center text-xl font-bold text-amber-100 transition-colors hover:bg-neutral-700 hover:bg-opacity-80'
              }
              onClick={handleClick}
            >
              {'Logout'}
            </button>
          </div>
          <div className="flex items-center">
            <ImageUpload />

            <div className="w-1/2 px-10 pt-3">
              <div className="h-[28rem] w-full overflow-y-scroll rounded-md border-2 border-dashed border-gray-400 bg-[#eee]">
                {loading ? (
                  <div className="flex h-full items-center justify-center">
                    <Loader />
                  </div>
                ) : (
                  <Results />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
