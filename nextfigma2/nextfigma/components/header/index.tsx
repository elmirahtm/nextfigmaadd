"use client"
import Image from 'next/image'
import React from 'react'
// import { IoIosMenu } from "react-icons/io";
const Header = () => {
  return (
<div>
<div className='flex'>
        <div className="logo">
            <Image src="/Frame1.png" alt='png' width={264} height={73}/>
        </div>
        <div className="right">
            <span> <Image src="/Vector3.png" alt='png' width={15} height={15}/></span>
        <p>+1 (816) 482 1513</p>
        </div>
    </div>
<div className='taste'>
<h1>Taste the Original <span>KEBAB</span></h1>

</div>
</div>
  )
}

export default Header