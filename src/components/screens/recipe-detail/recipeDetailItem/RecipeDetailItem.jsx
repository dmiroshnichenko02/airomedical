import styles from "./RecipeDetailItem.module.scss";

const RecipeDetailItem = ({ recipe }) => {
    return (
        <div className={styles.single}>
            <div className={styles.item}>
                <img src={recipe.image_url} alt="bear" />
                <h2 className={styles.name}>{recipe?.name}</h2>
                <h3 className={styles.tag}>{recipe?.tagline}</h3>
                <div className={styles.brewed}>
                    First brewed: <span>{recipe?.first_brewed}</span>
                </div>
                <div className={styles.description}>
                    Description : <span>{recipe?.description}</span>
                </div>
                <div className={styles.ph}>
                    ph : <span>{recipe?.ph}</span>
                </div>
                <div>
                    <h3 className={styles.sizes}>Sizes:</h3>
                    <div className={styles.volume}>
                        Volume : {recipe?.volume?.value}
                        {recipe?.volume?.unit}
                    </div>
                    <div className={styles.boil}>
                        Boil volume : {recipe?.boil_volume?.value}
                        {recipe?.boil_volume?.unit}
                    </div>
                </div>
                <div className={styles.mash}>
                    <h3>Mash:</h3>
                    <div>
                        Mash temp: {recipe?.method?.mash_temp[0]?.temp?.value}{" "}
                        {recipe?.method?.mash_temp[0]?.temp?.unit}
                    </div>
                    <div>
                        {recipe?.method?.mash_temp[0]?.duration
                            ? `Duration : ${recipe?.method?.mash_temp[0]?.duration}`
                            : null}
                    </div>
                    <div className={styles.fermentation}>
                        Fermentation :{" "}
                        {recipe?.method?.fermentation?.temp?.value}{" "}
                        {recipe?.method.fermentation.temp.unit}
                    </div>
                </div>
                <div className={styles.ingredients}>
                    <h3>Ingredients</h3>
                    {recipe?.ingredients.malt.map((item, i) => {
                        return (
                            <div key={i}>
                                <span>
                                    {item.name}
                                    {": "} {item.amount.value}{" "}
                                    {item.amount.unit}
                                </span>
                            </div>
                        );
                    })}
                </div>
                <div className={styles.hops}>
                    <h3>Hops: </h3>
                    {recipe?.ingredients?.hops.map((item, i) => {
                        return (
                            <div key={i}>
                                <span>
                                    {item.name}
                                    {": "}
                                    {item.amount.value} {item.amount.unit}{" "}
                                    {item.add} {item.attribute}
                                </span>
                            </div>
                        );
                    })}
                </div>
                <div className={styles.yeast}>
                    <h3>
                        Yeast at : <span>{recipe?.ingredients?.yeast}</span>
                    </h3>
                </div>
                <div className={styles.food}>
                    <h3>Best food pairing: </h3>
                    {recipe?.food_pairing.map((item, i) => {
                        return <div key={i}>{item}</div>;
                    })}
                </div>
                <div className={styles.tips}>
                    <h3>
                        Tips : <span>{recipe?.brewers_tips}</span>
                    </h3>
                </div>
                <div className={styles.contributed}>
                    <h3>
                        Contributed by : <span>{recipe?.contributed_by}</span>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetailItem;
