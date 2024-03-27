import { CountryDestinations } from "@/models/CountryDestinations";
import { Destination } from "@/models/Destination";

type CountryDTO = {
  name: string;
  destinations: {
    featuredMultiMarket: Destination[];
    multiMarket: Destination[];
    [key: string]: any;
  };
  [key: string]: any;
};

const fromResponse = (response: CountryDTO): CountryDestinations => ({
  name: response.name,
  featuredMultiMarket: response.destinations.featuredMultiMarket,
  multiMarket: response.destinations.multiMarket,
});

export const getCountryDestinations = async (): Promise<CountryDestinations> =>
  fetch("https://api-us.exoticca.com/api/landing/v2/country/botswana")
    .then((res) => res.json())
    .then(fromResponse);
