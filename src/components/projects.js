import WebsiteImg1 from '../assets/ecommerce-websites.jpg';
import WebsiteImg2 from '../assets/food-ecommerce.jpg';
import WebsiteImg3 from '../assets/website-blog.jpg';
export default function Project(){
    return <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white" id='projects'>
        <div className="w-full ">
        <div className="flex flex-col px-10 py-6">
        <h1 className='text-4xl text-white border-b-4 border-[#2b2d77] mb-5 w-[150px] font-bold'> PROJECTS</h1>
        <p>these are some project that i have created with diffrent languages</p>
        </div>
          
        </div>
        <div className="w-full">
        <div className='flex flex-col md:flex-row px-10 gap-5'>
            <div className='relative'>
            <img className='h-[200px] w-[500px] ' src={WebsiteImg1}/>
            <div className='project-desc'>
                <p className='text-center px-5 py-5'>fshssfhsoufhsfyudgffgdfgfgyf fygfsygf</p>
            </div>
            </div>
            <div className='relative'>
            <img className='h-[200px] w-[500px]' src={WebsiteImg2}/>
            <div className='project-desc'>
                <p className='text-center px-5 py-5'>fshssfhsfefyfyfy feduhfoufhsf</p>
            </div>
            </div>
            <div className='relative'>
            <img className='h-[200px] w-[500px]' src={WebsiteImg3}/>
            <div className='project-desc'>
                <p className='text-center px-5 py-5'>fshssfhsvdfiudfdyfd  dfydfyoufhsf</p>
            </div>
            </div>
        </div>
            
        </div>
   
    
  
      
    </section>
}