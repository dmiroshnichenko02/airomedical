import { create } from "zustand";
import { RecipeService } from "../services/recipe.services";

const { getAll } = RecipeService;

const useStore = create((set) => ({
    bearsRecipes: [],
    getRecipes: async (page = 1) => {
        const data = await getAll(page);
        set({ bearsRecipes: data });
    },
    removeRecipe: (ids) => {
        set((state) => ({
            bearsRecipes: state.bearsRecipes.filter(
                (recipe) => !ids.includes(recipe.id)
            ),
        }));
    },
}));

export default useStore;
