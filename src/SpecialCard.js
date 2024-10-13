import styles from "./SpecialCard.module.css"
import { animated, useSpring } from '@react-spring/web'

export default function SpecialCard() {
    const springs = useSpring({
        from: { backgroundColor: "blue" },
        to: { backgroundColor: "green" },
        config: {
            mass: 50,
            friction: 120,
            tension: 120,
        }
    })

    return (
        <div className={styles.specialText}>
            I am special
            <animated.div
                style={{
                    width: 80,
                    height: 80,
                    borderRadius: 8,
                    ...springs,
                }}
            />
        </div>
    )
}