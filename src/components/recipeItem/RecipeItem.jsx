import { useState } from "react";
import styles from "./RecipeItem.module.scss";
import { Link } from "react-router-dom";

const RecipeItem = ({ recipe, setIds, ids }) => {
    const [selected, setSelected] = useState(false);

    const onHandleRightClick = (event) => {
        event.preventDefault();
        setSelected(!selected);
        if (ids.includes(recipe.id)) {
            setIds(ids.filter((r) => r !== recipe.id));
        } else {
            setIds([...ids, recipe.id]);
        }
        setStartIndex(0);
    };
    return (
        <Link to={`/recipe/${recipe.id}`}>
            <div
                className={styles.card}
                onContextMenu={onHandleRightClick}
                style={{ borderColor: selected ? "red" : "#fff" }}
            >
                <img src={recipe.image_url} alt="bear" />
                <h2>{recipe.name}</h2>
                <div className={styles.descr}>
                    {recipe.description.length > 380
                        ? `${recipe.description.slice(0, 380)}...`
                        : recipe.description}
                </div>
                <div className={styles.ph}>ph: {recipe.ph}</div>
                <div className={styles.brewed}>
                    First brewed since: {recipe.first_brewed}
                </div>
                <div className={styles.contributed}>
                    Contributed by: {recipe.contributed_by}
                </div>
            </div>
        </Link>
    );
};

export default RecipeItem;
