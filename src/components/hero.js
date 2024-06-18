import { LiaLinkedin } from 'react-icons/lia';
import HeroImg from '../assets/hero.png';
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin,} from "react-icons/ai";
export default function Hero(){
    const naan = {
        maintitle:'im a fullStack devolper',
        social : {
            twitter:"",
            facebook:'',
            linkedin:'',
        }
    }
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center' id='hero'>
    <div className='md:w-1/2 flex-col'>
        <h1 className=' text-white text-6xl font-hero-font'>hi, <br/>hari sankar
        <p className='text-2xl'>{naan.maintitle}</p></h1>
        <div className='flex py-10'>
        <a href={naan.social.twitter} target='_blank' className='pr-5 hover:text-white'><AiOutlineTwitter size={40} /></a>
        <a href={naan.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={40} /></a>
        <a href={naan.social.linkedin} className=' hover:text-white'><AiOutlineLinkedin size={40} /></a>
    </div>
    </div>
  
        <img className='md:w-1/3' src={HeroImg} />
    </section>
}
