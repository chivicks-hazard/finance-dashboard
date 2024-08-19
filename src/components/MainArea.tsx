import Header from "./Header"
import InfoSection from "./InfoSection"

const MainArea = () => {
    return (
        <main>
            <div className="absolute top-0 right-0 w-10/12 bg-bgmain scroll-auto">
                <Header />
                <InfoSection />
            </div>
        </main>
    )
}

export default MainArea