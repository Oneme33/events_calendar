import React, { useState, useEffect, useCallback } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { addEvents, selectSortedEvents } from "@/features/events/eventsSlice";
import { addVenue, selectVenues } from "@/features/venues/venuesSlice";
import { fetchEvents } from "@/api/eventsApi";
import { fetchVenueDetails } from "@/api/venuesApi";
import EventList from "@components/Eventlist/Eventlist";
import { RootState } from "@/store";
import { TicketmasterEvent } from "@/types/interfaces";
import { delay } from "@/utils/utils";
import { Button, ButtonGroup } from "@mui/material";

export const FeaturedEvents: React.FC = () => {
    const [page, setPage] = useState<number>(1);
    const dispatch = useDispatch();
    const venues = useSelector(selectVenues);
    const [sortBy, setSortBy] = useState<"date" | "name">("date");

    const { isLoading, data } = useQuery(
        ["events", page],
        () => fetchEvents(page),
        {
            onSuccess: async (data) => {
                console.log(data)
                for (const event of data._embedded.events) {
                    const venueId = event._embedded.venues[0].id;
                    if (!venues[venueId]) {
                        await delay(200);
                        const venueData = await fetchVenueDetails(venueId);
                        dispatch(
                            addVenue({ id: venueId, name: venueData.name })
                        );
                    }
                }
            },
            keepPreviousData: true,
        }
    );

    useEffect(() => {
        if (data && data._embedded && data._embedded.events.length > 0) {
            const eventsData = data._embedded.events.map(
                (event: TicketmasterEvent) => ({
                    ...event,
                    venueName:
                        venues[event._embedded.venues[0].id] ||
                        "Venue details not available",
                })
            );
            dispatch(addEvents(eventsData));
        }
    }, [data, venues, dispatch]);

    const sortedEvents = useSelector((state: RootState) =>
        selectSortedEvents(state, sortBy)
    );

    const handleSortChange = useCallback(
        (criteria: "date" | "name") => {
            setSortBy(criteria);
        },
        [setSortBy]
    );

    const handleShowMore = () => setPage((prev) => prev + 1);

    return (
        <>
            <ButtonGroup>
                <Button onClick={() => handleSortChange("date")}>
                    Sorteren op datum
                </Button>
                <Button onClick={() => handleSortChange("name")}>
                    Sorteren op naam
                </Button>
            </ButtonGroup>
            <EventList
                events={sortedEvents}
                onShowMore={handleShowMore}
                loading={isLoading}
            />
        </>
    );
};

export default FeaturedEvents;
