import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
     
        <span> <Image src="/Group38.png" alt='kbuk' width={1200} height={490}/> </span>
<div className='bbq'>
<span> <Image src="/BBQ.png" alt='kbuk' width={120} height={25}/> </span>
<div className='ptag'>
<p>Barbecue in Kansas City is more than a menu item or a method of preparation. It’s an institution, rich with history and culinary tradition that shapes the city’s dining landscape every day and has since the early 1900s.</p>
<p>To follow the heritage, we embrace the tradition keeping the concept of ultimate comfort food and remain a part of something timeless with our “Kebab” Middle Eastern style of BBQ.</p>
<p >We use only low fat quality 100% American beef and lamb. Our smiles and laughter demonstrate confidence in our product and service. Our portions are rich and our service system is one of the easiest, quick serve kebab outlets in the country</p>

</div>
</div>
       
    </div>
  )
}

export default Footer