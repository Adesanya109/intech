import Image from "next/image"


const Hero = () => {
  return (
    <div className="">
        <div className="flex flex-col"><p className="font-bold text-3xl my-5 font-mono ">insuretech ...</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna libero, 
        dapibus in mauris sed, tristique pretium leo. Aliquam justo risus, finibus nec ligula et, 
        vulputate ornare nibh. Pellentesque consequat mollis laoreet</p>
        </div>
        {/* <div>
            <Image src="/insure.jpg" width={500} height={500} alt="Picture of a man in a car"/>
        </div> */}
    </div>
  )
}

export default Hero