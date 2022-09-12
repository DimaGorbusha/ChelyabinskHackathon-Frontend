import React from 'react'
import cucad from '../img/componentsImages/cucad.svg'

export function MenuIndex() {
  return (
    <div>
        <div className='flex items-center'>
            <img src={cucad} alt="" className='ml-[93px] mt-[53px]' />
            <p className='text-white mt-[58px] text-[16px] ml-[415px] font-gothamMedium'><a href='https://model.lowderplay.dev/upload' className=''>Старая версия сайта</a></p>
            <p className='mt-[50px] px-[30px] py-[10px] bg-[#272526] rounded-[90px] text-[#B9B8B8] font-gothamMedium ml-[317px]'>gesti.hub</p>
        </div>
    </div>
  )
}
