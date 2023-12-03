
// animated, useSpring

import { useEffect, useState } from "react"
import { animated, useSpring } from "@react-spring/web"

export default function App() {
    // no re-render is happening
    // React doesn't know that changing the height variable
    // should rerender the page
    //let height = 0

    const [height, setHeight] = useState(60)

    // animation in response to a user event (click or something)
    function makeBigger() {
        //height = 300
        setHeight(600)
    }

    const specialStyling = useSpring({
        height: height + "px" // px is a CSS unit (stands for pixels)
    })

    // Loading in animation
    useEffect(() => {
        setHeight(300)
    }, []) // run once (or twice in development mode) when the component first renders

    return (
        <div className="container">
            <animated.div style={specialStyling} className="bg-light border p-3 my-3">
                Hey! Look at me!
            </animated.div>
            <button className="btn btn-primary" onClick={makeBigger}>Make Bigger</button>
        </div>
    )
}