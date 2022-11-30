import React, {useState} from 'react'
import Image from 'next/image';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {BsGear} from 'react-icons/bs'
import Styles from './Navbar.module.css';
import Link from 'next/link';


import logoGerdau from '../../../public/img/logoGerdau.png'

export default function Navbar() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <div className={Styles.navbar}>
        <div className={Styles.container}>
            <Image src={logoGerdau} width={200}/>            
                <ul className={click ? 'nav active' : 'nav'} style={{display:'flex'}}>
                <li className={Styles.nav}>
                    <a style={{color: '#f4eeff', fontSize:'14pt'}}href="/">Sobre</a>
                </li>
                <li className={Styles.nav}>
                    <a style={{color: '#f4eeff', fontSize:'14pt'}}href="/">Desenvolvedores</a>
                </li>
            </ul>
            <div onClick={handleClick} className={Styles.hamburguer}>
                {click ? (<AiOutlineClose className={Styles.icon} />) : (<AiOutlineMenu className={Styles.icon} />)}
            </div>
            <div className={Styles.settings}>
            <Link href="http://localhost:3000/center-dash"></Link>

                <BsGear className={Styles.icon}/>
            </div>
        </div>
    </div>
  )
}