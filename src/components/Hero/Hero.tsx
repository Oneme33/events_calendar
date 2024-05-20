import React from "react";
import { Typography, Button, Container, Box } from "@mui/material";
import { useRouter } from "next/router";

interface HeroProps {
    title: string;
    buttonText: string;
    linkTo: string;
}

const boxStyle = {
    padding: "6rem 0 4rem",
};

export const Hero: React.FC<HeroProps> = ({ title, buttonText, linkTo }) => {
    const router = useRouter();

    const onButtonClick = () => {
        router.push(linkTo);
    };

    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
                <Box sx={boxStyle}>
                    <Typography variant="h1">{title}</Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={onButtonClick}
                    >
                        {buttonText}
                    </Button>
                </Box>
            </Container>
        </>
    );
};

export default Hero;
