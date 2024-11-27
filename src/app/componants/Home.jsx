"use client"
import { ReactTyped } from "react-typed";
import Image from "next/image";
import img from "../../../public/images/home.jpg"
import Link from "next/link";

const Home = () => (
  <>
  <div className="container m-auto grid sm:grid-cols-2 grid-cols-1 mt-10" id="home">
  <div className="ml-6">
    
    <br />
<h1 className="sm:text-4xl text-[7vw] text-[#6A8086]">Hello I am a <span className="text-[#F96F3E]">
    <ReactTyped
    

      strings={[
        "Web developer",
        "Programmar",
        "Coder",
      ]}
      typeSpeed={40}
      backSpeed={50}
      loop={true}
    >
      
    </ReactTyped></span></h1>
    <p className="mt-6 text-[#133446] text-3xl sm:text-sm text-justify pr-6 sm:leading-8">A skilled web developer with expertise in crafting responsive and dynamic websites, dedicated to creating user-friendly designs and efficient code. Passionate about modern web technologies, always seeking innovative solutions to deliver high-quality digital experiences tailored to meet diverse client needs. Driven by a commitment to continuous learning and improvement.
</p>
<Link href={"#contact"}>
<button className="px-10 sm:px-6 py-4 sm:py-2 bg-[#133446] text-white rounded-md sm:mt-6 mt-8 sm:mb-0 mb-6" >Contact Me</button>

</Link>  </div>
  <div className="ml-24 sm:ml-24">
    <Image
    src={img} alt="" width={400}/>
    
  </div>
  
  </div>
  </>
);

export default Home;