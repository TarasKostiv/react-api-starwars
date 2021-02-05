import RandomPlanet from "../random-planet/";
import RandomStarship from '../random-straship'
import RandomPerson from "../random-person";

import People from "../people";

import Navbar from "../navbar";
import Footer from "../footer";
import "./app.css"

const App = () => {
    return(
        <div className="wrapper">
            <Navbar />
            <div className="random-blocks">
                <RandomPerson />
                <RandomPlanet/>
                <RandomStarship />
            </div>
            {/*<People />*/}
            <Footer />
        </div>
    )
}

export default App;