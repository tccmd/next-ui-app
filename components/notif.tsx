"use client"

import type { Variants } from "motion/react"
import * as motion from "motion/react-client"
import { CSSProperties, useState } from "react"

const N_NOTIFICATIONS = 3

const NOTIFICATION_HEIGHT = 60
const NOTIFICATION_WIDTH = 280
const NOTIFICATION_GAP = 8

export default function NotificationsStack() {
    const [isOpen, setIsOpen] = useState(false)

    const stackVariants: Variants = {
        open: {
            y: 20,
            scale: 0.9,
            cursor: "pointer",
        },
        closed: {
            y: 0,
            scale: 1,
            cursor: "default",
        },
    }

    return (
        <motion.div
            style={stackStyle}
            variants={stackVariants}
            initial={isOpen ? "open" : "closed"}
            animate={isOpen ? "open" : "closed"}
            transition={{
                type: "spring",
                mass: 0.7,
            }}
        >
            <Header isOpen={isOpen} onClose={() => setIsOpen(false)} />

            {Array.from({ length: N_NOTIFICATIONS }).map((_, i) => (
                <Notification
                    key={i}
                    index={i}
                    isOpen={isOpen}
                    onClick={() => {
                        setIsOpen((open) => !open)
                    }}
                />
            ))}
        </motion.div>
    )
}

const Header = ({
    isOpen,
    onClose,
}: {
    isOpen: boolean
    onClose: () => void
}) => {
    const variants: Variants = {
        open: {
            y: 0,
            scale: 1,
            opacity: 1,
        },
        closed: {
            y: 60,
            scale: 0.8,
            opacity: 0,
        },
    }

    return (
        <motion.div
            style={headerStyle}
            variants={variants}
            initial={isOpen ? "open" : "closed"}
            animate={isOpen ? "open" : "closed"}
            transition={{
                type: "spring",
                stiffness: 600,
                damping: 50,
                delay: isOpen ? 0.2 : 0,
            }}
        >
            <motion.h2 style={headerTitleStyle}>Notifications</motion.h2>
            <motion.div
                style={headerCloseStyle}
                whileHover={{
                    backgroundColor: "var(--accent)",
                }}
                onClick={onClose}
            >
                Close
            </motion.div>
        </motion.div>
    )
}

const Notification = ({
    index,
    isOpen,
    onClick,
}: {
    index: number
    isOpen: boolean
    onClick: () => void
}) => {
    const variants: Variants = {
        open: {
            y: 0,
            scale: 1,
            opacity: 1,
            pointerEvents: "auto",
            cursor: "pointer",
        },
        closed: {
            y:
                -index * (NOTIFICATION_HEIGHT + NOTIFICATION_GAP) -
                NOTIFICATION_GAP * index,
            scale: 1 - index * 0.1,
            opacity: 1 - index * 0.1,
            pointerEvents: index === 0 ? "auto" : "none",
            cursor: index === 0 ? "pointer" : "default",
        },
    }

    const notificationStyle = getNotificationStyle(index)

    return (
        <motion.div
            style={notificationStyle}
            variants={variants}
            initial={isOpen ? "open" : "closed"}
            animate={isOpen ? "open" : "closed"}
            transition={{
                type: "spring",
                stiffness: 600,
                damping: 50,
                delay: index * 0.04,
            }}
            onClick={onClick}
        />
    )
}

/**
 * ==============   Styles   ================
 */
const stackStyle: CSSProperties = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: NOTIFICATION_GAP,
}

const headerStyle: CSSProperties = {
    position: "absolute",
    top: -40,
    left: 0,
    height: 28,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    transformOrigin: "bottom center",
    pointerEvents: "none",
}

const headerTitleStyle: CSSProperties = {
    fontSize: 18,
    lineHeight: 1,
    marginLeft: 8,
}

const headerCloseStyle: CSSProperties = {
    fontSize: 14,
    lineHeight: 1,
    marginRight: 8,
    backgroundColor: "#1f1f1f",
    padding: "4px 12px",
    height: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    cursor: "pointer",
    pointerEvents: "auto",
    userSelect: "none",
}

/**
 * ==============   Utils   ================
 */
function getNotificationStyle(index: number): CSSProperties {
    return {
        height: NOTIFICATION_HEIGHT,
        width: NOTIFICATION_WIDTH,
        backgroundColor: `var(--hue-${index + 1}, #000)`,
        borderRadius: 16,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: N_NOTIFICATIONS - index,
        userSelect: "none",
    }
}
