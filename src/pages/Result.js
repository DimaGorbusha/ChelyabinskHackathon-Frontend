import React from 'react'
import Cu from '../img/pagesImages/Cu.svg'
import Cd from '../img/pagesImages/Cu.svg'
import chevron from '../img/pagesImages/chevron_black.svg'

export function Result() {
  return (
    <div className="bg-white">
      <div className="flex pt-[45px] items-center">
        <a href="/"><img src={chevron} alt="" className='ml-[97px]'/></a>
        <a href="/" className='text-[28px] font-gothamMedium text-black ml-[20px]'>Обратно на главную</a>
        <a href="https://model.lowderplay.dev/upload" className='text-[18px] font-gothamMedium text-gray-400 ml-[570px]'>Старая версия сайта</a>
      </div>
      <div className='flex mt-[70px] ml-[97px]'>
        <p className='font-gothamMedium text-[32px] ml-[50px]'>Расчёт содержания<br/>меди и кадмия в точке АТ502</p>
        <p><input type="submit" value="Скачать файл" className='text-[24px] font-gothamMedium text-white pt-[18px] pb-[18px] pl-[159px] pr-[159px] rounded-[20px] mb-[124px] ml-[459px] bg-[#DF762E] shadow-[0px_0px_53px_rgba(223,118,46,0.67)] transition delay-100 ease-out hover:bg-white hover:text-[#DF762E] hover:shadow-[0px_0px_53px_rgba(255,255,255,0.67)]'/></p>
      </div>
        <div className='flex ml-[97px]'>
          <img src={Cu} alt="" className=''/>
          <div className='ml-[40px]'>
            <p className='font-gothamMedium text-[28px] text-[#8C888A]'>Содержание меди:</p>
            <p className='font-gothamMedium text-[32px] ml-[]'>{}</p>
          </div>
        </div>
        <div className='flex ml-[97px]'>
          <img src={Cd} alt="" className=''/>
          <div className='ml-[40px]'>
            <p className='font-gothamMedium text-[28px] text-[#8C888A]'>Содержание кадмия:</p>
            <p className='font-gothamMedium text-[32px]'>{}</p>
          </div>
        </div>
        <img href="" alt="" className=''/>
    </div>
  )
}
