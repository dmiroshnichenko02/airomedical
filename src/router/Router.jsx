import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/screens/home/Home";
import RecipeDetail from "../components/screens/recipe-detail/RecipeDetail";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<RecipeDetail />} path="/recipe/:id" />

                <Route element={<div> Not Found</div>} path="*" />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
