"use client"
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import styles from './login.module.scss'
const Login=()=> {
  const { login, loading } = useAuth()
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
   const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null)
  const [isError, setIsError] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    const success = await login(email, password)
    if (success) {router.push('/dashboard')}
    else {
      setIsLoading(false)
      setIsError(true)
      setError("Invalid email or password")
        console.error("Login failed: Invalid email or password")
    }
  }

  return (
 <div className={styles.container}>
      <div className={styles.logo}>
        <img src="/img/logo.svg" alt="Lendsqr Logo" />
      </div>
      
      <div className={styles.Wrapper}>
        <div className={styles.loginImage}>
            <img src="/img/logIn.svg" alt="Login Illustration" />
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>Welcome!</h1>
            <p className={styles.subtitle}>Enter details to login</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name='email'
              autoComplete='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <div className={styles.passwordContainer}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name='password'
                autoComplete='current-password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className={styles.togglePassword}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          
          <a href="#" className={styles.forgotPassword}>Forgot Password?</a>
          
          <button
            type="submit"
            className={styles.loginButton}
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Log In'}
          </button>
            {isError && <p className={styles.error}>{error}</p>}
        </form>
        </div>
      </div>
    </div>
  )
}

export default Login