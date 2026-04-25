import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useMemo } from "react";
import { ItemCard } from "../components/card";
import { cardData } from "../constants/data";

export const HomePage = () => {
    const itemsByCategory = useMemo(() => {
        return cardData.reduce((categoryMap, item) => {
            const existingItems = categoryMap[item.category] ?? [];

            existingItems.push(item);
            categoryMap[item.category] = existingItems;

            return categoryMap;
        }, {});
    }, []);

    const categoryEntries = useMemo(() => {
        return Object.entries(itemsByCategory);
    }, [itemsByCategory]);

    return (
        <Box
            sx={{
                minHeight: "100vh",
                background:
                    "radial-gradient(circle at top left, rgba(255, 214, 165, 0.45), transparent 30%), radial-gradient(circle at top right, rgba(109, 40, 217, 0.12), transparent 28%), linear-gradient(180deg, #fff8f1 0%, #f5f7ff 45%, #eef3f8 100%)",
                py: { xs: 4, sm: 5, md: 7 },
            }}
        >
            <Container maxWidth="xl">
                <Box
                    sx={{
                        position: "relative",
                        overflow: "hidden",
                        mb: { xs: 3, md: 5 },
                        px: { xs: 2, sm: 4, md: 5 },
                        py: { xs: 4, md: 5.5 },
                        borderRadius: { xs: 4, md: 6 },
                        border: "1px solid rgba(255, 255, 255, 0.6)",
                        background:
                            "linear-gradient(135deg, rgba(255, 255, 255, 0.88), rgba(255, 245, 235, 0.78))",
                        backdropFilter: "blur(18px)",
                        boxShadow: "0 30px 80px rgba(15, 23, 42, 0.12)",
                    }}
                >
                    <Box
                        sx={{
                            position: "absolute",
                            top: -80,
                            right: -40,
                            width: 220,
                            height: 220,
                            borderRadius: "50%",
                            background:
                                "radial-gradient(circle, rgba(255, 132, 0, 0.25), transparent 70%)",
                        }}
                    />
                    <Box sx={{ position: "relative", zIndex: 1 }}>
                        <Chip
                            label="Curated Collection"
                            sx={{
                                mb: 2,
                                px: 1,
                                fontWeight: 700,
                                color: "#9a3412",
                                backgroundColor: "rgba(255, 237, 213, 0.95)",
                            }}
                        />
                        <Typography
                            variant="h2"
                            component="h1"
                            sx={{
                                maxWidth: 760,
                                fontSize: {
                                    xs: "2.2rem",
                                    sm: "3rem",
                                    md: "4rem",
                                },
                                lineHeight: 1.02,
                                letterSpacing: "-0.04em",
                                fontWeight: 800,
                                color: "#111827",
                            }}
                        >
                            Discover standout products across every category.
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                mt: 2,
                                maxWidth: 640,
                                fontSize: { xs: "1rem", md: "1.05rem" },
                                lineHeight: 1.8,
                                color: "rgba(17, 24, 39, 0.7)",
                            }}
                        >
                            Explore products, compare features, and find what
                            fits you best.
                        </Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: "grid",
                        gap: { xs: 3, md: 4 },
                        px: { xs: 1, sm: 0 },
                    }}
                >
                    {categoryEntries.map(([category, items]) => (
                        <Paper
                            key={category}
                            elevation={0}
                            sx={{
                                p: { xs: 2, sm: 3 },
                                borderRadius: 5,
                                border: "1px solid rgba(255, 255, 255, 0.7)",
                                background:
                                    "linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.72))",
                                backdropFilter: "blur(16px)",
                                boxShadow: "0 18px 45px rgba(15, 23, 42, 0.08)",
                                overflow: "hidden",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: {
                                        xs: "flex-start",
                                        sm: "center",
                                    },
                                    justifyContent: "space-between",
                                    gap: 1.5,
                                    flexDirection: {
                                        xs: "column",
                                        sm: "row",
                                    },
                                    mb: 2,
                                }}
                            >
                                <Box>
                                    <Typography
                                        variant="h5"
                                        component="h2"
                                        fontWeight={800}
                                        color="#0f172a"
                                    >
                                        {category}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "rgba(15, 23, 42, 0.65)",
                                            mt: 0.75,
                                        }}
                                    >
                                        Explore all items in the{" "}
                                        {category.toLowerCase()} category.
                                    </Typography>
                                </Box>
                                <Chip
                                    label={`${items.length} items`}
                                    sx={{
                                        fontWeight: 700,
                                        color: "#1d4ed8",
                                        backgroundColor:
                                            "rgba(219, 234, 254, 0.95)",
                                        border: "1px solid rgba(59, 130, 246, 0.18)",
                                    }}
                                />
                            </Box>

                            <Divider
                                sx={{
                                    mb: 3,
                                    borderColor: "rgba(148, 163, 184, 0.18)",
                                }}
                            />

                            <Box
                                sx={{
                                    display: "grid",
                                    gridTemplateColumns: {
                                        xs: "1fr",
                                        sm: "repeat(2, minmax(0, 1fr))",
                                        lg: "repeat(3, minmax(0, 1fr))",
                                    },
                                    gap: { xs: 2, sm: 3 },
                                }}
                            >
                                {items.map((item) => (
                                    <ItemCard key={item.itemname} item={item} />
                                ))}
                            </Box>
                        </Paper>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};
