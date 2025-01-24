"use client";

import * as motion from "motion/react-client";

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
        const delay = i * 0.5;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 },
            },
        };
    },
};

export default function PathDrawing() {
    return (
        <motion.svg
            width="600"
            height="600"
            viewBox="0 0 600 600"
            initial="hidden"
            animate="visible"
            style={svgStyles}
        >
            {/* T */}
            <motion.path
                d="M50,50 L150,50 M100,50 L100,150"
                stroke="#ff0088"
                variants={draw}
                custom={1}
                style={pathStyle}
            />
            {/* C */}
            <motion.path
                d="M200,100 A50,50 0 0,0 200,200"
                stroke="#4ff0b7"
                variants={draw}
                custom={2}
                style={pathStyle}
            />
            {/* C */}
            <motion.path
                d="M300,100 A50,50 0 0,0 300,200"
                stroke="#4ff0b7"
                variants={draw}
                custom={3}
                style={pathStyle}
            />
            {/* M */}
            <motion.path
                d="M400,200 L400,100 L450,150 L500,100 L500,200"
                stroke="#0d63f8"
                variants={draw}
                custom={4}
                style={pathStyle}
            />
            {/* D */}
            <motion.path
                d="M550,100 L550,200 A50,50 0 1,0 550,100"
                stroke="#ff0088"
                variants={draw}
                custom={5}
                style={pathStyle}
            />
        </motion.svg>
    );
}

/**
 * ==============   Styles   ================
 */

const svgStyles: React.CSSProperties = {
    maxWidth: "80vw",
};

const pathStyle: React.CSSProperties = {
    strokeWidth: 15,
    strokeLinecap: "round",
    fill: "transparent",
};
