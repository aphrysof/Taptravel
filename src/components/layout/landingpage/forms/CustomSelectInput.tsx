'use client'

import React, { useState } from "react";
import { Select, SelectItem } from "@heroui/react";
import { FaRegUser } from "react-icons/fa";

const CustomSelectInput = () => {
    const adultCount = 1
    const [isOpen, setIsOpen] = useState(false);


    return (
        <Select
            classNames={{
                trigger: "max-w-44",
            }}
            variant="underlined"
            selectedKeys={["adult"]}
            isOpen={isOpen}
            onOpenChange={setIsOpen}
            startContent={<FaRegUser />}
            listboxProps={{
                itemClasses: {
                    base: [
                        "rounded-md",
                        "text-default-500",
                        "transition-opacity",
                        "data-[hover=true]:text-foreground",
                        "data-[hover=true]:bg-default-100",
                        "dark:data-[hover=true]:bg-default-50",
                        "data-[selectable=true]:focus:bg-default-50",
                        "data-[pressed=true]:opacity-70",
                        "data-[focus-visible=true]:ring-default-500",
                    ]
                },

            }}
            popoverProps={{
                classNames: {
                    base: "before:bg-default-200",
                    content: "p-0 border-small border-divider bg-background",
                },
            }}
            renderValue={() => `${adultCount} Adult${adultCount !== 1 ? 's' : ''}`}
        >
            <SelectItem
                classNames={{
                    selectedIcon: "hidden"
                }}
                key="adult"
                textValue="Adult Counter">
                <div className="flex items-center justify-between w-full py-2">
                    <p>Adult</p>
                    <div className="flex items-center gap-2">
                        <button
                            className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-700"
                        >
                            -
                        </button>
                        <p>{adultCount}</p>
                        <button
                            className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-700"
                        >
                            +
                        </button>
                    </div>
                </div>
            </SelectItem>
        </Select>
    );
};

export default CustomSelectInput;
