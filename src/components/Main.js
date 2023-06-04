import React from 'react'

export default function Main() {
  return (<>
    <div className='contanier my-5 '>
      <h2 className='h2 fs-3 text-secondary fw-bolder text-center  w-70 mx-auto '>Best Price to Trade</h2>

    </div>
    <div className="container  row mx-auto  " style={{ maxWidth: '90vw' }}>
      <div className="col-2  ">
        <h4 className=' text-center  s1 fw-bold' style={{ color: '#6ccacb' }}>0.1%</h4>
        <h4 className=" text-center s2 text-secondary"> 5 Min</h4>
      </div>
      <div className="col-2 "> 
      <h4 className=' text-center  s1 fw-bold' style={{ color: '#6ccacb' }}>0.96%</h4>
      <h4 className=" text-center  s2 text-secondary">1 Hour</h4>
      </div>
      <div className="col-4" >
      <h4 className=' text-center s1   fw-bold text-light' >&#8377; 26,56,110</h4>
      <h4 className="text-center  s2 s21 text-secondary" >Average BTC/INR net price including commission</h4>
      </div>
      <div className="col-2 ">
      <h4 className=' s1 text-center  fw-bold' style={{ color: '#6ccacb' }}>2.73%</h4>
      <h4 className=" s2 text-center text-secondary">1 Day</h4>
      </div>
      <div className="col-2  ">
      <h4 className='  s1 text-center  fw-bold' style={{ color: '#6ccacb' }}>7.51%</h4>
      <h4 className=" s2 text-center text-secondary">7 Day</h4>
      </div>
    </div>
  </>
  )
}
