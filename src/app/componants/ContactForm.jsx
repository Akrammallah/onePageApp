"use client"
import Image from "next/image";
import img from '../../../public/images/map.jpg'
export default function ContactForm() {
  const handler = () => {
    alert("You information successfully submitted")
  }
  return (
    <div className="container m-auto  py-12 px-4 sm:p-6 lg:px-8 grid sm:grid-cols-2 grid-cols-1 sm:mt-40 mt-10 bg-[#6A8086]" id="contact">
      <div className="sm:max-w-3xl w-full sm:w-[50%] sm:mx-auto bg-transparent shadow-md shadow-green-950 rounded-lg p-4 mr-36  border-2 border-[#6A8086] ">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Me</h2>
        <form action="/api/contact" method="POST" className="space-y-6">
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#133446]">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your name"
            />
          </div>

          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#133446]">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>

          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#133446]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Write your message here"
            ></textarea>
          </div>

          
          <div>
            <button onClick={handler}
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="mt-12 ml-16 sm:ml-0">
        <Image src={img} alt="" width={500}/>
      </div>
    </div>
  );
}
