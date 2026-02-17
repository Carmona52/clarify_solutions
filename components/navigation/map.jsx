"use client";

import { Box } from "@mui/joy";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
} from "@vnedyalk0v/react19-simple-maps";
import { useState } from "react";

const geoUrl =
    "https://unpkg.com/world-atlas@2.0.2/countries-50m.json";

export default function GlobalMapSection() {
    const [tooltip, setTooltip] = useState(null);

    const markers = [
        { name: "CDMX", coordinates: [-99.1332, 19.4326] },
        { name: "Guadalajara", coordinates: [-103.3496, 20.6597] },
        { name: "Monterrey", coordinates: [-100.3161, 25.6866] },
        { name: "Puebla", coordinates: [-98.2063, 19.0414] },
    ];

    return (
        <Box
            sx={{
                maxWidth: 1200,
                mx: "auto",
                position: "relative",
                borderRadius: "16px",
                p: 3,
            }}
        >
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                    scale: 800,
                    center: [-102, 23],
                }}
                width={980}
                height={500}
                style={{
                    width: "100%",
                    height: "auto",
                }}
            >
                <defs>
                    <radialGradient id="mapGradient" cx="50%" cy="50%" r="80%">
                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.15" />
                    </radialGradient>
                </defs>

                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill="url(#mapGradient)"
                                stroke="rgba(255,255,255,0.25)"
                                strokeWidth={0.6}
                                style={{
                                    default: { outline: "none" },
                                    hover: {
                                        fill: "#6366f1",
                                        outline: "none",
                                    },
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
                            const bounds =
                                e.currentTarget.getBoundingClientRect();
                            setTooltip({
                                name: marker.name,
                                x: bounds.x + bounds.width / 2,
                                y: bounds.y,
                            });
                        }}
                        onMouseLeave={() => setTooltip(null)}
                    >
                        <circle
                            r={6}
                            fill="#00adee" // Cian datos
                            stroke="#ffffff"
                            strokeWidth={2}
                            style={{ cursor: "pointer" }}
                        />
                    </Marker>
                ))}
            </ComposableMap>

            {tooltip && (
                <Box
                    sx={{
                        position: "fixed",
                        top: tooltip.y - 10,
                        left: tooltip.x,
                        transform: "translate(-50%, -100%)",
                        background: "#ffffff",
                        color: "#061795",
                        px: 2,
                        py: 1,
                        borderRadius: "8px",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                        fontSize: 14,
                        fontWeight: 600,
                    }}
                >
                    {tooltip.name}
                </Box>
            )}
        </Box>
    );
}
