import Bodyheading from '@/components/bodyheading'
import Bodylist from '@/components/bodylist'
import Bodylist2 from '@/components/bodylist2'
import Footer from '@/components/footer'
import Footer2 from '@/components/footer2'
import Header from '@/components/header'
import Lists from '@/components/lists'
import List2 from '@/components/lists2'

import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <Bodyheading/>
      <Bodylist/>
      <Footer/>
      <Bodylist2/>
      <Lists/>
      <List2/>
      <Footer2/>
    </div>
  )
}

export default page