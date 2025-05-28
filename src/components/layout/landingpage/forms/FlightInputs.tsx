'use client'

import React, {useState} from "react";
import {Autocomplete, AutocompleteItem, Button, DatePicker, Select, SelectItem} from "@heroui/react";
import {CustomSelectInput, MultiCityForm, OneWayForm, RoundTripForm} from "@/components";
import { useAsyncList } from "@react-stately/data";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

interface FlightFormData {
    // Common fields
    passengers: number;
    class: string;
    // Type-specific fields will be handled in their respective forms
}



export default function FlightInputs() {

            const [tripType, setTripType] = useState<string>("one-way");
            const [formData, setFormData] = useState<FlightFormData>({
                passengers: 1,
                class: 'economy'
            });


        // This function will be passed to child forms to receive their data
        const handleFormSubmit = (formType: string, typeSpecificData: any) => {
            const completeFormData = {
                tripType: formType,
                ...formData,
                ...typeSpecificData
            };

            console.log('Submitting form data:', completeFormData);
            submitFlightSearch(completeFormData);
        };

        // Mock function to simulate API call
        const submitFlightSearch = async (data: any) => {
            try {
                setTimeout(() => {
                    alert(`Successfully submitted ${tripType} flight search!`);
                }, 500);
            } catch (error) {
                console.error('Error submitting flight search:', error);
            }
        };

        // Handle common form data changes
        const handleCommonDataChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };


        const renderTripForm = () => {
            switch(tripType) {
                case "one-way":
                    return <OneWayForm
                        onSubmit={(data) => handleFormSubmit("one-way", data)}
                        commonData={formData}
                    />;
                case "round-trip":
                    return <RoundTripForm
                        onSubmit={(data) => handleFormSubmit("round-trip", data)}
                        commonData={formData}
                    />;
                case "multi-city":
                    return <MultiCityForm
                        onSubmit={(data) => handleFormSubmit("multi-city", data)}
                        commonData={formData}
                    />;
                default:
                    return <OneWayForm
                        onSubmit={(data) => handleFormSubmit("one-way", data)}
                        commonData={formData}
                    />;
            }
        };

        return (
        <div className="w-full flex flex-col gap-9 p-4" >
            <div className="flex items-center gap-5">
                <Select
                    className="max-w-40"
                    variant="underlined"
                    size="md"
                    selectedKeys={[tripType]}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        setTripType(e.target.value);
                    }}
                >
                    <SelectItem key="one-way">One way</SelectItem>
                    <SelectItem key="round-trip">Round trip</SelectItem>
                    <SelectItem key="multi-city">Multi-city</SelectItem>

                </Select>

                <Select
                    className="max-w-40"
                    variant="underlined"
                    size="md"
                    selectedKeys={[formData.class]}
                    onChange={handleCommonDataChange}
                >
                    <SelectItem key="economy">Economy</SelectItem>
                    <SelectItem key="business">Business</SelectItem>
                    <SelectItem key="first">First</SelectItem>
                </Select>
             <CustomSelectInput />
            </div>

            <div className="w-full flex items-center gap-5">
                { renderTripForm() }
            </div>

        </div>
    )
}
