import { sender, carrier } from "../../assets/images";
import { Button } from "../../components/Button";
import ComparisonTable from "./ComparisonTable";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import CustomModal from "../../components/CustomModal";

const Section4 = () => {
    const [selection, setSelection] = useState<"Sender" | "Carrier">("Sender");
    const phoneNumber = "2348156275730"; // Replace with your phone number (include country code, no + or -)
    const message = "Hey there! I just saw your website and would love to chat about starting a project together.";

    const handleWhatsAppRedirect = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    };
    const questionsAndAnswers = [
        {
            question: "Is SendIt safe?",
            answer: "Yes. Payments are held in escrow, users are verified, and every delivery is tracked."
        },
        {
            question: "Who are the carriers?",
            answer: "Everyday travelers already heading to your destination — verified before they can deliver."
        },
        {
            question: "What if something goes wrong?",
            answer: "Your payment is protected, and support is available. You can also insure valuable items."
        },
        {
            question: "Can I choose my price?",
            answer: "Yes. You can set your price or accept bids from carriers."
        },
        {
            question: "Where is SendIt available?",
            answer: "We’re starting with major routes and expanding quickly."
        },
    ];

    const [selectedQuestion, setSelectedQuestion] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className="flex flex-col justify-center items-center text-center w-full text-black px-4 sm:px-8 py-16  bg-[#F8F9FA]">
            <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
            <h2 className="!font-extrabold text-center">Why people are switching to SendIt</h2>            
            <div className="w-full mt-14">
                <ComparisonTable/>
            </div>
            <div className="w-full mt-8 flex justify-center">
                <Button onClick={()=>{setIsModalOpen(true)}}  title="Send your package now" className="bg-gradient-to-r from-[#335CF4] to-[#1E368E] !w-fit !py-2"/>
            </div>

            {/* Next section */}
            <div className="mt-16 flex items-center flex-col gap-8">
                <h2 className="!font-extrabold text-center">Built for how people already send and travel.</h2>      
                {/* Selection */}
                <div className="p-1 rounded-full flex flex-nowrap gap-4 w-fit border-1 border-black">
                    <div onClickCapture={() => setSelection("Sender")} className={`rounded-full cursor-pointer w-fit p-1 px-4 ${selection === "Sender" ? "bg-black text-white" : " text-black"}`}>
                        <p>Sender</p>
                    </div>
                    <div onClickCapture={() => setSelection("Carrier")} className={`rounded-full cursor-pointer w-fit p-1 px-4 ${selection === "Carrier" ? "bg-black text-white" : " text-black"}`}>
                        <p>Carrier</p>
                    </div>
                </div>
                {/* Content */}
                {selection === "Sender" ? (
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center ">
                        <img src={sender} alt="Sender" className="sm:w-[45%]"/>
                        <div className="flex flex-col mt-8 items-start text-left">
                            <h2 className="!tracking-tight">People already send packages through travelers every day.</h2>
                            <h2 className="mt-2 !font-bold !tracking-normal">For senders, it’s:</h2>
                            <div className="flex mt-1 items-center gap-2">
                                <div className=' rounded-[50%] bg-primary'>
                                    <Icon icon='material-symbols-light:check-rounded' color='white' width={18} />
                                </div>
                                <p>Safer</p>
                            </div>
                            <div className="flex mt-1 items-center gap-2">
                                <div className=' rounded-[50%] bg-primary'>
                                    <Icon icon='material-symbols-light:check-rounded' color='white' width={18} />
                                </div>
                                <p>Faster</p>
                            </div>
                            <div className="flex mt-1 items-center gap-2">
                                <div className=' rounded-[50%] bg-primary'>
                                    <Icon icon='material-symbols-light:check-rounded' color='white' width={18} />
                                </div>
                                <p>More reliable</p>
                            </div>
                            <Button  onClick={()=>{setIsModalOpen(true)}} title="Start sending smarter" className="mt-4 bg-gradient-to-r from-[#335CF4] to-[#1E368E] !w-fit !py-2"/>

                        </div>

                    </div>
                ) : (
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center sm:items-center ">
                        <img src={carrier} alt="Carrier" className="sm:w-[45%]"/>
                        <div className="pl-2 flex flex-col  items-start text-left">
                            <h2 className="!tracking-tight">People already travel with extra space.</h2>
                            <h2 className="mt-2 !font-bold !tracking-normal">For carriers, it’s:</h2>
                            <div className="flex mt-1 items-center gap-2">
                                <div className=' rounded-[50%] bg-primary'>
                                    <Icon icon='material-symbols-light:check-rounded' color='white' width={18} />
                                </div>
                                <p>Earn from trips you’re already making</p>
                            </div>
                            <div className="flex mt-1 items-center gap-2">
                                <div className=' rounded-[50%] bg-primary'>
                                    <Icon icon='material-symbols-light:check-rounded' color='white' width={18} />
                                </div>
                                <p>No detours, no stress</p>
                            </div>
                            <div className="flex mt-1 items-center gap-2">
                                <div className=' rounded-[50%] bg-primary'>
                                    <Icon icon='material-symbols-light:check-rounded' color='white' width={18} />
                                </div>
                                <p>Get paid securely, every time</p>
                            </div>
                            <Button onClick={()=>{setIsModalOpen(true)}} title="Start earning on your trips" className="mt-4 bg-gradient-to-r from-[#335CF4] to-[#1E368E] !w-fit !py-2"/>

                        </div>

                    </div>
                )}

                {/* faq */}
                <div id="faq" className="mt-16 flex flex-col sm:flex-row gap-8 w-full justify-between">
                    <div id="contact" className="flex flex-col gap-8 text-left items-center sm:items-start">
                        <h2 className="!font-extrabold ">Got questions?</h2>
                        <Button title="Contact Us" onClick={handleWhatsAppRedirect} className="hidden sm:block bg-gradient-to-r from-[#335CF4] to-[#1E368E] !w-fit !px-6 !py-2"/>                        
                    </div>

                    {/* q and a */}
                    <div className="flex w-full sm:w-[60%] flex-col gap-4 ">
                        {questionsAndAnswers.map((item, index) => (
                            <div onClick={() => {if (selectedQuestion !== index+1) setSelectedQuestion(index+1); else setSelectedQuestion(0)}} className=" w-full cursor-pointer flex flex-col gap-2 ">
                                <div className="w-full  bg-primaryAlt rounded-xl p-4 flex items-center justify-between">
                                    <p className={` !text-white font-medium ${selectedQuestion === index+1 ? "" : ""}`}>{item.question}</p>
                                    <Icon icon={selectedQuestion === index+1 ? "ph:caret-up" : "ph:caret-down"} width={18} color="white" />
                                </div>
                                {selectedQuestion === index+1 && (
                                    <div className="rounded-xl text-left bg-primary p-4">
                                        <p className="text-white">{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}

                    </div>
                    <div className="flex justify-center">
                        <Button title="Contact Us" onClick={handleWhatsAppRedirect} className="sm:hidden bg-gradient-to-r from-[#335CF4] to-[#1E368E] !w-fit !px-6 !py-2"/>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4;