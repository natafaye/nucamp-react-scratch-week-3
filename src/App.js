import { useEffect, useState } from "react"
import SpecialCard from "./SpecialCard"
import { Card, CardTitle } from "reactstrap"
import SearchForm from "./SearchForm"
import AddStateForm from "./AddStateForm"
import { STARTING_USA_STATES } from "./usstates"

export default function App() {

    // React please run this as soon as you get a chance
    useEffect(() => {
        console.log("I'm a side effect")
    }, []) // dependency array: anything that if it changes, this side effect should run again
    // empty dependency array will actually run TWICE in strict mode & dev mode
    // For syncing with external systems
    // Things that can't go in the rendering function (the component iteself),
    // and can't got in an event listener
    // Top 3 reason we use this:
    // 1) fetch from an API (or any async code)
    // 2) animations on load
    // 3) working with DOM manipulation based libraries (Bootstrap if we were doing it by hand) - need to use useRef

    console.log("Rendering")

    // CSS STYLING OPTIONS
    // option 1: UI library (reactstrap, or MUI, tailwind UI)
    //   downside - not very flexible
    // option 2: css module class names
    //  downside - it's too awesome
    // option 3: inline styling (not bad in React if you use components because no duplication)
    //   downside - it can get kinda long
    // option 4: class names
    //   downside - it applies everywhere that uses that class name, not specific


    const [usaChunks, setUSAChunks] = useState(STARTING_USA_STATES)

    return (
        <div>

            <AddStateForm usaChunks={usaChunks} setUSAChunks={setUSAChunks} />

            <h2 className="special-text">App</h2>
            <SpecialCard />
            <SpecialCard />
            <SpecialCard />

            <Card>
                <CardTitle>I'm a card</CardTitle>
            </Card>

            <SearchForm usaChunks={usaChunks} />
        </div>
    )
}