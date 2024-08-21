
const URL_API = "https://space-tourism-api.vercel.app/";

const endpoints = {
    destinations: `${URL_API}destinations`,
    destinationsId: (id) => `${URL_API}destinations/${id}`,

    crew: `${URL_API}crew`,
    crewId: (id) => `${URL_API}crew/${id}`,

    technology: `${URL_API}technology`,
    technologyId: (id) => `${URL_API}technology/${id}`,
};

export default endpoints;