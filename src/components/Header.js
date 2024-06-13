export default function Header(){
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
    <button></button>
</header>
}