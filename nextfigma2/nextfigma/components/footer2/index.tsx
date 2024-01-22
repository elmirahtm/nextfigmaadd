import React from 'react'
import "./footer.css"
import Image from 'next/image'
const Footer2 = () => {
  return (
    <div className='son'>

<div className="texts">
<div >
<Image src="/Frame1.png" alt='png' width={264} height={73}/>
</div>
<div className="text">
    <p>Get in touch</p>
    <h5>info@bbq&kebab.com</h5>
    <h5>+1 (816) 482 1513</h5>
</div>
<div className="text2">
    <p> Follow Us</p>
    <h5>Instagram</h5>
    <h5>Facebook</h5>
</div>
<div className="text3">
    <p> Address</p>
    <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</h5>
  
</div>

</div>
    </div>
  )
}

export default Footer2