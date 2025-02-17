import React from 'react'
import "../bannerBoxV2/bannerBoxV2-styles.css"
import { Link } from 'react-router-dom';

const BannerBoxV2 = (props) => {
  return (
    <div className='bannerBoxV2 w-full overflow-hidden rounded-md group relative' >
      <img src={props.image} alt="" className='w-full transition-all duration-150 group-hover:scale-105'/>
      
      <div className={`info absolute p-5 top-0 ${props.info==="left" ? 'left-0' : 'right-0'} w-[70%] h-[100%] z-50 flex items-center justify-center flex-col gap-2 ${props.info === "left" ? '' : 'pl-15'}`} >
        <h2 className='text-[20px] font-[600]'>LEDO Watch Box and Sunglass Case</h2>
        <span className="text-[20px] text-[#1976d2] font-[600] w-full">&#8377; 1999.00</span>

        <div className="w-full">
          <Link to="/" className='text-[16px] font-[600] link'>shop now</Link>
        </div>
      </div>

    </div>
  )
}

export default BannerBoxV2;