import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

export const CatalogSearch = ({
    value,
    onChange,
    placeholder = "Search products",
}) => {
    const handleClear = () => {
        onChange("");
    };

    return (
        <Box sx={{ maxWidth: 720, mt: 3 }}>
            <TextField
                fullWidth
                value={value}
                onChange={(event) => onChange(event.target.value)}
                placeholder={placeholder}
                variant="outlined"
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchRoundedIcon
                                    sx={{ color: "rgba(15, 23, 42, 0.55)" }}
                                />
                            </InputAdornment>
                        ),
                        endAdornment: value ? (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Clear search"
                                    edge="end"
                                    onClick={handleClear}
                                >
                                    <CloseRoundedIcon />
                                </IconButton>
                            </InputAdornment>
                        ) : null,
                    },
                }}
                sx={{
                    "& .MuiOutlinedInput-root": {
                        borderRadius: 999,
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                    },
                }}
            />
        </Box>
    );
};
