# **Taptravel: End-to-End System Architecture**

### Problem Statement:

Modern travelers face a fragmented and stressful planning experience, juggling multiple apps and websites to book flights, arrange ground transport, and purchase insurance only to then manually organize itineraries and track deadlines. This disjointed process leads to **overwhelm, missed details, and wasted time**, with no unified tool to intelligently plan, book, and manage trips from start to finish. Taptravel aims to solve that. So what is Taptravel?

**TapTravel** is an AI-agent-powered travel planning platform that simplifies every step of the journey  from flight discovery to curated itineraries, accommodations, and mobility all orchestrated within a single seamless experience. The app also supports optional post-booking insurance via redirect.

**Mission**: 

Our mission is to  simplify and elevate the travel experience by combining intelligent agents, curated itineraries, and seamless bookings all in one intuitive platform. Our mission is to remove the friction of trip planning so travelers can focus on what truly matters: exploring, discovering, and enjoying the journey.

 ## **User Flow (Solo Traveler - v1)**

### 1. Enter Travel Details

- User provides origin, destination, and travel dates
- Input passed to AI Orchestrator to initiate planning session

### 2. Get Flight Recommendations

- Orchestrator invokes Flight Agent
- Flight Agent fetches available flights using external API
- Top flight options shown to user

### 3. Select Flight

- User selects preferred flight
- Selection is cached (soft-held) in Firestore

### 4. Attach a Curated Itinerary

- User can:
    - Choose from AI-recommended itineraries (based on interests, trip length)
    - Or generate a new itinerary via LLM (custom query)
- Selected itinerary is saved to trip session

### 5. Add Optional Services

- User is offered:
    - Lodging options via Lodging Agent
    - Micro-mobility (bike/scooter) via Mobility Agent
- Chosen services are held and stored

### 6. Review & Pay

- Unified checkout screen with all selected services
- Stripe checkout session is created
- On payment success, selections are confirmed

### 7. Post-Checkout Insurance Redirect

- After successful booking, user is presented with an option to purchase travel insurance

After payment succeeds, show a confirmation screen like:

> “Your trip is booked! Want to protect it with travel insurance? We recommend [Insurance Partner].”
> 

Include a **CTA button** that opens:

- A prefilled link (destination, dates, traveler age)
- Or an affiliate-tracked URL

### 8. Trip Summary & Notifications

- User sees final trip summary screen
- Firebase Cloud Messaging is used for itinerary updates, check-in reminders, etc.

## 2. 🤖 Architecture Overview

- **Frontend**: Next.js with TailwindCSS and React Query
- **Backend**: Firebase Functions (serverless agents and orchestration)
- **Database**: Firestore (user trips, selections, itineraries)
- **Payments**:  Still deciding.
- **AI/LLM**: Gemini API for itinerary generation
- **APIs**:
    - Flights:  SerpeApi (Google flights)
    - Hotels:  SerpeApi (Google Hotels)
    - Mobility:  (Haven’t found any will use mock data for starters)
    - Insurance: Redirect to insurance platforms using affliliate links. Pass user data via query params for a smoother transitiion.

## 3. 🧠 AI Agent System

### What is the AI Orchestrator?

The **AI Orchestrator** is the central brain of TapTravel’s system. It acts like a smart travel concierge, coordinating between various specialized agents based on the user's journey stage. It handles:

- Routing user input to the correct agents (flights, itineraries, lodging, mobility)
- Managing the overall flow of the planning and booking experience
- Aggregating and storing results in Firestore
- Initiating fallback or retry mechanisms if agent responses fail
- Ensuring the user's experience feels seamless and continuous

This orchestrator is implemented as a serverless Firebase Function and is triggered every time a key user action occurs (e.g., submitting travel details, selecting a flight, etc.).

**AI Orchestrator Agent** delegates to specialized task agents:

- **Flight Agent**: Gets live flight data
- **Itinerary Agent**: Crafts or fetches trip plans using LLMs
- **Lodging Agent**: Searches hotels
- **Mobility Agent**: Finds bikes, scooters, car rentals

Each agent is modular and communicates through cloud functions.
