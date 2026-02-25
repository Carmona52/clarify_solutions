"use client";

import { Box } from "@mui/joy";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
} from "@vnedyalk0v/react19-simple-maps";
import { useState, useEffect } from "react";

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-50m.json";

export default function GlobalMapSection() {
    const [tooltip, setTooltip] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 600);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const markers = [
        { name: "CDMX", coordinates: [-99.1332, 19.4326] },
        { name: "Guadalajara", coordinates: [-103.3496, 20.6597] },
        { name: "Monterrey", coordinates: [-100.3161, 25.6866] },
        { name: "Puebla", coordinates: [-98.2063, 19.0414] },
    ];

    return (
        <Box
            sx={{
                width: "100%",
                mx: "auto",
                position: "relative",
                // Eliminamos p, border y bgcolor para evitar el "doble margen"
                p: 0,
                overflow: "hidden",
            }}
        >
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                    scale: isMobile ? 1200 : 850,
                    center: isMobile ? [-102, 23.8] : [-102, 23],
                }}
                width={980}
                height={isMobile ? 700 : 450}
                style={{
                    width: "100%",
                    height: "auto",
                    display: "block"
                }}
            >
                <defs>
                    <radialGradient id="mapGradient" cx="50%" cy="50%" r="80%">
                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
                    </radialGradient>
                </defs>

                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill="url(#mapGradient)"
                                stroke="rgba(255,255,255,0.15)"
                                strokeWidth={0.5}
                                style={{
                                    default: { outline: "none" },
                                    hover: { fill: "rgba(112, 68, 255, 0.4)", outline: "none" },
                                }}
                            />
                        ))
                    }
                </Geographies>

                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinates={marker.coordinates}
                        onMouseEnter={(e) => {
                            const bounds = e.currentTarget.getBoundingClientRect();
                            setTooltip({
                                name: marker.name,
                                x: bounds.x + bounds.width / 2,
                                y: bounds.y,
                            });
                        }}
                        onMouseLeave={() => setTooltip(null)}
                    >
                        {/* Brillo de fondo para el punto */}
                        <circle r={isMobile ? 14 : 10} fill="#B19DFF" opacity={0.2} />
                        <circle
                            r={isMobile ? 6 : 5}
                            fill="#00adee"
                            stroke="#ffffff"
                            strokeWidth={2}
                        />
                    </Marker>
                ))}
            </ComposableMap>

            {tooltip && (
                <Box
                    sx={{
                        position: "fixed",
                        top: tooltip.y - 12,
                        left: tooltip.x,
                        transform: "translate(-50%, -100%)",
                        background: "rgba(255, 255, 255, 0.95)",
                        backdropFilter: "blur(4px)",
                        color: "#330d85",
                        px: 2,
                        py: 0.8,
                        borderRadius: "12px",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
                        fontSize: 14,
                        fontWeight: 700,
                        zIndex: 2000,
                        pointerEvents: 'none'
                    }}
                >
                    {tooltip.name}
                </Box>
            )}
        </Box>
    );
}