import React from "react";
import TabsBtn from "./TabsBtn"

export const Tabs = () => {
    const data = [
        {
            id: 1,

            tabName: "Conference",
            title: "5th International Conference on New Trends in Information and Communications Technology Applications NTICT'2021",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum mollitia voluptatibus odio inventore minima distinctio at consequatur tempore labore aut expedita adipisci, quas odit sint, nulla, saepe veritatis aliquam velit.",
        },
        {
            id: 2,

            tabName: "Seminars",
            title: "Knowledge of the evaluation of economic research outputs before disbursement",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum mollitia voluptatibus odio inventore minima distinctio at consequatur tempore labore aut expedita adipisci, quas odit sint, nulla, saepe veritatis aliquam velit.",
        },
        {
            id: 3,

            tabName: "Workshops",
            title: "Science writing research for non native speakers of English",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum mollitia voluptatibus odio inventore minima distinctio at consequatur tempore labore aut expedita adipisci, quas odit sint, nulla, saepe veritatis aliquam velit.",
        },
    ];

    return (
        <div
            className={
                "flex flex-col justify-center w-full items-center space-y-10 h-screen"
            }
        >
            <TabsBtn data={data}/>
        </div>
    );
};
