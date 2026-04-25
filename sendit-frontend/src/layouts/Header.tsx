import { Icon } from "@iconify/react/dist/iconify.js";
import { logo2, logo3 } from "../assets/images";
import { Button } from "../components/Button";
import { useState } from "react";
import CustomModal from "../components/CustomModal";

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuClick = () => {
        // Logic to open the mobile menu goes here
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <div className="w-full flex gap-2 bg-primary z-100 justify-between items-center p-2 pt-6 sm:p-4 md:px-8">
            {/* Modal */}
            <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
            <img onClick={() => window.location.reload()} src={logo3} alt="sendit" className="w-24 md:w-42"/>
            <div className="hidden p-2 px-4 pr-2 sm:flex items-center justify-between gap-2 md:gap-4 rounded-full bg-white text-primary">
                <a href="#perks" className="cursor-pointer hover:text-primaryAlt">Perks</a>
                <a href="#how" className="cursor-pointer hover:text-primaryAlt whitespace-nowrap">How it works</a>
                <a href="#faq" className="cursor-pointer hover:text-primaryAlt">Faq</a>
                <Button onClick={() => setIsModalOpen(true)} title="Become a Carrier" className="!text-primaryAlt hover:text-primary bg-white !w-fit !px-2 !py-2 hover:bg-[#F0F3FE]"/>
                <Button onClick={()=>setIsModalOpen(true)} title="Post a package" className="bg-gradient-to-r from-[#335CF4] to-[#1E368E] !w-fit !px-2 !py-2"/>
                
            </div>
            <div onClick={handleMenuClick} className="cursor-pointer sm:hidden rounded-full p-4 py-2 bg-primaryAlt">
              <Icon icon="tabler:menu" width={24} className="cursor-pointer text-white" />     
            </div>
                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="sm:hidden pb-12 rounded-b-xl  absolute top-0 left-0 w-full bg-white text-black flex flex-col items-start p-4 gap-4 py-4">
                        {/* header */}
                        <div className="mb-4 flex justify-between w-full">
                            <img src={logo2} alt="sendit" className="w-24 md:w-42"/>
                            <div onClick={handleMenuClick} className="cursor-pointer sm:hidden rounded-full p-4 py-2 bg-primaryAlt">
                                <Icon icon="tabler:x" width={24} className="cursor-pointer text-white" />
                            </div>
                        </div>
                        <a href="#perks" onClick={() => setIsMenuOpen(false)} className="cursor-pointer hover:text-primaryAlt !text-lg">Perks</a>
                        <a href="#how" onClick={() => setIsMenuOpen(false)} className="cursor-pointer hover:text-primaryAlt !text-lg">How it works</a>
                        <a href="#faq" onClick={() => setIsMenuOpen(false)} className="cursor-pointer hover:text-primaryAlt !text-lg">Faq</a>
                        <Button onClick={() => setIsModalOpen(true)} title="Become a Carrier" className="!bg-[#F0F3FE] !text-primaryAlt !border-0  !py-2"/>
                        <Button onClick={() => setIsModalOpen(true)} title="Post a package" className="bg-gradient-to-r from-[#335CF4] to-[#1E368E]  !py-2"/>
                    </div>
                )}

        </div>
    )
}

export default Header;