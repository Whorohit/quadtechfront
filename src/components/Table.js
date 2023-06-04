import React,
{ useState, useEffect } from 'react'
import axios from 'axios'

export default function Table() {
  const [data, setData] = useState([])
  const [vindex, setVindex] = useState(0)
const [color, setColor] = useState('rgb(108 202 203)')
  useEffect(() => {
    axios.get("https://taskbackend-qz6h.onrender.com/find")
     .then(res=>setData(res.data))
  
  }, [])
console.log(data)  
let c=0
function capitalizeFLetter(string) {
  return(string.replace(/^./, string[0].toUpperCase()));
}
const differnce=(buy,sell)=>{
 let c=(sell-buy)/buy
 c=c*100
 c=c.toFixed(3)

 return c
}
  return (<>
    <table className=' container text-secondary my-3' >
      <thead className=''>
        <tr>
          <th className='  '>#</th>
          <th className='  '>Platform</th>
          <th className='  '>Last Traded Price</th>
          <th className='  '>Buy/Sell Price</th>
          <th className='  '>Differnce</th>
          <th className='  '>Savings</th>
        </tr>
      </thead>
    </table>
    <div>
      {/* <div className="container tablebody px-0  my-3  py-1 text-center text-light bg-secondary rounded">
        <div className=''>#</div>
        <div className=''>Platform</div>
        <div className=''>Last Traded Price</div>
        <div className=''>Buy/Sell Price</div>
        <div className=''>Differnce</div>
        <div className=''>Savings</div>
      </div> */}
      {
        data.map(list=>{
          
          return <div className="container tablebody fw-bold px-0  my-3  py-1 text-center text-light bg-secondary rounded">
          <div className=' smallmoblie'>{++c}</div>
          <div className=' smallmoblie text-light'>{capitalizeFLetter(list.base_unit)}</div>
          <div className=' smallmoblie  d-flex align-items-center justify-content-center '>{list.last}</div>
          <div className=' smallmoblie  d-flex align-items-center justify-content-center '>&#8377; {list.buy} / &#8377; {list.sell}</div>
          <div className=' smallmoblie  d-flex align-items-center justify-content-center ' style={{color:`${list.sell>list.buy?'rgb(108 202 203)':'red'}`}}>{list.sell>list.buy?<><i class="fa-sharp fa-solid fa-light fa-caret-up fa-lg"></i>
          &nbsp;{differnce(list.buy,list.sell)}%</>:<><i class="fa-sharp fa-solid fa-light fa-caret-down fa-lg"></i> &nbsp;{differnce(list.buy,list.sell)}%</>}</div>
          <div className=' smallmoblie  d-flex align-items-center justify-content-center' style={{color:`${list.sell>list.buy?'rgb(108 202 203)':'red'}`}}>{(list.volume*(list.sell-list.buy)).toFixed(2)}</div>
        </div> 
          

        })
      }
      
    </div>
   <div className="container d-flex justify-content-center">
   <button className="btn btn-transprent  border-1 " style={{color:'rgb(108 202 203)',borderColor:'rgb(108 202 203)'}}>Add hodlinfo to home screen</button>

   </div>
  </>
  )
}
