'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Home=()=> {
  const router = useRouter()

  useEffect(() => {
    router.replace('/dashboard') // Redirect to the Users page
  }, [])

  return null
}
export default Home