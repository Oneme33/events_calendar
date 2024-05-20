import React from "react";
import { Typography, AppBar, Toolbar, Container } from "@mui/material";

interface FooterProps {
    copyright: string;
}

const appBarStyle = {
    background: "rgba(255,255,255,0.2)",
    height: "6rem",
};

const Footer: React.FC<FooterProps> = ({ copyright }) => {
    return (
        <AppBar position="static" sx={appBarStyle}>
            <Container>
                <Typography
                    variant="body2"
                    align="right"
                    lineHeight="6rem"
                    color="white"
                    fontSize={16}
                >
                    {copyright}
                </Typography>
            </Container>
        </AppBar>
    );
};

export default Footer;
