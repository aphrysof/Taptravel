'use client'

import { useState } from 'react';
import {RiFlightTakeoffLine} from "react-icons/ri";


const TabsContainer = ({ tabs }: TabsProps) => {
    const [activeTabId, setActiveTabId] = useState(tabs[0]?.id || '');

    return (
        <div className="w-full">
            <div className="flex border-b border-gray-200 w-52 bg-white rounded-t-xl  p-5 items-center justify-center">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTabId(tab.id)}
                        className={`text-sm font-medium focus:outline-none
                         bg-[#223a60] text-white flex items-center justify-center gap-3 px-8 py-3 rounded-lg`}
                        role="tab"
                        aria-selected={activeTabId === tab.id}

                    >
                        <RiFlightTakeoffLine size={32} /> {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="py-8 bg-white rounded-b-xl px-8 rounded-tr-xl">
                {tabs.map(
                    (tab) =>
                        activeTabId === tab.id && (
                            <div
                                key={tab.id}
                                role="tabpanel"
                                aria-labelledby={`tab-${tab.id}`}
                            >
                                {tab.content}
                            </div>
                        )
                )}
            </div>
        </div>
    );
};

export default TabsContainer;