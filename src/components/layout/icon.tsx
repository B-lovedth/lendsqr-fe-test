'use client'
import Image from 'next/image'

interface IconProps {
  src: string
  alt?: string
  size?: number
  className?: string
}

 const Icon=({ src='', alt = '', size = 16, className = '' }: IconProps)=> {
     if (!src || typeof src !== 'string') {
    console.warn("Invalid icon path passed to SidebarIcon:", src)
    return null
  }
  return (
    // <div className={`flex items-center justify-center ${className}`} style={{ minWidth: size, minHeight: size }}>
      <Image src={src} alt={alt} width={size} height={size} />
    // </div>
  )
}
export default Icon