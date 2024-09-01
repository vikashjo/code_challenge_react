import PropTypes from 'prop-types'
import { useState } from 'react'
import { validateEmail, validatePassword } from '../utilities/validation'
import { Link } from 'react-router-dom'

const intitalErrorsState = {
  email: '',
  password: '',
  api: ''
}

const Authentication = ({pageType}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors ] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleSubmit = async (e) => {

    if(!validateEmail(email)){

      setErrors(
        {
          ...errors,
          email: 'Please enter a valid email address'
        }
      )
    }

    if(!validatePassword(password)){

      setErrors(
        {
          ...errors,
          password: 'Password must be at least 6 characters long'
        }
      )
    }
  }

  return (
    <div className="bg-white ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-12">
        <h3 className="text-2xl font-bold">
          {(pageType === PageType.LOGIN) ? 'Login' : 'Register'}
          </h3>

          {
            (pageType === PageType.LOGIN) ?
            <p className='mt-4'>
              Not a user?
              <Link to='/register'
                className='ms-1 underline'
                >
                Register
              </Link>
            </p>
          : 
          <p className='mt-4'>
             Already a user?
            <Link to='/login'
              className='ms-1 underline'
              >
              Login
            </Link>
          </p>
          }

          <form onSubmit={handleSubmit} className='mt-10 max-w-96 flex flex-col gap-4'>
            <div> 
              <input
                name="email"
                type="email"
                className='py-2 border w-full border-gray-600 rounded px-3'
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
              {errors.email && <p className='text-sm text-medium text-red-500 mt-1'> {errors.email}</p>}
            </div>
            
            <div>
              <input
                name="password"
                type="password"
                className='py-2 border w-full border-gray-600 rounded px-3'
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              />
              {errors.password && <p className='text-sm text-medium text-red-500 mt-1'> {errors.password } </p>}
            </div>

            <button 
              type="submit"
              className='bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-2 rounded'> 
              {(pageType === PageType.LOGIN) ? 'Login' : 'Register'}
            </button>
          </form>
      </div>
    </div>
  )
}

export const PageType = Object.freeze({
  LOGIN : 0,
  REGISTER : 1 
})

Authentication.propTypes = {
  pageType: PropTypes.number.isRequired 
}
export default Authentication