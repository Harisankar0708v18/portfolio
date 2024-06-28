import ResumeImg from '../assets/resume.jpg';
export default function Resume(){
    const config ={
        link: ''
    }
    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='resume'>
        <div className='md:w-1/2 py-5 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={ResumeImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>

            <div className='flex flex-col py-10 justify-center text-white'>
            <h1 className='text-4xl text-first border-b-4 border-[#5551E3] mb-5 w-[140px] font-bold'>Resume</h1>
            <p className='text-first pb-3'>hi you can view my resume </p> <a className='btn text-white text-center' href={config.link}>Download</a> 
         </div>
           
        </div>
    </section>
}