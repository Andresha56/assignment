import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { useNavigate } from "react-router-dom";
import { getItemSlug } from "../utils";

export const ItemCard = ({ item }) => {
    const { itemname, category, image, itemprops = [] } = item;
    const navigate = useNavigate();
    const itemSlug = getItemSlug(category, itemname);

    return (
        <Card
            sx={{
                height: "100%",
                borderRadius: 4,
                border: "1px solid rgba(226, 232, 240, 0.8)",
                background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 252, 0.98))",
                boxShadow: "0 14px 36px rgba(15, 23, 42, 0.08)",
                transition: "transform 180ms ease, box-shadow 180ms ease",
                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 20px 44px rgba(15, 23, 42, 0.12)",
                },
            }}
        >
            <CardActionArea
                onClick={() => navigate(`/detail/${itemSlug}`)}
                disableRipple
                sx={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "stretch" }}
            >
                <CardMedia
                    component="img"
                    height="220"
                    image={image}
                    alt={itemname}
                    sx={{ objectFit: "cover" }}
                />
                <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
                    <Chip
                        label={category}
                        size="small"
                        sx={{
                            mb: 1.5,
                            fontWeight: 700,
                            color: "#0f766e",
                            backgroundColor: "rgba(204, 251, 241, 0.95)",
                        }}
                    />
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="h2"
                        sx={{ fontWeight: 800, color: "#0f172a", lineHeight: 1.25 }}
                    >
                        {itemname}
                    </Typography>
                    <Box sx={{ display: "grid", gap: 1 }}>
                        {itemprops.slice(0, 3).map((property) => (
                            <Typography
                                key={`${itemname}-${property.label}`}
                                variant="body2"
                                sx={{
                                    color: "rgba(51, 65, 85, 0.85)",
                                    p: 1.05,
                                    borderRadius: 2,
                                    backgroundColor: "rgba(248, 250, 252, 0.96)",
                                }}
                            >
                                <Box
                                    component="span"
                                    sx={{
                                        fontWeight: 700,
                                        color: "#0f172a",
                                    }}
                                >
                                    {property.label}:
                                </Box>{" "}
                                {property.value}
                            </Typography>
                        ))}
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
