import React from "react";

const BTN_FILTERS = [
    {
        text: "All",
        id: "all",
    },
    {
        text: "Active",
        id: "active",
    },
    {
        text: "Completed",
        id: "completed"
    }
];

const Footer = ({amount}) => (
    <div>
        <span>{`${amount} Tasks to do`}</span>
        <div>
            {}
        </div>
    </div>
);

export default Footer;