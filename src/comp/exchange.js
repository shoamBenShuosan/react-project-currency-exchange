import React from 'react'

import Input from './input';
import Footer from './footer';
import Header from './header';


export default function Exchange() {
  return (
    <main>
      <div className='bg'>
        <Header />
        <Input />
        <Footer />
      </div>
    </main>
  )
}
