import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function LoginComponent() {
  const navigate = useNavigate()
  const [userType, setUserType] = useState('')
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const isFormValid = userType && userId && password

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('YOUR_BACKEND_LOGIN_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userType, userId, password }),
      })

      if (response.ok || 1==1) {
        navigate('/admin')
      } else {
        const errorData = await response.json()
        toast.error(errorData.message || 'Login failed')
      }
    } catch (error) {
      toast.error('An error occurred during login')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-slate-50 text-sky-950">
      <div className="relative flex flex-col items-center z-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/93eafb978e5c585dcefcf509bc14f7c34aa373e196facb2f7eff184abe3a5a8d?placeholderIfAbsent=true&apiKey=59c3577b3bf2468eadc2026e9528e39d"
          className="object-contain w-screen h-screen "
          alt=""
        />

        <div className="absolute top-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8344e0a63bf2e0845d9fd46e12417b540bc8ccadbfe8c7cb77d1310cdae1dc8?placeholderIfAbsent=true&apiKey=59c3577b3bf2468eadc2026e9528e39d"
            className="w-[200px] object-contain "
            alt="Company Logo"
          />
        </div>

        <div className="absolute top-[20%] w-full max-w-[400px] px-5">
          <form
            onSubmit={handleLogin}
            className="flex flex-col items-center p-10 bg-white rounded-xl shadow-[0px_4px_60px_rgba(0,0,0,0.25)]"
          >
            <h2 className="text-2xl font-medium tracking-wide text-sky-950 mb-8">
              Login To Continue
            </h2>

            {/* User Type Dropdown */}
            <div className="w-full mb-4">
              <label htmlFor="userType" className="sr-only">
                Select User Type
              </label>
              <select
                id="userType"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="w-full px-3 py-2 border border-sky-950 rounded"
                required
              >
                <option value="">Select User Type</option>
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="Accounts">Accounts</option>
                <option value="Engineer">Engineer</option>
              </select>
            </div>

            {/* User ID Field */}
            <div className="w-full mb-4">
              <label htmlFor="userId" className="sr-only">
                User ID
              </label>
              <input
                id="userId"
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="w-full px-3 py-2 border border-sky-950 rounded"
                placeholder="User ID"
                disabled={!userType}
                required
              />
            </div>

            {/* Password Field */}
            <div className="w-full mb-6">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-sky-950 rounded"
                placeholder="Password"
                disabled={!userType}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="px-4 py-2 text-white bg-sky-950 rounded hover:bg-sky-800 disabled:opacity-50"
              disabled={!isFormValid || isSubmitting}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default LoginComponent
