import { useParams } from "react-router-dom";

import Layout from "../../layout/Layout";
import { RecipeService } from "../../../services/recipe.services";

import styles from "./RecipeDetail.module.scss";
import { useEffect, useState } from "react";
import RecipeDetailItem from "./recipeDetailItem/RecipeDetailItem";

const RecipeDetail = () => {
    const [recipe, setRecipe] = useState({});

    const { getById } = RecipeService;

    const { id } = useParams();

    useEffect(() => {
        if (!id) return;

        const fetchRecipe = async () => {
            const data = await getById(id);
            setRecipe(data);
        };
        fetchRecipe();
    }, [id]);

    if (!recipe?.name) return <div>Loading</div>;

    return (
        <Layout>
            <RecipeDetailItem recipe={recipe} />
        </Layout>
    );
};

export default RecipeDetail;
