import { NextResponse } from "next/server";
import path from "path";
import fs from "fs"

async function loadAirports() {
    try {
        // we are getting the file path of the json file
        const filePath = path.join(process.cwd(), 'public', 'airports.json');
        // reading the file content
        const fileContent = fs.readFileSync(filePath, 'utf8');
        // parsing the file content to json
        return JSON.parse(fileContent);

    } catch (error) {
        console.error('Error loading airports data:', error);
        throw new Error('Failed to load airports data');
    }
}

export async function GET (request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const search = searchParams.get('search') || '';
        const limit = searchParams.get('limit') || 20;

        //load the airport data
        const airports = await loadAirports();

        let filteredAirports = [...airports];

        console.log('filtering search params', search)

        // Only filter if search is not an empty string
        if (search.trim()) {
            const searchTerm = search.toLowerCase();
            filteredAirports = filteredAirports.filter(airport => {
                // Safely convert municipality to string before using toLowerCase
                const municipality = airport.municipality ? String(airport.municipality).toLowerCase() : '';
                const iataCode = airport.iata_code ? String(airport.iata_code).toLowerCase() : '';
                const name = airport.name ? String(airport.name).toLowerCase() : '';

                return municipality.includes(searchTerm) ||
                    iataCode.includes(searchTerm) ||
                    name.includes(searchTerm);
            });
        }

        // Apply limit
        filteredAirports = filteredAirports.slice(0, Number(limit));

        return NextResponse.json({
            success: true,
            count: filteredAirports.length,
            data: filteredAirports
        });


    } catch (error: any) {
        console.error('API Error:', error);
        return NextResponse.json(
            {
                success: false,
                error: error.message || 'Internal Server Error'
            },
            { status: 500 }
        );
    }
}