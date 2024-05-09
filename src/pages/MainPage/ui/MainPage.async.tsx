import { lazy } from "react";

//для примера, удалить позже

export const MainPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            //@ts-ignore
            setTimeout(() => resolve(import("./MainPage")), 1500);
        })
);

//заменить на это

// export const MainPageAsync = lazy(() => import("./MainPage"));
