import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "grid",
                placeItems: "center",
                px: 2,
                background:
                    "radial-gradient(circle at top left, rgba(255, 196, 120, 0.28), transparent 26%), radial-gradient(circle at bottom right, rgba(14, 165, 233, 0.18), transparent 24%), linear-gradient(180deg, #fffaf4 0%, #f3f7fb 100%)",
            }}
        >
            <Paper
                elevation={0}
                sx={{
                    width: "100%",
                    maxWidth: 560,
                    p: { xs: 3, sm: 4.5 },
                    textAlign: "center",
                    borderRadius: 6,
                    background:
                        "linear-gradient(180deg, rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.82))",
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 30px 70px rgba(15, 23, 42, 0.12)",
                }}
            >
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{ fontWeight: 800, color: "#0f172a" }}
                >
                    Page Not Found
                </Typography>
                <Typography
                    sx={{
                        mt: 1.5,
                        color: "rgba(15, 23, 42, 0.66)",
                        lineHeight: 1.7,
                    }}
                >
                    The page you are looking for does not exist or may have
                    been moved.
                </Typography>
                <Button
                    variant="contained"
                    onClick={() => navigate("/")}
                    sx={{
                        mt: 3,
                        px: 3,
                        py: 1.2,
                        borderRadius: 999,
                        textTransform: "none",
                        fontWeight: 700,
                        background: "linear-gradient(135deg, #f97316, #ea580c)",
                        boxShadow: "0 14px 30px rgba(249, 115, 22, 0.28)",
                    }}
                >
                    Go to home
                </Button>
            </Paper>
        </Box>
    );
};
