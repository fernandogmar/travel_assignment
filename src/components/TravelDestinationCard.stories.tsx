import { TravelDestinationCard } from './TravelDestinationCard';
import mockCountryDestinations from "@/assets/mockCountryDestinations.json";

const mockDestination = mockCountryDestinations.destinations.multiMarket[0];

export default {
    title: 'exoticca/TravelDestinationCard',
    component: TravelDestinationCard,
    tags: ['autodocs']
};

export const Default = {
    args: {
        destination: mockDestination
    }
};