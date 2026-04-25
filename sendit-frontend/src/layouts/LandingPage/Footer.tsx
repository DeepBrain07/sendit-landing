import { logo3, package as package_, luggage } from "../../assets/images";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import api from "../../api/axios.ts"; 

const Footer = () => {
    const [email, setEmail] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatusMessage(null);

        try {
            // Using your axios instance - path relative to your api/v1 prefix
            const response = await api.post('/landing/subscribe/', { email });

            if (response.status === 201 || response.status === 200) {
                setStatusMessage({ 
                    type: 'success', 
                    text: response.data.message || "You're in! 🚀 Check your inbox soon." 
                });
                setEmail(''); // Clear input on success
            }
        } catch (error: any) {
            // Check for specific DRF error messages
            const errorMsg = error.response?.data?.email?.[0] || 
                             error.response?.data?.message || 
                             "Something went wrong. Try again!";
            
            setStatusMessage({ type: 'error', text: errorMsg });
        } finally {
            setLoading(false);
            // Auto-hide the message after 5 seconds
            setTimeout(() => setStatusMessage(null), 5000);
        }
    };

    return (
        <div className="relative flex flex-col justify-center items-center text-center w-full text-white pt-10 bg-[#010413]">
            {/* icons */}
            <img src={package_} alt="Package" className="absolute w-[20vw] bottom-0 left-[5vw] z-1" />
            <img src={luggage} alt="luggage" className="absolute w-[20vw] right-0 bottom-0 z-1"/>
            
            <div className="px-4 sm:px-8 flex flex-col gap-4 w-full sm:flex-row justify-between ">
                {/* First Column */}
                <div className="flex flex-col text-left sm:w-[45%] gap-4 justify-start items-start">
                    <img onClick={() => window.location.reload()} src={logo3} alt="logo2" className="w-30 cursor-pointer" />
                    <p>Connect with verified travelers, save on delivery, and earn from trips you’re already making.</p>
                    
                    {/* Form Section */}
                    <div className="flex flex-col w-full items-start justify-center gap-3">
                        <form 
                            onSubmit={handleSubscribe}
                            className="relative flex items-center w-full"
                        >
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter Email"
                                disabled={loading}
                                className="w-full px-8 py-2 text-gray-700 bg-white border-2 border-transparent rounded-full outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-300 disabled:bg-gray-100"
                                required
                            />

                            <button
                                type="submit"
                                disabled={loading}
                                className="absolute right-1.5 px-8 py-1 font-medium text-white transition-all bg-gradient-to-r from-[#335CF4] to-[#1E368E] rounded-full hover:opacity-90 active:scale-95 shadow-md disabled:grayscale disabled:cursor-not-allowed flex items-center justify-center min-w-[120px]"
                            >
                                {loading ? (
                                    <Icon icon="line-md:loading-twotone-loop" className="text-xl" />
                                ) : (
                                    'Subscribe'
                                )}
                            </button>
                        </form>

                        {/* Status Feedback */}
                        {statusMessage && (
                            <div className={`flex items-center gap-2 px-4 py-1 rounded-lg transition-all animate-in fade-in slide-in-from-top-2 duration-300 ${
                                statusMessage.type === 'success' ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'
                            }`}>
                                <Icon icon={statusMessage.type === 'success' ? "circle-flags:check" : "material-symbols:error-outline"} />
                                <span className="text-sm font-medium">{statusMessage.text}</span>
                            </div>
                        )}
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
                        <a href="#" className="p-2 rounded-[50%] bg-white hover:scale-110 transition-transform"><Icon icon="prime:twitter" width={20} className="text-primaryAlt"/></a>
                        <a href="#" className="p-2 rounded-[50%] bg-white hover:scale-110 transition-transform"><Icon icon="mdi:linkedin" width={20} className="text-primaryAlt"/></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/senditt26" className="p-2 rounded-[50%] bg-white hover:scale-110 transition-transform"><Icon icon="ri:instagram-fill" width={20} className="text-primaryAlt"/></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@senditt26" className="p-2 rounded-[50%] bg-white hover:scale-110 transition-transform"><Icon icon="ic:baseline-tiktok" width={20} className="text-primaryAlt"/></a>
                    </div>
                </div>
            </div>
            <h1 className="!text-[25vw] !font-bold select-none leading-none mt-10">Send<span className="!font-light">ittt</span>.</h1>
        </div>
    );
};

export default Footer;