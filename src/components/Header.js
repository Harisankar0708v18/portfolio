import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
export default function Header(){
    const [toggleMenu,setToggleMenu] =useState(false);
    return <header className="flex justify-between px-5 py-3 bg-primary"> 
        <a className="font-bold text-black" href="#">Hari sankar</a>
    <nav className="hidden md:block">
        <ol className="flex text-white">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Project</a></li>
            <li><a href="#">Contact</a></li>
         </ol>
    </nav>
    {toggleMenu && <nav className="block md:hidden">
        <ol className="flex flex-col text-white mobile-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Project</a></li>
            <li><a href="#">Contact</a></li>
         </ol>
    </nav>}
    <button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden">
                <Bars3Icon className="text-white h-5" />
            </button>
</header>}