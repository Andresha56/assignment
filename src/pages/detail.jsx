import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { cardData } from "../constants/data";
import { getItemSlug } from "../utils";
import ZoomImage from "../components/image-zoom-preview";

export const DetailPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const item = useMemo(() => {
        return cardData.find(({ itemname, category }) => {
            return getItemSlug(category, itemname) === id;
        });
    }, [id]);

    if (!item) {
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
                    <Typography variant="h3" component="h1" sx={{ fontWeight: 800, color: "#0f172a" }}>
                        We could not find that item
                    </Typography>
                    <Typography sx={{ mt: 1.5, color: "rgba(15, 23, 42, 0.66)", lineHeight: 1.7 }}>
                        The link may be outdated, or the requested product may no longer be available.
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
                        Return to catalog
                    </Button>
                </Paper>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                minHeight: "100vh",
                position: "relative",
                overflow: { xs: "auto", lg: "hidden" },
                background:
                    "radial-gradient(circle at top left, rgba(255, 205, 145, 0.34), transparent 22%), radial-gradient(circle at top right, rgba(56, 189, 248, 0.2), transparent 24%), radial-gradient(circle at bottom left, rgba(244, 114, 182, 0.12), transparent 20%), linear-gradient(180deg, #fff9f3 0%, #f7f8fc 48%, #eef4fb 100%)",
                py: { xs: 2, sm: 3, md: 4, lg: 4 },
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: 100,
                    right: -120,
                    width: 320,
                    height: 320,
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(251, 146, 60, 0.18), transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            <Container maxWidth="xl">
                <Button
                    startIcon={<ArrowBackRoundedIcon />}
                    onClick={() => navigate(-1)}
                    sx={{
                        mb: 3,
                        px: 2,
                        py: 1,
                        borderRadius: 999,
                        textTransform: "none",
                        fontWeight: 700,
                        color: "#0f172a",
                        backgroundColor: "rgba(255, 255, 255, 0.72)",
                        backdropFilter: "blur(14px)",
                        boxShadow: "0 12px 30px rgba(15, 23, 42, 0.08)",
                    }}
                >
                    Back to catalog
                </Button>

                <Box
                    sx={{
                        display: "grid",
                        gap: { xs: 2, md: 3 },
                        minHeight: {
                            lg: "calc(100vh - 136px)",
                        },
                    }}
                >
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                md: "1fr",
                                lg: "minmax(0, 1.15fr) minmax(360px, 0.85fr)",
                            },
                            gap: { xs: 2, md: 2.5, lg: 0 },
                            alignItems: { xs: "start", lg: "stretch" },
                            minHeight: { lg: "100%" },
                        }}
                    >
                        <Paper
                            elevation={0}
                            sx={{
                                position: "relative",
                                height: { xs: 280, sm: 360, md: 460, lg: "100%" },
                                overflow: "hidden",
                                borderRadius: { xs: 5, lg: "32px 0 0 32px" },
                                border: "1px solid rgba(255, 255, 255, 0.82)",
                                backgroundColor: "#dbeafe",
                                boxShadow: "0 34px 90px rgba(15, 23, 42, 0.12)",
                            }}
                        >
                            <ZoomImage image={item.image} />
                            <Box
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    background:
                                        "linear-gradient(180deg, rgba(15, 23, 42, 0.04) 0%, rgba(15, 23, 42, 0.12) 52%, rgba(15, 23, 42, 0.26) 100%)",
                                    pointerEvents: "none",
                                }}
                            />
                            
                        </Paper>

                        <Paper
                            elevation={0}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-start",
                                p: { xs: 2.5, sm: 3.5, md: 4.5 },
                                borderRadius: { xs: 5, lg: "0 32px 32px 0" },
                                border: "1px solid rgba(255, 255, 255, 0.82)",
                                borderLeftWidth: { xs: "1px", lg: 0 },
                                background:
                                    "linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(247, 250, 252, 0.94))",
                                backdropFilter: "blur(18px)",
                                boxShadow: "0 34px 90px rgba(15, 23, 42, 0.1)",
                                overflow: { xs: "visible", lg: "auto" },
                                minHeight: { lg: "100%" },
                            }}
                        >
                            <Box
                                sx={{
                                    mb: { xs: 2.5, sm: 3 },
                                    pb: { xs: 2, sm: 2.5 },
                                    borderBottom: "1px solid rgba(148, 163, 184, 0.16)",
                                }}
                            >
                                <Typography
                                    variant="h1"
                                    component="h1"
                                    sx={{
                                        fontSize: {
                                            xs: "1.75rem",
                                            sm: "2.2rem",
                                            md: "2.8rem",
                                            lg: "3.1rem",
                                        },
                                        lineHeight: { xs: 1.08, md: 1 },
                                        letterSpacing: "-0.04em",
                                        fontWeight: 800,
                                        color: "#0f172a",
                                        mb: { xs: 2, sm: 2.5 },
                                        pr: { xs: 2, md: 0 },
                                    }}
                                >
                                    {item.itemname}
                                </Typography>

                                <Typography
                                    variant="overline"
                                    sx={{
                                        letterSpacing: "0.18em",
                                        fontWeight: 700,
                                        color: "rgba(15, 23, 42, 0.45)",
                                    }}
                                >
                                    Specifications
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: "grid",
                                    gap: { xs: 1.25, sm: 1.5 },
                                    pb: { xs: 0.5, lg: 0 },
                                }}
                            >
                                {item.itemprops.map((property, index) => (
                                    <Box
                                        key={`${item.itemname}-${property.label}`}
                                        sx={{
                                            position: "relative",
                                            overflow: "hidden",
                                            p: { xs: 2, sm: 2.25 },
                                            borderRadius: 4,
                                            border: "1px solid rgba(255, 255, 255, 0.55)",
                                            background:
                                                index % 2 === 0
                                                    ? "linear-gradient(135deg, rgba(255, 247, 237, 0.98), rgba(255, 237, 213, 0.9))"
                                                    : "linear-gradient(135deg, rgba(239, 246, 255, 0.98), rgba(219, 234, 254, 0.9))",
                                            boxShadow: "0 10px 24px rgba(15, 23, 42, 0.06)",
                                        }}
                                    >
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color:
                                                    index % 2 === 0
                                                        ? "rgba(154, 52, 18, 0.75)"
                                                        : "rgba(29, 78, 216, 0.75)",
                                            }}
                                        >
                                            {property.label}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                mt: 0.75,
                                                fontWeight: 800,
                                                fontSize: {
                                                    xs: "1rem",
                                                    sm: "1.15rem",
                                                },
                                                lineHeight: 1.35,
                                                color: "#0f172a",
                                            }}
                                        >
                                            {property.value}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Paper>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};
