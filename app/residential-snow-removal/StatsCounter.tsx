"use client";

import { useEffect, useState, useRef } from "react";

interface StatProps {
    end: number;
    label: string;
    suffix?: string;
    numberColor?: string;
    labelColor?: string;
}

function Stat({ end, label, suffix = "", numberColor, labelColor }: StatProps) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const statRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);

                    const duration = 2000; // 2 seconds
                    const steps = 60;
                    const increment = end / steps;
                    let current = 0;

                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= end) {
                            setCount(end);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(current));
                        }
                    }, duration / steps);

                    return () => clearInterval(timer);
                }
            },
            { threshold: 0.5 }
        );

        if (statRef.current) {
            observer.observe(statRef.current);
        }

        return () => observer.disconnect();
    }, [end, hasAnimated]);

    return (
        <div ref={statRef} style={styles.stat}>
            <div style={{ ...styles.statNumber, color: numberColor || styles.statNumber.color }}>
                {count}
                {suffix}
            </div>
            <div style={{ ...styles.statLabel, color: labelColor || styles.statLabel.color }}>{label}</div>
        </div>
    );
}

interface StatsCounterProps {
    stats?: { end: number; label: string; suffix?: string }[];
    backgroundColor?: string;
    numberColor?: string;
    labelColor?: string;
    borderBottom?: string;
    padding?: string;
}

export default function StatsCounter({
    stats,
    backgroundColor,
    numberColor,
    labelColor,
    borderBottom,
    padding
}: StatsCounterProps) {
    const defaultStats = [
        { end: 100, label: "Happy Clients", suffix: "+" },
        { end: 75, label: "Total Properties" },
        { end: 2, label: "TERREOAK Crews" },
    ];

    const displayStats = stats || defaultStats;

    return (
        <section style={{
            ...styles.statsSection,
            backgroundColor: backgroundColor || styles.statsSection.background as string,
            borderBottom: borderBottom || styles.statsSection.borderBottom,
            padding: padding || styles.statsSection.padding
        }}>
            <div style={styles.statsInner}>
                {displayStats.map((stat, index) => (
                    <Stat
                        key={index}
                        end={stat.end}
                        label={stat.label}
                        suffix={stat.suffix}
                        numberColor={numberColor}
                        labelColor={labelColor}
                    />
                ))}
            </div>
        </section>
    );
}

const styles: Record<string, React.CSSProperties> = {
    statsSection: {
        background: "#01fa6d",
        padding: "48px 0",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
    },
    statsInner: {
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 20px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: 32,
        textAlign: "center" as const,
    },
    stat: {
        display: "flex",
        flexDirection: "column" as const,
        alignItems: "center",
        gap: 8,
    },
    statNumber: {
        fontSize: 43.2,
        fontWeight: 900,
        color: "#000000",
        lineHeight: 1,
    },
    statLabel: {
        fontSize: 12.6,
        fontWeight: 700,
        color: "#000000",
        textTransform: "uppercase" as const,
        letterSpacing: "0.05em",
    },
};
