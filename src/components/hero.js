import { LiaLinkedin } from 'react-icons/lia';
import HeroImg from '../assets/hero.png';
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin, AiOutlineInstagram,} from "react-icons/ai";
export default function Hero(){
    const naan = {
        maintitle:'im a fullStack developer',
        social : {
            twitter:"https://x.com/Hari20201949",
            instagram:'https://www.instagram.com/_peter_quill__18?igsh=MWxwY2N1M2xxY2N6NQ%3D%3D',
            linkedin:'https://www.linkedin.com/in/harisankar0708',
        }
    }
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center' id='hero'>
    <div className='md:w-1/2 flex-col'>
        <h1 className=' text-white text-6xl font-hero-font text-second'>hi, <br/>hari sankar
        <p className='text-2xl text-second' >{naan.maintitle}</p></h1>
        <div className='flex py-10'>
        <a href={naan.social.twitter} target='_blank' className='pr-5 text-second hover:text-white'><AiOutlineTwitter size={40} /></a>
        <a href={naan.social.instagram} target='_blank' className='pr-5 text-second hover:text-white'><AiOutlineInstagram size={40} /></a>
        <a href={naan.social.linkedin} target='_blank' className='text-second hover:text-white'><AiOutlineLinkedin size={40} /></a>
    </div>
    </div>
  
        <img className='md:w-1/3' src={HeroImg} />
    </section>
}
