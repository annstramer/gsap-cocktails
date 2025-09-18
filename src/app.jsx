import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar.jsx";

// register here to make these globally, across application
gsap.registerPlugin(ScrollTrigger, SplitText);


const App = () => {
    return (
        <main>
            <Navbar />
        </main>
    )
}
export default App
