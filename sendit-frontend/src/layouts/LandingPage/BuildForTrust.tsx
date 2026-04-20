import { useState } from "react";
import { builtForTrust, ratings, escrowProtection, verifiedIdentities, insurance } from "../../assets/images"
import { Button } from "../../components/Button"
import CustomModal from "../../components/CustomModal";

const BuiltForTrust = () => {  
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className=" bg-customOrange w-full rounded-t-[50px] flex flex-col items-center justify-center p-4 sm:p-8 !py-16 sm:!px-[5vw]">
            <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
            <div className=" flex flex-col sm:flex-row w-full justify-between items-start text-left gap-4">
                {/* Cards */}
                <div className="sm:w-[45%]  flex flex-col justify-start">
                    <h1 className="mb-8 text-customBrown !font-extrabold">Built for trust, from the ground up.</h1>
                    {/* Image */}
                    <div className="sm:hidden gap-8 mb-10 flex flex-col justify-end">
                        <h2 className=" text-white !text-lg">Sending with a stranger shouldn’t feel risky. That’s why SendIt is designed to protect you at every step.</h2>
                        <img src={builtForTrust} alt="Built for Trust" className="w-full max-w-[450px]"/>
                    </div>
                    <Card icon={escrowProtection} title="Escrow Protection" description="Your payment is held securely and only released after delivery is confirmed."/>
                    <Card icon={verifiedIdentities} title="Verified Identities" description="Carriers go through ID and profile verification."/>
                    <Card icon={ratings} title="Ratings & Reviews" description="Choose based on real experiences from other users."/>
                    <Card icon={insurance} title="Insurance Option" description="Extra protection for valuable packages."/>
                    
                    <Button onClick={()=>setIsModalOpen(true)} title="Start Enjoying Safe Delivery" className="!bg-customBrown !w-fit mt-8"/>

                </div>
                {/* Image */}
                <div className="hidden gap-16 w-[45%] sm:flex flex-col justify-end">
                    <h2 className=" text-white !text-lg">Sending with a stranger shouldn’t feel risky. That’s why SendIt is designed to protect you at every step.</h2>
                    <img src={builtForTrust} alt="Built for Trust" className="w-full max-w-[450px]"/>
                </div>

            </div>
        </div>
    )
}

const Card = ({title, description, icon}: {title: string, description: string, icon: string}) => {
    return (
        <div className=" text-white p-4 pb-0  rounded-lg w-full sm:max-w-[350px] flex flex-col  items-start text-left">
            
            <img src={icon} alt={title} className="w-12"/>
            
            <h2 className="">{title}</h2>
            <p className=" !font-extralight">{description}</p>
            
        </div>
    )
}

export default BuiltForTrust;