import { Mail } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function ForgotPasswordPage() {
    const navigate = useNavigate();
    const handleResetLink = () => {
        navigate("/reset-password")
    }
  return (
    <div className="min-h-screen bg-blue-950 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="md:max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div className='w-full'>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-blue-900">Forgot your password?</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>
        <form className="w-full mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm pl-10"
                  placeholder="Email address"
                />
              </div>
            </div>
          </div>

          <div>
            <button
            onClick={handleResetLink}
              type="submit"
              className="group relative w-full flex justify-center  py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Send reset link
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="mt-2 text-sm text-gray-600">
            Remember your password?{' '}
            <a href="/login" className="font-medium text-orange-600 hover:text-orange-500">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}