"use client"
import { usePathname } from 'next/navigation';
import React from 'react'
import Link from 'next/link'
const links=[
    {id:1,to:"./about" , title:"About"},
    {id:2,to:"./menu" , title:"Menu "},
    {id:3,to:"./beverage" , title:"Beverage"},
    {id:4,to:"./delivery" , title:"Delivery"},
    {id:5,to:"./contact" , title:"Contact Us"}
]
const Bodylist = () => {
    const path=usePathname();
  return (
    <div className='kebabout'>
          {
        links.map(({title,id,to})=>{
            return(
                <div className='kebabin'>
                    <Link
                    href={to}
                    key={id} className={path===to ? "isactive" : ""}
                    >
                    {title}

                    </Link>
                </div>
            )
        })
    }

    </div>
  )
}

export default Bodylist