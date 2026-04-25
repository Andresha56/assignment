import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useCallback, useState } from "react";

export default function ZoomImage({ image }) {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
    const [pos, setPos] = useState({ x: 50, y: 50 });
    const [zoom, setZoom] = useState(false);

    const handleMove = useCallback(
        (e) => {
            if (!isDesktop) {
                return;
            }

            const rect = e.currentTarget.getBoundingClientRect();

            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;

            setPos({ x, y });
        },
        [isDesktop]
    );

    return (
        <Box
            onMouseMove={handleMove}
            onMouseEnter={() => setZoom(isDesktop)}
            onMouseLeave={() => setZoom(false)}
            sx={{
                width: "100%",
                height: "100%",
                minHeight: 0,
                display: "block",
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: isDesktop && zoom ? "200%" : "cover",
                backgroundPosition: `${pos.x}% ${pos.y}%`,
                transition: "background-size 0.2s ease",
                cursor: isDesktop ? "zoom-in" : "default",
                backgroundColor: "#e2e8f0",
            }}
        />
    );
}
