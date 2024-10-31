import { Phone, Lock, Eye, EyeOff } from 'lucide-react'

const LoginwithMobile = () => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className="min-h-screen bg-blue-950 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-blue-900">Sign in to your account</h2>
            </div>
            <div className="mt-8 space-y-6">
              <form className="mt-8 space-y-6" action="#" method="POST">
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="mobile" className="sr-only">
                      Mobile number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        autoComplete="tel"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm pl-10"
                        placeholder="Mobile number"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        autoComplete="current-password"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm pl-10 pr-10"
                        placeholder="Password"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="text-gray-400 focus:outline-none"
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
    
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                      Remember me
                    </label>
                  </div>
    
                  <div className="text-sm">
                    <a href="#" className="font-medium text-orange-600 hover:text-orange-500">
                      Forgot your password?
                    </a>
                  </div>
                </div>
    
                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
            <div className="text-center">
              <p className="mt-2 text-sm text-gray-600">
                Don't have an account?{' '}
                <a href="#" className="font-medium text-orange-600 hover:text-orange-500">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      )
}

export default LoginwithMobile