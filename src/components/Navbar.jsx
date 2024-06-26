import React , {useContext}from 'react'
import { MyContext } from '../Context/MyContext'
function Navbar() {
  const { myState } = useContext(MyContext);
  return (
    <div className='flex justify-between mx-[10px]'>
      <div className="flex">
        <div className="">
          <img src="../../public/images/life.png" alt="" />
        </div>
        <div className="">
          <img src="../../public/images/life.png" alt="" />
        </div>
        <div className="opacity-40">
          <img src="../../public/images/dead.png" alt="" />
        </div>
      </div>

      <div className=''>
       <div>Highest Score : </div>
       <div className='text-center'>  9999</div>
       <div className=' text-green-800 '>Score : {myState}</div>
      </div>
    </div>
  )
}

export default Navbar
