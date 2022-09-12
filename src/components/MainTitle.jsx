import React from 'react'

export function MainTitle() {
  return (
    <div className='text-center mt-[100px]'>
        <h1 className="text-white font-gothamMedium text-[80px]">Расчет содержания<br/>
        <span className="underline underline-offset-4">меди и кадмия</span> в точке АТ502</h1>
        <p className="text-[18px] font-gothamMedium text-lightGray mt-[40px]">Сервис, который поможет с  расчётами и вообще кул</p>
        <p className='text-[24px] font-gothamMedium text-white pt-[18px] pb-[18px] pl-[105px] pr-[105px] rounded-[90px] bg-[#DF762E] mt-[84px] ml-[517px] mr-[519px] shadow-[0px_0px_53px_rgba(223,118,46,0.67)] transition delay-100 ease-out hover:bg-white hover:text-[#DF762E] hover:shadow-[0px_0px_53px_rgba(255,255,255,0.67)]'><a href='/calculator'>Сделать расчёт</a></p>
        <p className='mt-[844px] font-gothamMedium text-[28px] text-blue text-left ml-[97px] pb-[2479px]'><a href='/calculator'>Сделать расчёт</a></p>
    </div>
  )
}
