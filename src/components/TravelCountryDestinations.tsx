import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCountryDestinations } from '@/services/api';


export const TravelCountryDestionations : React.FC = () => {
  const { isPending, isError, data: countryDestinations, error } = useQuery({ queryKey: ['destinations'], queryFn: getCountryDestinations })

  if (isPending) {
    return (<span>Loading...</span>);
  }

  if (isError) {
    return (<span>Error: {error.message}</span>);
  }

  // We can assume by this point that `isSuccess === true`
  return (
    <ul>
      {countryDestinations.multiMarket.map((destination) => (
        <li key={destination.id}>{destination.title}</li>
      ))}
    </ul>
  );
}