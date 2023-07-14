import axios from "axios";

export const RecipeService = {
    async getAll(page) {
        const response = await axios.get(
            `https://api.punkapi.com/v2/beers?page=${page}`
        );
        return response.data;
    },

    async getById(id) {
        const response = await axios.get(
            `https://api.punkapi.com/v2/beers/${id}`
        );

        return response.data[0];
    },
};
