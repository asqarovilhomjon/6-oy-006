import React , {memo} from 'react'
import "./hero.css"
import herologo from "../../assets/image 34.png"
const Hero = () => {
    return (
        <div className='hero mb-10'>
            <div className='container'>
                <div className="hero__wrapper flex gap-10 box ">
                <div className='hero__img db'>
                        <img className='hero__img mt-0' src={herologo} alt="foto" />
                    </div>
                    <div className="hero__box  border p-10 shadow-xl flex flex-col gap-7 hero">
                        <p className='max-w-80 hero__title font-bold text-5xl'>Мебель на любой вкус!</p>
                        <div className="flex flex-col">
                            <p className='desc'>Худи, чашки для горячего чая и термосы</p>
                            <p className='desc'>Начало списка вещей, которые можно</p>
                            <p className='desc'>Eлочные игрушки, брелочки</p>
                        </div>
                        <button className=' w-64 hero__btn border-none bg-orange-400 py-2 rounded-full text-fuchsia-50 font-medium'>Перейти в каталог</button>
                        <button className=' w-64 hero__btn border py-2 rounded-full text-orange-400 font-medium mt-3'>Перейти в каталог</button>
                    </div>
                    <div className='hero__img dn'>
                        <img src={herologo} alt="foto" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Hero)