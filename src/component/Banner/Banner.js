import React from 'react';
import banner from '../../../public/imagens/banner.png'
import './Banner.css';



const Banner = ()=>{
    return(
        <header className='banner'>
            <img src={banner} alt="Imagem"/>
        </header>
    )
}

export default Banner;