import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getCountryDestinations } from "@/services/api";
import { TravelDestinationCard } from "@/components/TravelDestinationCard";
import exoticcaLogo from '@/assets/exoticca-logo.png';
import styles from "./TravelCountryDestinations.module.css";

export const TravelCountryDestionations: React.FC = () => {
  const {
    isPending,
    isError,
    data: countryDestinations,
    error,
  } = useQuery({ queryKey: ["destinations"], queryFn: getCountryDestinations });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  // We can assume by this point that `isSuccess === true`
  return (
    <>
        <div className={styles.header}><img className={styles.logo} src={exoticcaLogo}/></div>
        
        <div className={styles.section}>
            <h1 className={styles.title}>
                Our recommendation to visit {countryDestinations.name} and neighboring
                countries
            </h1>
            {countryDestinations.featuredMultiMarket.map((destination) => (
                <TravelDestinationCard destination={destination} />
            ))}
        </div>

        <div className={styles.section}>
            <h1 className={styles.title}>
                Multi country vacation packages including {countryDestinations.name}
            </h1>
            {countryDestinations.multiMarket.map((destination) => (
                <TravelDestinationCard destination={destination} />
            ))}
        </div>
    </>
  );
};
