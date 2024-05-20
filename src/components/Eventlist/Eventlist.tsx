import {
    Button,
    Card,
    CardMedia,
    CardContent,
    Typography,
    CircularProgress,
    Modal,
    Box,
    Fade,
} from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import React from "react";
import { formatDutchDate } from "@/utils/utils";

interface EventListProps {
    events: any[];
    onShowMore: () => void;
    loading: boolean;
}

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    outline: "none",
};

const EventsList: React.FC<EventListProps> = ({
    events,
    onShowMore,
    loading,
}) => {
    return (
        <Box
            sx={{
                padding: "40px 0",
            }}
        >
            <Typography variant="h2">Events List</Typography>
            <Masonry
                columns={{ xs: 2, md: 3, lg: 4 }}
                spacing={{ xs: 1, md: 2, lg: 3 }}
                sx={{ mt: 2, width: "auto" }}
            >
                {events.map((event, index) => (
                    <Fade
                        in={true}
                        key={event.id + index}
                        style={{ transitionDelay: `${100 * (index % 20)}ms` }}
                    >
                        <a href={event.url} target="_blank" rel="noreferrer">
                            <Card>
                                <CardMedia
                                    component="img"
                                    sx={{
                                        height: { xs: 110, sm: 130, md: 160 },
                                    }}
                                    image={event.images[1].url}
                                    alt={event.name}
                                />
                                <CardContent
                                    sx={{
                                        padding: { xs: 1, sm: 1.5, md: 2 },
                                    }}
                                >
                                    <Typography
                                        variant="h3"
                                        fontSize={{ xs: 18, sm: 21, md: 24 }}
                                    >
                                        {event.name}
                                    </Typography>
                                    <Typography
                                        fontSize={{ xs: 11, sm: 12, md: 13 }}
                                    >
                                        {formatDutchDate(
                                            event.dates.start.localDate
                                        )}
                                    </Typography>
                                    <Typography
                                        fontSize={{ xs: 14, sm: 16, md: 18 }}
                                    >
                                        {event.venueName}
                                    </Typography>
                                    <p>{event.description}</p>
                                </CardContent>
                            </Card>
                        </a>
                    </Fade>
                ))}
            </Masonry>
            <Modal
                open={loading}
                aria-labelledby="loading-modal"
                aria-describedby="loading-modal-description"
            >
                <Box sx={modalStyle}>
                    <CircularProgress />
                </Box>
            </Modal>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Button variant="contained" onClick={onShowMore}>
                    Show More
                </Button>
            </Box>
        </Box>
    );
};

export default EventsList;
