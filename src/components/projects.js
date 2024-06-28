import WebsiteImg1 from '../assets/ecom.png';
import WebsiteImg2 from '../assets/notes app.png';
import WebsiteImg3 from '../assets/drum kit.png';
export default function Project(){
          const config ={
         projects : [
            {
                image: WebsiteImg1,
                desc: 'e commerce website using bootstrap',
                link:'https://hv18fashions.netlify.app',
                github:"https://github.com/Harisankar0708v18/EcomWebsiteHv18"
            },
            {
                image: WebsiteImg2,
                desc: 'online notes website using react js',
                link:'https://harisnotesapp.netlify.app',
                github:"https://github.com/Harisankar0708v18/notes"
            },
            {
                image: WebsiteImg3,
                desc: 'online drum kit website using react js',
                link:'https://haris-drum-kit.netlify.app',
                github:"https://github.com/Harisankar0708v18/drum"
            },
           ]
        }

    return <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white" id='projects'>


        <div className="w-full ">
        <div className="flex flex-col px-10 py-6">
        <h1 className='text-4xl text-white border-b-4 border-[#D7C49E] mb-5 w-[150px] font-bold text-second'> projects</h1>
        <p className='text-second'>These are some projects that I have created using different programming languages</p>
        </div>
          
        </div>
        <div className="w-full">
        <div className='flex flex-col md:flex-row px-10 gap-5'>
            {config.projects.map((projects) =>(
                <div className='relative'>
                <img className='h-[200px] w-[500px] flex flex-row py-5 ' src={projects.image} alt="Project Image" />

                <div className='project-desc '>
                    <p className='text-center px-5 py-5 text-first pb-4'>{projects.desc}</p>
                    <div className='flex justify-center'>
                        <a className='btn ' target='_blank' href={projects.link}>view projects</a>


                    </div>
                    <div className='flex justify-center mt-2'>
                        <a className='btn ' target='_blank' href={projects.github}>view github </a>
                        

                    </div>
                </div>
                  
                </div>

            ))}
            
           
       
        </div>
            
        </div>
   
    
  
      
    </section>
}