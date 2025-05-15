'use client'

import React, { useState } from 'react';
import {Button} from "@heroui/react";

interface FlightLeg {
    origin: string;
    destination: string;
    departureDate: string;
}

interface MultiCityFormProps {
    onSubmit: (data: any) => void;
    commonData: {
        passengers: number;
        class: string;
    };
}

const MultiCityForm: React.FC<MultiCityFormProps> = ({ onSubmit, commonData }) => {
    // Initialize with 2 flight legs
    const [flightLegs, setFlightLegs] = useState<FlightLeg[]>([
        { origin: '', destination: '', departureDate: '' },
        { origin: '', destination: '', departureDate: '' }
    ]);

    const handleLegChange = (index: number, field: keyof FlightLeg, value: string) => {
        const updatedLegs = [...flightLegs];
        updatedLegs[index] = {
            ...updatedLegs[index],
            [field]: value
        };
        setFlightLegs(updatedLegs);
    };

    const addFlightLeg = () => {
        // Limit to maximum of 5 legs
        if (flightLegs.length < 5) {
            setFlightLegs([...flightLegs, { origin: '', destination: '', departureDate: '' }]);
        }
    };

    const removeFlightLeg = (index: number) => {
        // Keep at least 2 legs
        if (flightLegs.length > 2) {
            const updatedLegs = flightLegs.filter((_, i) => i !== index);
            setFlightLegs(updatedLegs);
        }
    };

    const handleSubmit = (formData) => {
     formData.get(flightLegs)

        // Validate each leg has all required fields
        const isValid = flightLegs.every(leg =>
            leg.origin && leg.destination && leg.departureDate
        );

        if (!isValid) {
            alert('Please fill all required fields for each flight leg');
            return;
        }

        // Submit the form data to parent component
        onSubmit({
            flightLegs
        });
    };

    return (
        <form action={handleSubmit} className="multi-city-form">
            {flightLegs.map((leg, index) => (
                <div key={index} className="flight-leg">
                    <h3>Flight {index + 1}</h3>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor={`origin-${index}`}>Origin</label>
                            <input
                                type="text"
                                id={`origin-${index}`}
                                value={leg.origin}
                                onChange={(e) => handleLegChange(index, 'origin', e.target.value)}
                                required
                                placeholder="City or airport"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor={`destination-${index}`}>Destination</label>
                            <input
                                type="text"
                                id={`destination-${index}`}
                                value={leg.destination}
                                onChange={(e) => handleLegChange(index, 'destination', e.target.value)}
                                required
                                placeholder="City or airport"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor={`departureDate-${index}`}>Departure Date</label>
                            <input
                                type="date"
                                id={`departureDate-${index}`}
                                value={leg.departureDate}
                                onChange={(e) => handleLegChange(index, 'departureDate', e.target.value)}
                                required
                            />
                        </div>

                        {index > 1 && (
                            <button
                                type="button"
                                className="remove-leg-button"
                                onClick={() => removeFlightLeg(index)}
                            >
                                Remove
                            </button>
                        )}
                    </div>
                </div>
            ))}

            {flightLegs.length < 5 && (
                <button
                    type="button"
                    onClick={addFlightLeg}
                    className="add-leg-button"
                >
                    Add Another Flight
                </button>
            )}


            <Button variant={"solid"} type={"submit"} className={"solid-button"} size={"lg"}>Search Multi-City Flights</Button>
        </form>
    );
};

export default MultiCityForm;