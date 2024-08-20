import Icon from "./Icon"
import image from "../assets/images/man-one.jpg"

const Header = () => {
    return (
        <header className="fixed top-0 right-0 w-10/12">
            <nav className="flex flex-row justify-between bg-bgmain p-5">
                <h1 className="text-2xl text-white">Dashboard</h1>

                <div className="flex flex-row items-center space-x-5">
                    <form method="get" className="inline">
                        <div className="flex flex-row justify-center rounded-xl bg-bgsec py-2 px-5">
                            <input className="bg-bgsec pr-20 focus:outline-none text-txtsec" type="search" name="search" id="search" placeholder="Search" />
                            <Icon icon="search" className="block text-2xl text-txtsec" />
                        </div>
                    </form>
                    <Icon icon="notification" className="block text-2xl text-txtsec" />

                    <img src={image} alt="Person" className="rounded-full w-10" />
                </div>
            </nav>
        </header>
    )
}

export default Header