import Instagram from '../assets/instagram.svg'
import Github from '../assets/github.svg'
import Linkedin from '../assets/linkedin.svg'
import Youtube from '../assets/youtube.svg'

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
        <div className="flex flex-col justify-between items-center gap-2">
          <div className="flex gap-3 text--500">
            <img className="w-6 h-6" src={Instagram} />
            <img className="w-6 h-6" src={Github} />
            <img className="w-6 h-6" src={Youtube} />
            <img className="w-6 h-6" src={Linkedin} />
          </div>
          <div className=" "> 
            <p className="mt-4 text-gray-500 font-medium text-sm">  Keycard Tecnologies Pvt. Ltd. All Rights reserved. </p>
            <p className="flex items-center text-gray-500 font-medium text-sm gap-2">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-4">
               <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
               </svg> Developed by Vikash Joshi for the Community. </p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Footer