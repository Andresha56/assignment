import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";
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
                borderRadius: 3,
                boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
            }}
        >
            <CardActionArea
                onClick={() => navigate(`/detail/${itemSlug}`)}
                disableRipple
            >
                <CardMedia
                    component="img"
                    height="220"
                    image={image}
                    alt={itemname}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="h2"
                        fontWeight={700}
                    >
                        {itemname}
                    </Typography>
                    <Box sx={{ display: "grid", gap: 0.75 }}>
                        {itemprops.slice(0, 3).map((property) => (
                            <Typography
                                key={`${itemname}-${property.label}`}
                                variant="body2"
                                sx={{ color: "text.secondary" }}
                            >
                                <Box
                                    component="span"
                                    sx={{
                                        fontWeight: 600,
                                        color: "text.primary",
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
