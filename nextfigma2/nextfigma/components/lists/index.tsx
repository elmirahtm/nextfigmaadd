import React from 'react'
import "./style.css"
import Image from 'next/image'
const Lists = () => {
  return (
    <div className='color'>
  <div className="tam">
  <div className="title">
            <h1>Beverages</h1>
            <p>*All stated prices are without applicable taxes</p>
        </div>

        <div className="lists">
<div className="list2">
<div className="sira">
       <span><Image src="/coca.png" alt='bsch' width={95} height={174}/>
          <div className="crc">
             <Image src="/Ellipse.png" alt='png' width={72} height={72}/>
           <div className="span">
           <p >1$</p>
           </div>
             </div>
          </span>
       </div>

<div className="sira2">
  
<span><Image src="/coke.png" alt='s' width={95} height={174}/>
          <div className="crc">
             <Image src="/Ellipse.png" alt='png' width={72} height={72}/>
           <div className="span">
           <p >1$</p>
           </div>
             </div>
             </span>
</div>

         <div className="sira3">
         <span><Image src="/sprite.png" alt='c' width={95} height={174}/>
          <div className="crc">
             <Image src="/Ellipse.png" alt='png' width={72} height={72}/>
           <div className="span">
           <p >1$</p>
           </div>
             </div></span>
         </div>


      <div className="sira4">
      <span><Image src="/pepper.png" alt='ef' width={95} height={174}/>
          <div className="crc">
             <Image src="/Ellipse.png" alt='png' width={72} height={72}/>
           <div className="span">
           <p >1$</p>
           </div>
             </div></span>
      </div>

         <div className="sira5">
         <span><Image src="/qirmizi.png" alt='wef' width={95} height={174}/>
          
          <div className="crc">
             <Image src="/Ellipse.png" alt='png' width={72} height={72}/>
           <div className="span">
           <p >1$</p>
           </div>
             </div></span>

         </div>

     <div className="sira6">
     <span><Image src="/pepsi.png" alt='zv' width={95} height={174}/>
          <div className="crc">
             <Image src="/Ellipse.png" alt='png' width={72} height={72}/>
           <div className="span">
           <p >1$</p>
           </div>
             </div>
          </span>
     </div>
</div>
        </div>
  </div>
    </div>
  )
}

export default Lists