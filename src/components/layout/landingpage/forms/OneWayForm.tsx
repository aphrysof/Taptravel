'use client'

import React, { useState } from 'react';
import {Button, DatePicker, Input} from "@heroui/react";
import {getLocalTimeZone, today} from "@internationalized/date";

interface OneWayFormProps {
    onSubmit: (data: any) => void;
    commonData: {
        passengers: number;
        class: string;
    };
}

const OneWayForm: React.FC<OneWayFormProps> = ({ onSubmit, commonData }) => {
    const [flightData, setFlightData] = useState({
        origin: '',
        destination: '',
        departureDate: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFlightData({
            ...flightData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (formData) => {
        formData.get(flightData)

        if (!flightData.origin || !flightData.destination || !flightData.departureDate) {
            alert('Please fill all required fields');
            return;
        }

        onSubmit(flightData);
    }

    return (
        <form action={handleSubmit} className="flex gap-5 w-full items-center">
            <div className="w-full">

                <Input
                size={"lg"}
                type={"text"}
                label={"Origin"}
                labelPlacement={"outside"}
                placeholder={"From?"}
                variant={"flat"}
                name={"origin"}
                value={flightData.origin}
                onChange={handleChange}
                isRequired

                />
            </div>

            <div className="w-full">
                <Input
                    size={"lg"}
                    type={"text"}
                    label="Destination"
                    placeholder={"Where to?"}
                    labelPlacement={"outside"}
                    name="destination"
                    value={flightData.destination}
                    onChange={handleChange}
                    isRequired

                />
            </div>

            <div className="w-full">
                <DatePicker
                    id="departureDate"
                    size={"lg"}
                    name="departureDate"
                    label={"Departure date"}
                    labelPlacement={"outside"}
                    minValue={today(getLocalTimeZone())}
                    isRequired

                />
            </div>
                <div className={"w-full mt-6"}>
                    <Button variant={"solid"} type={"submit"} className={"solid-button w-full"} size={"lg"}>Search flights</Button>
                </div>


        </form>
    );
};

export default OneWayForm;