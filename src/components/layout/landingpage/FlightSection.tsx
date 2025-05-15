import React from "react";
import { TabsContainer, FlightInputs } from "@/components";


export default function FlightSection() {
    const tabs = [
        {
            id: 'tab1',
            label: 'Flights',
            content: <FlightInputs />,
                
        },
    ];

    return (
        <section className="p-4">
            <div className="max-w-10/12 mx-auto p-4">
                <TabsContainer tabs={tabs} />
            </div>
        </section>
    )
}
