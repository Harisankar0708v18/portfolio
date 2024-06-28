import AboutImg from '../assets/about.png';
export default function About(){
    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='md:w-1/2 py-5'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>

            <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl text-white border-b-4 border-[#343148] mb-5 w-[170px] font-bold text-first'>about me</h1>
            <p className='text-first '>Hello! I'm Hari Sankar, a dedicated self-taught web developer with a strong passion for creating dynamic and responsive websites. My journey into web development started with a deep curiosity and a desire to build, leading me to acquire a robust foundation in HTML, CSS, and JavaScript exclusively through mobile learning.</p> <p className='text-second'>   . </p>
            <p className='pb-5 text-first'>Over time, I've expanded my toolkit to include modern technologies and frameworks such as Bootstrap, Tailwind CSS, React.js, Node.js, and proficiency in Git and GitHub. These tools have enabled me to create more sophisticated and visually appealing web applications.</p>
            <p className='text-first pb-10 md:pb-0'>I am enthusiastic about the opportunity to apply my skills in a professional setting where I can contribute to impactful projects, learn from experienced developers, and continuously improve my abilities. I am actively seeking roles that offer a dynamic work environment and the chance to grow as a developer.</p>
            </div>
           
        </div>
    </section>
}