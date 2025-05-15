'use client'

import React, { useState } from 'react';
import {Button} from "@heroui/react";

interface RoundTripFormProps {
    onSubmit: (data: any) => void;
    commonData: {
        passengers: number;
        class: string;
    };
}

const RoundTripForm: React.FC<RoundTripFormProps> = ({ onSubmit, commonData }) => {
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

        // Validate that return date is after departure date
        if (new Date(formData.returnDate) < new Date(formData.departureDate)) {
            alert('Return date must be after departure date');
            return;
        }

        // Submit the form data to parent component
        onSubmit(formData);
    };

    return (
        <form action={handleSubmit} className="round-trip-form">
            <div className="form-group">
                <label htmlFor="origin">Origin</label>
                <input
                    type="text"
                    id="origin"
                    name="origin"
                    value={formData.origin}
                    onChange={handleChange}
                    required
                    placeholder="City or airport"
                />
            </div>

            <div className="form-group">
                <label htmlFor="destination">Destination</label>
                <input
                    type="text"
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    placeholder="City or airport"
                />
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="departureDate">Departure Date</label>
                    <input
                        type="date"
                        id="departureDate"
                        name="departureDate"
                        value={formData.departureDate}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="returnDate">Return Date</label>
                    <input
                        type="date"
                        id="returnDate"
                        name="returnDate"
                        value={formData.returnDate}
                        onChange={handleChange}
                        required
                        min={formData.departureDate} // Prevents selecting a return date before departure
                    />
                </div>
            </div>

            <Button variant={"solid"} type={"submit"} className={"solid-button"} size={"lg"}> Search Round Trip Flights</Button>

        </form>
    );
};

export default RoundTripForm;