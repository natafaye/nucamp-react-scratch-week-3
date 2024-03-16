import { useSpring, animated } from '@react-spring/web'

export default function BouncingButton() {
    const [springs, api] = useSpring(() => ({
        from: { y: 0 },
    }))

    const handleClick = () => {
        api.start({
            from: {
                y: 0,
            },
            to: {
                y: -10,
            },
            config: {
                friction: 1
            }
        })
    }
    return (
        <animated.button
            onClick={handleClick}
            style={{ width: "300px", backgroundColor: "lightblue", ...springs }}
        >
            I'm a button
        </animated.button>
    )
}