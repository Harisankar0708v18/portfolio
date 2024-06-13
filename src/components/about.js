import AboutImg from '../assets/about.png';
export default function About(){
    return <section className='flex bg-primary px-5'>
        <div className='w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='w-1/2 flex justify-center'>

            <div className='flex flex-col justify-center'>
            <h1>about me</h1>
            <p></p>
            </div>
           
        </div>
    </section>
}