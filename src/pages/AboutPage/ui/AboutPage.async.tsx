import { lazy } from 'react';

// для примера, удалить позже

export const AboutPageAsync = lazy(
    () => new Promise((resolve) => {
    // @ts-ignore
        setTimeout(() => resolve(import('./AboutPage')), 1500);
    }),
);

// заменить на это

// export const AboutPageAsync = lazy(() => import("./AboutPage"));
