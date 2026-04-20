import { plane, cloudLarge, cloudSmall, star } from "../../assets/images";
import { Button } from "../../components/Button";
import CustomModal from "../../components/CustomModal";
import { useState } from "react";

const Section5 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);  
    
    return (
        <div className="relative overflow-hidden flex flex-col justify-center items-center text-center w-full text-white px-4 sm:px-8 py-16 pt-10 bg-primaryAlt">
            <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
            <img src={cloudSmall} alt="cloud" className="absolute top-[4vw] left-[10vw] w-30 z-1"/>
            <img src={cloudSmall} alt="cloud" className="absolute bottom-[10vh] sm:bottom-[15vw] w-30 right-[5vw]  z-1"/>
            <img src={star} alt="cloud" className="absolute top-[5vw] right-[15vw]  z-1"/>
            <img src={cloudLarge} alt="cloud" className="absolute bottom-[0vh] left-0 w-full  object-cover z-1"/>
            <div className="p-4  z-2 sm:p-8 sm:px-20 flex flex-col gap-3 justify-center items-center text-center w-full">
                <img src={plane} alt="plane" className="w-26 mb-[-35px] z-2 ml-20 sm:ml-70"/>
                <h2 className="sm:w-[80%]">Start sending smarter today.</h2>
                <p>Connect with verified travelers, save on delivery, and earn from trips you’re already making.</p>
                
                {/*Buttons  */}
                <div className="z-2 flex gap-4 mt-4 flex-col sm:flex-row w-full sm:w-fit">
                    <Button onClick={()=>{setIsModalOpen(true)}} title="Start Sending Package" className=" bg-gradient-to-r from-[#335CF4] to-[#1E368E] !sm:w-fit  !py-3"/>
                    <Button onClick={()=>{setIsModalOpen(true)}} title="Earn While You Travel" className="!bg-[#F0F3FE] !text-primaryAlt whitespace-nowrap !sm:w-fit !border-0 !py-3"/>
                </div>
            </div>
            <div className="absolute border-[14vh] sm:border-[12vw] w-fit rounded-[50%] border-primary">
                <div className="  z-[1]  rounded-[50%] w-[75vh] h-[75vh] sm:w-[85vw] sm:h-[85vw]  bg-[#103db9] border-[8vh] sm:border-[7vw]  border-primaryAlt "/>
            </div>
        </div>
    )
}

export default Section5;