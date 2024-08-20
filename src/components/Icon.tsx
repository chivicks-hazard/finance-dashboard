import { AiFillDollarCircle, AiOutlinePlus } from "react-icons/ai";
import { BiSolidCreditCardFront } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { FaCircle, FaRegEnvelope, FaSackDollar } from "react-icons/fa6";
import { GiCoffeeCup, GiWallet } from "react-icons/gi";
import { HiMiniCreditCard } from "react-icons/hi2";
import { IoBusiness, IoSettingsOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { MdFileCopy, MdWindow } from "react-icons/md";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { TbHeartRateMonitor } from "react-icons/tb";
import { VscBell } from "react-icons/vsc";

type IconProps = {
    icon: string,
    className?: string
}

const Icon: React.FC<IconProps> = ({icon, className}) => {
    switch (icon) {
        case "home":
            return <MdWindow className={className} />

        case "transactions":
            return <BiSolidCreditCardFront className={className} />

        case "wallet":
            return <GiWallet className={className} />

        case "analytics":
            return <TbHeartRateMonitor className={className} />

        case "personal":
            return <LuUser className={className} />

        case "message":
            return <FaRegEnvelope className={className} />

        case "settings":
            return <IoSettingsOutline className={className} />

        case "search":
            return <CiSearch className={className} />

        case "notification":
            return <VscBell className={className} />

        case "income":
            return <FaSackDollar className={className} />

        case "expense":	
            return <HiMiniCreditCard className={className} />

        case "savings":
            return <AiFillDollarCircle className={className} />

        case "add":
            return <AiOutlinePlus className={className} />

        case "circle":
            return <FaCircle className={className} />

        case "account":
            return <RiAccountPinBoxFill className={className} />

        case "software":
            return <MdFileCopy className={className} />

        case "rent":
            return <IoBusiness className={className} />

        case "food":
            return <GiCoffeeCup className={className} />
    
        default:
            break;
    }
}

export default Icon