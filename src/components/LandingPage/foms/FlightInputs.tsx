'use client'

import Button from "@/components/ui/Button";
import { Autocomplete, AutocompleteItem, DatePicker, Select, SelectItem } from "@heroui/react";
import { FaRegUser } from "react-icons/fa";

export const animals = [
    { label: "Cat", key: "cat", description: "The second most popular pet in the world" },
    { label: "Dog", key: "dog", description: "The most popular pet in the world" },
    { label: "Elephant", key: "elephant", description: "The largest land animal" },
    { label: "Lion", key: "lion", description: "The king of the jungle" },
    { label: "Tiger", key: "tiger", description: "The largest cat species" },
    { label: "Giraffe", key: "giraffe", description: "The tallest land animal" },

];

export default function FlightInputs() {
    return (
        <div className="w-full flex flex-col gap-9 p-4">
            <div className="flex items-center gap-5">
                <Select
                    className="max-w-40"
                    variant="underlined"
                    size="md"
                    defaultSelectedKeys={["one-way"]}
                >
                    <SelectItem key="one-way">One way</SelectItem>
                    <SelectItem key="round-trip">Round trip</SelectItem>
                    <SelectItem key="multi-city">Multi-city</SelectItem>

                </Select>

                <Select
                    className="max-w-40"
                    variant="underlined"
                    size="md"
                    defaultSelectedKeys={["economy"]}>
                    <SelectItem key="economy">Economy</SelectItem>
                    <SelectItem key="business">Business</SelectItem>
                    <SelectItem key="first">First</SelectItem>
                    <SelectItem key="premium">Premium</SelectItem>
                    <SelectItem key="luxury">Luxury</SelectItem>

                </Select>

                <Select
                    classNames={{
                        trigger: "w-32",
                        listbox: "max-w-52",
                        listboxWrapper: "max-w-52",
                      }}
                    variant="underlined"
                    size="md"
                    startContent={<FaRegUser />}
                >
                    <SelectItem>
                        <div className="flex items-center justify-between">
                            <p>Adult</p>
                            <div className="flex items-center gap-2">
                                <button className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-700">-</button>
                                <p>0</p>
                                <button className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-700">+</button>
                            </div>
                        </div>
                    </SelectItem>
                    <SelectItem>
                        <div className="flex items-center gap-2 justify-between">
                            <p>Children<span className="block">2 - 11</span></p>
                            <div className="flex items-center gap-2">
                                <button className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-700">-</button>
                                <p>0</p>
                                <button className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-700">+</button>
                            </div>
                        </div>
                    </SelectItem>
                    <SelectItem>
                        <div className="flex items-center gap-2 justify-between">
                            <p>Infant<span className="block">In seat</span></p>
                            <div className="flex items-center gap-2">
                                <button className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-700">-</button>
                                <p>0</p>
                                <button className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-700">+</button>
                            </div>
                        </div>
                    </SelectItem>
                    <SelectItem>
                        <div className="flex items-center gap-2 justify-between">
                            <p>Infant<span className="block">On lap</span></p>
                            <div className="flex items-center gap-2">
                                <button className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-700">-</button>
                                <p>0</p>
                                <button className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-700">+</button>
                            </div>
                        </div>
                        <div>
                           <Button variant="ghost" className="">Cancel</Button>
                           <Button variant="ghost" className="">Done</Button>
                        </div>
                    </SelectItem>
                </Select>
            </div>

            <div className="w-full flex items-center gap-5">
                <Autocomplete className="max-w-xs" label="From ?">
                    {animals.map((animal) => (
                        <AutocompleteItem key={animal.key}>{animal.label}</AutocompleteItem>
                    ))}
                </Autocomplete>
                <Autocomplete className="max-w-xs" label="To ?">
                    {animals.map((animal) => (
                        <AutocompleteItem key={animal.key}>{animal.label}</AutocompleteItem>
                    ))}
                </Autocomplete>
                <DatePicker
                    color={"default"}
                    className=""
                    size="md"
                    label={"Depature date"}

                />

                <DatePicker
                    color={"default"}
                    className=""
                    label={"Return date"}
                    size="md"
                />



                <div className="w-full">
                    <Button variant="solid" className="">Search Flights</Button>
                </div>
            </div>

        </div>
    )
}