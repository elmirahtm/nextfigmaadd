import React from 'react'
import "./test.css"
import Image from 'next/image'
const   List2 = () => {
  return (
    <div>
        <div className="basliq">
            <h2>Delivery</h2>
        </div>
        <div className="p">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>
        <div className="daire">
<div className="daire2">
<span className='teg'><Image src="/eat.png" alt='cc' width={120}height={66}/>
</span>
<div className="tap">
<h4>Uber Eats</h4>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an </p>
</div>
</div>


<div className="daire3">
<span className='teg'><Image src="/door.png" alt='cc' width={120}height={66}/>
</span>
<div className="tap">
<h4>Doordash</h4>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an </p>
</div>
</div>
        </div>

        <div className="map">
        <span ><Image src="/map.png" alt='sdf' width={1288}height={519}/></span>

        </div>
        <div className="xerite2">
        <div className="ox">
<Image src="/daire22.png" alt='png' width={1440} height={118}/>

</div>
        </div>
    </div>
  )
}

export default List2