import { logo3, package as package_, luggage } from "../../assets/images";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const Footer = () => {
    const [email, setEmail] = useState<string>('');

    const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribing with:', email);
    // Add your logic here
    };
    return (
        <div className="relative flex flex-col justify-center items-center text-center w-full text-white  pt-10 bg-[#010413]">
            {/* icons */}
            <img src={package_} alt="Package" className="absolute w-[20vw] bottom-0 left-20 z-1" />
            <img src={luggage} alt="luggage" className="absolute w-[20vw] right-0 bottom-0 z-1"/>
            <div className="px-4 sm:px-8 flex flex-col gap-4  w-full sm:flex-row justify-between ">
                {/* First Column */}
                <div className="flex flex-col text-left sm:w-[45%] gap-4 justify-start items-start">
                    <img src={logo3} alt="logo2" className="w-30" />
                    <p>Connect with verified travelers, save on delivery, and earn from trips you’re already making.</p>
                    {/* Form */}
                    <div className="flex w-full items-center justify-center ">
                        <form 
                            onSubmit={handleSubscribe}
                            className="relative flex items-center w-full"
                        >
                            {/* Main Input Field */}
                            <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Email"
                            className="w-full px-8 py-2 text-gray-700 bg-white border-2 border-transparent rounded-full outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-300"
                            required
                            />

                            {/* Action Button */}
                            <button
                            type="submit"
                            className="absolute right-1.5 px-8 py-1 font-medium text-white transition-all bg-gradient-to-r from-[#335CF4] to-[#1E368E] rounded-full hover:opacity-90 active:scale-95 shadow-md"
                            >
                            Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                {/* Second Column */}
                <div className="flex flex-col text-left sm:w-fit gap-4 sm:items-start">
                    <h2 className="text-xl font-bold">Quick Links</h2>
                    <ul className="flex flex-col gap-1">
                        <li><a href="#perks" className="text-gray-300 hover:text-white transition-colors">Perks</a></li>
                        <li><a href="#how" className="text-gray-300 hover:text-white transition-colors">How it works</a></li>
                        <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">Faqs</a></li>
                        <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact us</a></li>
                    </ul>
                </div>
                {/* Third Column */}
                <div className="flex flex-col text-left sm:w-fit gap-4 justify-start sm:items-start">
                    <h2 className="text-xl font-bold">Follow Us</h2>
                    <div className="flex gap-2">
                        <a href="#" className="p-2 rounded-[50%] bg-white"><Icon icon="prime:twitter" width={20} className="text-primaryAlt"/></a>
                        <a href="#" className="p-2 rounded-[50%] bg-white"><Icon icon="mdi:linkedin" width={20} className="text-primaryAlt"/></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/senditt26" className="p-2 rounded-[50%] bg-white"><Icon icon="ri:instagram-fill" width={20} className="text-primaryAlt"/></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@senditt26" className="p-2 rounded-[50%] bg-white"><Icon icon="ic:baseline-tiktok" width={20} className="text-primaryAlt"/></a>
                    </div>
                </div>

            </div>
            <h1 className="!text-[22vw] !font-bold">Send<span className="!font-light">ittt</span>.</h1>
        </div>
    )
}

export default Footer;