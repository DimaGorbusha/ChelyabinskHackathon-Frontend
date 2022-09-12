import React from 'react'
import chevron from '../img/componentsImages/chevron.svg'
import cucad_black from '../img/pagesImages/cucad_black.svg'
import img1 from '../img/pagesImages/img1.svg'
import img2 from '../img/pagesImages/img2.svg'
import arrow from '../img/pagesImages/arrow.svg'
import questions from '../img/pagesImages/questions.png'

export function Calculator() {
  return (
    <div className="bg-calculator">
      <div className="flex pt-[45px] items-center">
        <a href="/"><img src={chevron} alt="" className='ml-[97px]'/></a>
        <a href="/" className='text-[28px] font-gothamMedium text-white ml-[20px]'>Обратно на главную</a>
        <a href="https://model.lowderplay.dev/upload" className='text-[18px] font-gothamMedium text-gray-400 ml-[570px]'>Старая версия сайта</a>
      </div>
      <div>
        <img src={cucad_black} alt="" className='ml-[160px] mt-[106px]'/>
      </div>
      <div className='flex'>
      <form className='ml-[160px] mt-[53px]'>
        <div className='flex'>
          <img src={img1} alt="" className=''/>
          <p className='font-gothamMedium text-[32px] ml-[50px]'>Загрузите файл с<br/>данными</p>
        </div>
        <div className='flex mt-[21px]'>
          <img src={arrow} alt="" className=''/>
          <p className='ml-[50px]'><input type="file" name="f"/></p>
        </div>
        <div className='flex mt-[27px]'>
          <img src={img2} alt="" className=''/>
          <p className='font-gothamMedium text-[32px] ml-[50px]'>Загрузите файл с<br/>временными точками</p>
        </div>
        <div className='mt-[21px]'>
          <p className='ml-[75px]'><input type="file" name="f"/></p>
        </div>
        <p  className='text-[24px] font-gothamMedium text-white pt-[18px] pb-[18px] pl-[210px] pr-[210px] rounded-[20px] mt-[54px] mb-[124px] bg-[#DF762E] shadow-[0px_0px_53px_rgba(223,118,46,0.67)] transition delay-100 ease-out hover:bg-white hover:text-[#DF762E] hover:shadow-[0px_0px_53px_rgba(255,255,255,0.67)]'><a href="/result">Сделать расчёт</a></p>
      </form>
      <div className="ml-[42px]">
        <img src={questions} alt="" className=''/>
      </div>
      </div>
      <p className=''></p>
    </div>
  )
}
