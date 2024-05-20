const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const fetchEvents = async (page: number) => {
  const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&city=amsterdam&page=${page}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};