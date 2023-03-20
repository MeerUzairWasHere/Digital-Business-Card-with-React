import react from "react"

import Header from "./components/Header"
import About from "./components/About"
import Intrestes from "./components/Intrestes"
import Footer from "./components/Footer"

export default function App() {
    return (
        <>
            <div className="app">
                <Header />
                <main>

                    <About />
                    <Intrestes />

                </main>
                <Footer />
            </div>
        </>
    )
}