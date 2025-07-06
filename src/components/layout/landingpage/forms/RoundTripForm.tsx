'use client'

import React, { useState } from 'react';
import {Button, DatePicker, Input} from "@heroui/react";
import {getLocalTimeZone, today} from "@internationalized/date";

interface RoundTripFormProps {
    onSubmit: (data: any) => void;
    commonData: {
        passengers: number;
        class: string;
    };
}

const RoundTripForm: React.FC<RoundTripFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        origin: '',
        destination: '',
        departureDate: '',
        returnDate: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        // Validate form
        if (!formData.origin || !formData.destination || !formData.departureDate || !formData.returnDate) {
            alert('Please fill all required fields');
            return;
        }

        // Validate that return date is after the departure date
        if (new Date(formData.returnDate) < new Date(formData.departureDate)) {
            alert('Return date must be after departure date');
            return;
        }

        // Submit the form data to parent component
        onSubmit(formData);
    };

    return (
        <form action={handleSubmit} className="flex gap-5 w-full items-center">
            <div className="w-[20%]">

                <Input
                    size={"lg"}
                    type={"text"}
                    label={"Origin"}
                    labelPlacement={"outside"}
                    placeholder={"From?"}
                    variant={"flat"}
                    name={"origin"}
                    // value={flightData.origin}
                    // onChange={handleChange}
                    isRequired

                />
            </div>

            <div className="w-[20%]">

                <Input
                    size={"lg"}
                    type={"text"}
                    label="Destination"
                    placeholder={"Where to?"}
                    labelPlacement={"outside"}
                    name="destination"
                    // value={flightData.destination}
                    // onChange={handleChange}
                    isRequired

                />
            </div>

                <div className="w-[20%]">

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

                <div className="w-[20%]">

                    <DatePicker
                        id="returnDate"
                        size={"lg"}
                        name="returnDate"
                        label={"Return date"}
                        labelPlacement={"outside"}
                        // minValue={today(getLocalTimeZone())}
                        isRequired

                    />
                </div>


            <Button variant={"solid"} type={"submit"} className={"solid-button mt-6"} size={"lg"}> Search Round Trip Flights</Button>

        </form>
    );
};

export default RoundTripForm;