import Header from "./Header"
import InfoSection from "./InfoSection"

const MainArea = () => {
    return (
        <main>
            <div className="fixed top-0 right-0 w-10/12 bg-bgmain">
                <Header />
                <InfoSection />
            </div>
        </main>
    )
}

export default MainArea