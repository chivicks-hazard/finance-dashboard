import { BiSolidCreditCardFront } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { MdWindow } from "react-icons/md";
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
    
        default:
            break;
    }
}

export default Icon