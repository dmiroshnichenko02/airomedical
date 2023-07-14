import React, { useEffect, useState } from "react";
import useStore from "../../../store/useStore";

import styles from "./Home.module.scss";

import RecipeItem from "../../recipeItem/RecipeItem";
import Layout from "../../layout/Layout";

const Home = () => {
    const [ids, setIds] = useState([]);
    const [visibleRecipes, setVisibleRecipes] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [page, setPage] = useState(2);

    const recipes = useStore((state) => state.bearsRecipes);
    const getRecipes = useStore((state) => state.getRecipes);
    const removeRecipe = useStore((state) => state.removeRecipe);

    const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } =
            document.documentElement;
        if (scrollTop + clientHeight === scrollHeight) {
            setStartIndex((prevIndex) => prevIndex + 5);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    useEffect(() => {
        getRecipes();
    }, []);
    useEffect(() => {
        if (startIndex === 25) {
            setStartIndex(0);
            getRecipes(page);
            setPage(page + 1);
            setVisibleRecipes(recipes.slice(startIndex, startIndex + 5));
        } else {
            setVisibleRecipes(recipes.slice(startIndex, startIndex + 5));
        }
    }, [recipes, startIndex]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Layout>
            <main className={styles.main} onScroll={handleScroll}>
                <button
                    className={styles.btn}
                    style={{ display: ids.length > 0 ? "block" : "none" }}
                    onClick={() => {
                        removeRecipe(ids);
                        setIds([]);
                        setStartIndex(0);
                    }}
                >
                    Remove Selected
                </button>
                <div className={styles.wrapper}>
                    {visibleRecipes.map((recipe) => {
                        return (
                            <RecipeItem
                                recipe={recipe}
                                key={recipe.id}
                                setIds={setIds}
                                ids={ids}
                                setStartIndex={setStartIndex}
                            />
                        );
                    })}
                </div>
            </main>
        </Layout>
    );
};

export default Home;
