
const URL_API = "https://space-tourism-api.vercel.app/";
const URL_Technology = "https://space-tourism-api.vercel.app/technology"
const endpoints = {
    destinations: `${URL_API}destinations`,
    destinationsId: (id) => `${URL_API}destinations/${id}`,

    crew: `${URL_API}crew`,
    crewId: (id) => `${URL_API}crew/${id}`,

    technology: `${URL_Technology}technology`,
    technologyId: (id) => `${URL_Technology}technology/${id}`,
};

export default endpoints;