export default function Contact(){

     const config ={
        email:'harisankar0708v18@gmail.com',
        phone:'8072639707',

    }
    return <section className='flex flex-col  bg-primary px-5 py-32 text-white' id="contact">
       
        <div className=' flex flex-col items-center'>

            <h1 className='text-4xl  border-b-4 border-[#D7C49E] mb-5 w-[140px] font-bold text-second'>contact</h1>
            <p className="py2 text-second text-center">if you want to discuss more in detail,please contact me </p>
            <p className="py-2 text-second text-center"><span className="font-bold text-second">Email:</span>{config.email}</p>
            <p className="py-2 text-second text-center"><span className="font-bold text-second">phone:</span>{config.phone}</p>

        
           
        </div>
    </section>
}