import AboutImg from '../assets/about.png';
export default function About(){
    return <section className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className='md:w-1/2 py-5'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>

            <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl text-white border-b-4 border-[#5551E3] mb-5 w-[170px] font-bold'>about me</h1>
            <p>hi, my name is hari sankar im a full stack devoleper</p>
            <p className='pb-5'>hi, my name is hari sankar im a full stack devoleper</p>
            <p>hi, my name is hari sankar im a full stack devoleper</p>
            </div>
           
        </div>
    </section>
}