const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const fetchVenueDetails = async (venueId: string) => {
    const response = await fetch(`https://app.ticketmaster.com/discovery/v2/venues/${venueId}.json?apikey=${apiKey}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};
