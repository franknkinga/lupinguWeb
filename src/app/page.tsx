import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex w-[900px] bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Left - Sign In */}
        <div className="w-1/2 p-10">
          <h1 className="text-2xl font-bold text-green-600 mb-2">Lupingu <span className="text-black">Beach</span></h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Sign in to Account</h2>

          <input type="email" placeholder="Email"
            className="w-full p-3 mb-4 border rounded-lg" />
          <input type="password" placeholder="Password"
            className="w-full p-3 mb-2 border rounded-lg" />

          <div className="flex justify-between items-center mb-6 text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            {/* Forgot Password Link */}
            <Link href="/forgot-password.tsx" className="text-green-600 hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Sign In Button → goes to /signin */}
          <Link href="/signin.tsx">
            <button className="w-full bg-green-600 text-white py-3 rounded-lg">
              Sign In
            </button>
          </Link>
        </div>

        {/* Right - Sign Up */}
        <div className="w-1/2 bg-green-600 text-white flex flex-col justify-center items-center p-10">
          <h2 className="text-3xl font-bold mb-4">Hello, Friend!</h2>
          <p className="mb-6 text-center">
            Fill up personal information and start journey with us.
          </p>

          {/* Sign Up Button → goes to /signup */}
          <Link href="/signup.tsx">
            <button className="border-2 border-white px-8 py-2 rounded-lg hover:bg-white hover:text-green-600">
              Sign Up
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
