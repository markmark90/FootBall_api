export const fetchLiveFixtures = async () => {
    const url = "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all";
    const options = {
        method: "GET",
        headers: {
            "x-rapidapi-key": "19afdef6fdmsh62cee07f9e2de96p1c964bjsn65b83020188d",
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
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