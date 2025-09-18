import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";

// register here to make these globally, across application
gsap.registerPlugin(ScrollTrigger, SplitText);


const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <div className="h-dvh bg-black" />
        </main>
    )
}
export default App
