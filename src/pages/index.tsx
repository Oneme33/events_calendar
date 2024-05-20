import React from "react";
import Head from "next/head";
import { Box, Container, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { useRouter } from "next/router";
import { AppProps } from "next/app";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import FeaturedEvents from "@/components/FeaturedEvents/FeaturedEvents";
import { QueryClient, QueryClientProvider } from "react-query";
import { store } from "@/store";
import { Provider } from "react-redux";

const queryClient = new QueryClient();

const theme = createTheme({
    palette: {
        primary: {
            main: "#3f51b5",
        },
        secondary: {
            main: "#f50057",
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1400,
            xl: 1600,
        },
    },
    typography: {
        htmlFontSize: 16,
        h1: {
            fontSize: "2.8rem",
            marginBottom: "1rem",
        },
        h2: {
            fontSize: "2.2rem",
            marginBottom: "1rem",
        },
        h3: {
            fontSize: "1.8rem",
            marginBottom: "1rem",
        },
        h4: {
            fontSize: "1.7rem",
            marginBottom: "1rem",
        },
        h5: {
            fontSize: "1.6rem",
            marginBottom: "1rem",
        },
    },
});

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    const router = useRouter();

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement!.removeChild(jssStyles);
        }
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <Head>
                    <title>Event Calendar</title>
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width"
                    />
                </Head>
                <ThemeProvider theme={theme}>
                    <Header title="Events" />
                    <Box sx={{ minHeight: "calc(100vh - 10rem)" }}>
                        <Hero
                            title="Welcome to the Event Calendar"
                            buttonText="Explore Events"
                            linkTo="/explore"
                        />
                        <Container>
                            <FeaturedEvents />
                        </Container>
                    </Box>
                    <Footer copyright="Coen Vermeer, 2023" />
                </ThemeProvider>
            </Provider>
        </QueryClientProvider>
    );
};

export default MyApp;
