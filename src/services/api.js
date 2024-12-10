
export const fetchLiveFixtures = async () => {
    const url = "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all";
    const options = {
        method: "GET",
        headers: {
            "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
            "x-rapidapi-host": import.meta.env.VITE_RAPIDAPI_HOST,
        },
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP greška! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.response;
    } catch (error) {
        console.error("Greška prilikom dohvaćanja podataka:", error);
        throw error;
    }
};