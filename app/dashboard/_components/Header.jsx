import React from 'react'
import Image from 'next/image'
function Header() {
  return (
    <div>
      <Image src={'/logo.svg'} width={160} height={100} alt='logo'/>
    </div>
  )
}

export default Header
