import { useState } from "react";
import { motion } from "framer-motion";
import { postPackage, getMatched, chooseCarrier, trackPackage } from "../../assets/images"
import { Button } from "../../components/Button"
import BuiltForTrust from "./BuildForTrust"
import CustomModal from "../../components/CustomModal";

const HowItWorks = () => {  
    const [isModalOpen, setIsModalOpen] = useState(false); 
    
    return (
        <div className="bg-customYellow w-full rounded-t-[50px] flex flex-col items-center justify-center mt-8 pt-16">
            <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
            
            <div className="flex justify-center items-center">
                <h1 className="mb-[-100vh] text-customBrown !text-[50px] sm:!text-[80px] lg:!text-[180px]">HOW IT WORKS</h1>
            </div>

            {/* Container for staggered children */}
            <div className="hidden sm:flex flex-col justify-center items-center gap-6 mt-8">
                <Card title="Post Your Package" description="Enter details, destination, and your price." icon={postPackage} index={1}/>
                <Card title="Get Matched or Receive Bids" description="Travelers going your way can accept or make an offer." icon={getMatched} index={2}/>
                <Card title="Choose Your Carrier" description="Pick the best option based on price, rating, or timing." icon={chooseCarrier} index={3}/>
                <Card title="Track & Receive" description="Follow your package in real time and confirm delivery." icon={trackPackage} index={4}/>
            </div>

            {/* Mobile Cards */}
            <div className=" flex sm:hidden flex-col justify-center items-center gap-6 mt-8">
                <MobileCard title="Post Your Package" description="Enter details, destination, and your price." icon={postPackage} index={1}/>
                <MobileCard title="Get Matched or Receive Bids" description="Travelers going your way can accept or make an offer." icon={getMatched} index={2}/>
                <MobileCard title="Choose Your Carrier" description="Pick the best option based on price, rating, or timing." icon={chooseCarrier} index={3}/>
                <MobileCard title="Track & Receive" description="Follow your package in real time and confirm delivery." icon={trackPackage} index={4}/>
            </div>

            <Button onClick={()=>setIsModalOpen(true)} title="Get Started for Free" className="!bg-customBrown !w-fit mt-8"/>
            
            {/* Built for Trust */}
            <div className="w-full mt-20">
                <BuiltForTrust/>
            </div>
        </div>
    )
}

const Card = ({title, description, icon, index}: {title: string, description: string, icon: string, index: number}) => {
    // Determine if it should come from left or right based on index
    const isEven = index % 2 === 0;
    const margins: Record<number, string> = {
        1: "-50vw",
        2: "-15vw",
        3: "15vw",
        4: "50vw"
    };
    return (
        
        <motion.div 
            // Entrance Animation
            initial={{ opacity: 0, x: isEven ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
                duration: 0.6, 
                delay: index > 1 ? index * 1.2 : 0, 
                ease: "easeOut" 
            }}
            // Stacking Effect
            className="sticky top-24 border-1 border-customYellow bg-customBrown text-white p-4 py-6 rounded-[30px] w-[270px]  flex flex-col gap-2 items-start text-left shadow-2xl"
            
            style={{ 
                // Slight scale down for cards further down the stack
                marginTop: index > 1 ? `-${4 * 85}px` : "0px",
                marginLeft: margins[index] || "0px",
                rotate: index === 4 || index === 1 ? `0deg` : "5deg",
                zIndex: index 
            }}
        >
            <h2 className="p-1 px-3 rounded-[50%] bg-customYellow text-customBrown font-bold">{index}</h2>
            <div className="w-full flex justify-center">
                <img src={icon} alt={title} className="w-40"/>
            </div>
            <div>
                <h2 className="font-bold text-lg">{title}</h2>
                <p className="!font-extralight opacity-90">{description}</p>
            </div>
        </motion.div>
    )
}

const MobileCard = ({title, description, icon, index}: {title: string, description: string, icon: string, index: number}) => {
    // Determine if it should come from left or right based on index
    const isEven = index % 2 === 0;

    return (
        
        <motion.div 
            // Entrance Animation
            initial={{ opacity: 0, x: isEven ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
                duration: 0.6, 
                delay: index > 1 ? index * 1.2 : 0, 
                ease: "easeOut" 
            }}
            // Stacking Effect
            className="sticky top-24 border-1 border-customYellow bg-customBrown text-white p-4 py-6 rounded-[30px] w-[270px]  flex flex-col gap-2 items-start text-left shadow-2xl"
            
            style={{ 
                // Slight scale down for cards further down the stack
                marginTop: index > 1 ? `-${4 * 55}px` : "0px",
                zIndex: index 
            }}
        >
            <h2 className="p-1 px-3 rounded-[50%] bg-customYellow text-customBrown font-bold">{index}</h2>
            <div className="w-full flex justify-center">
                <img src={icon} alt={title} className="w-40"/>
            </div>
            <div>
                <h2 className="font-bold text-lg">{title}</h2>
                <p className="!font-extralight opacity-90">{description}</p>
            </div>
        </motion.div>
    )
}

export default HowItWorks;