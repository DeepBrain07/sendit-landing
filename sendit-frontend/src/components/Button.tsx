import { Icon } from "@iconify/react";

type ButtonProps = {
    title: string;
    disabled?: boolean;
    className?: string;
    icon?: string;
    onClick?: () => void; 
};

export const Button = ({ title, disabled, className, icon, onClick }: ButtonProps) => {
    return (
        <button
            onClick={onClick} 
            disabled={disabled}
            className={` whitespace-nowrap rounded-full w-full text-center h-fit cursor-pointer border-[0.5px] bg-primary text-white ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:ring-2 hover:ring-primary/30  hover:text-white'} border-primary/10 flex justify-center items-center gap-2 ${className} p-4`}
        >
            {icon && <Icon icon={icon} width={20} className="cursor-pointer" />}
            <p className="!font-normal !tracking-wider sm:block ">{title}</p>
        </button>
    );
};
