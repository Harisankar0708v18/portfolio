import WebsiteImg1 from '../assets/ecommerce-websites.jpg';
import WebsiteImg2 from '../assets/food-ecommerce.jpg';
import WebsiteImg3 from '../assets/website-blog.jpg';
export default function Project(){
          const config ={
         projects : [
            {
                image: WebsiteImg1,
                desc: 'fshssfhsoufhsfyudgffgdfgfgyf fygfsygf',
                link:''
            },
            {
                image: WebsiteImg2,
                desc: 'fshssfhsoufhsfyudgffgdfgfgyf fygfsygf',
                link:''
            },
            {
                image: WebsiteImg3,
                desc: 'fshssfhsoufhsfyudgffgdfgfgyf fygfsygf',
                link:''
            },
           ]
        }

    return <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white" id='projects'>
        <div className="w-full ">
        <div className="flex flex-col px-10 py-6">
        <h1 className='text-4xl text-white border-b-4 border-[#2b2d77] mb-5 w-[150px] font-bold'> PROJECTS</h1>
        <p>these are some project that i have created with diffrent languages</p>
        </div>
          
        </div>
        <div className="w-full">
        <div className='flex flex-col md:flex-row px-10 gap-5'>
            {config.projects.map((projects) =>(
                <div className='relative'>
                <img className='h-[200px] w-[500px] ' src={projects.image}/>
                <div className='project-desc'>
                    <p className='text-center px-5 py-5'>{projects.desc}</p>
                    <div className='flex justify-center'>
                        <a className='btn ' target='_blank' href={projects.link}>view projects</a>

                    </div>
                </div>
                  
                </div>

            ))}
            
           
       
        </div>
            
        </div>
   
    
  
      
    </section>
}