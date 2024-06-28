import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
export default function Header(){
    const [toggleMenu,setToggleMenu] =useState(false);
    return <header className="flex justify-between px-5 py-3 bg-primary"> 
        <a className="font-bold text-black text-second" href="#">Hari sankar</a>
    <nav className="hidden md:block">
        <ol className="flex text-white">
            <li><a href="/" className='text-second'>Home</a></li>
            <li><a href="#about" className='text-second'>About</a></li>
            <li><a href="#projects" className='text-second'>Project</a></li> 
            <li><a href="#resume" className='text-second'>resume</a></li>
            <li><a href="#contact" className='text-second'>Contact</a></li>
         </ol>
    </nav>
    {toggleMenu && <nav className="block md:hidden">
        <ol onClick={()=> setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav">
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Project</a></li>
            <li><a href="#resume">resume</a></li>
            <li><a href="#contact">Contact</a></li>
         </ol>
    </nav>}
    <button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden">
                <Bars3Icon className="text-white h-5" />
            </button>
</header>}