import React, {useState} from 'react'
import { Link } from 'react-router-dom'


function Page1() {
  return (
    <>
    <div className='d-flex flex-column justify-content-center align-items-center' style={{color:'#eae9ee'}}>
        <h1 style={{fontSize:'35px',letterSpacing:'5px',marginTop:'8em'}}>IT'S TIME TO QUIZ</h1>
        <Link to={'./Page2'}>
        <button className='mt-5 px-2 py-2 btn btn-outline-light bn' style={{letterSpacing:'5px',outline:'none'}}>START</button>
        </Link>
    </div>
    </>
  )
}

export default Page1