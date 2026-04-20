
import Header from "../Header";
import { bgLogo } from "../../assets/images";
import { Button } from "../../components/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Footer from "./Footer";
import CustomModal from "../../components/CustomModal";
import { useState } from "react";

const LandingPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="bg-primary overflow-hidden  flex flex-col">
            <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
            {/* Hero */}
            <img src={bgLogo} alt="bgLogo" className="z-0 absolute   sm:top-0 h-[80vh] sm:w-[100vh] right-0 sm:h-fit  !overflow-hidden bottom-[-30px]"/>
            <div className="!overflow-hidden relative ">
        
                
                
                {/* Content */}
                <div className=" mt-20 sm:mt-40   p-4 sm:p-8 py-12 text-center  sm:text-left text-white">
                    <div className="sm:w-[60%]">
                        <h1>
                            Send packages faster with travelers already going your way
                        </h1>
                        <p className="mt-4">Connect with verified travelers, agree on a price, and deliver your package the same day.</p>
                        
                    </div>
                     {/*Buttons  */}
                    <div className="flex gap-4 mt-4 flex-col sm:flex-row sm:w-fit">
                        <Button onClick={() => setIsModalOpen(true)} title="Post a package" className="bg-gradient-to-r from-[#335CF4] to-[#1E368E] !sm:w-fit  !py-2"/>
                        <Button onClick={() => setIsModalOpen(true)} title="Earn money as a Carrier" className="!bg-[#F0F3FE] !text-primaryAlt whitespace-nowrap !sm:w-fit !border-0 !py-2"/>
                    </div>
                    {/* Features */}
                    <div className="mt-4 gap-4 whitespace-nowrap flex-wrap text-white flex justify-center sm:justify-start items-center">
                        <div className="flex justify-center items-center gap-1">
                            <Icon icon="tabler:shield-check" width={20} className="text-white" />
                            <p>Secure payments</p>
                        </div>
                        <div className="flex justify-center items-center gap-1">
                            <Icon icon="material-symbols:verified-outline" width={20} className="text-white" />
                            <p>Verified users</p>
                        </div>
                        <div className="w-fit flex justify-center items-center gap-1">
                            <Icon icon="lucide:route" width={20} className="text-white" />
                            <p>Real-time tracking</p>
                        </div>
                    </div>
                </div>
                
            </div>
            {/* Other sections */}
            <div className="z-2 mt-[15vw]">
                
                {/* Section 2 */}
                <div className="text-center  p-4 sm:p-8 sm:px-20 !py-16 bg-[#F5F4DF]">
                    <h2>Sending packages <span className="text-[#00000099]">shouldn’t be this stressful, yet it often is: expensive, slow, and filled with uncertainty, and when you turn to informal options, you’re left with no tracking, and no peace of mind.</span></h2>
                </div>
                {/* Section 3 */}
                <Section3/>
                {/* Section 4 */}
                <Section4/>
                {/* Section 5 */}
                <Section5/>
                {/* Header */}
                <div className="z-100 w-full fixed top-0">
                    <Header/>
                </div>
                {/* Footer */}
                <Footer/>
            </div>
            
        </div>
    )
}

export default LandingPage;