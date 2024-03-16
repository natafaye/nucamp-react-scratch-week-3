import styles from "./Sidebar.module.css"
import { useSpring, animated } from '@react-spring/web'

export default function Sidebar() {
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
        <div className={styles.main}>
            <animated.button
                onClick={handleClick}
                style={{ backgroundColor: "lightblue", ...springs }}
            >
                I'm a button
            </animated.button>
        </div>
    )
}