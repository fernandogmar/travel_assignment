import React from "react";
import { Destination, selectDestinationImage, selectDestinationIncludesAsLabels } from "@/models/Destination";
import styles from "./TravelDestinationCard.module.css";
import { LinkButton } from "./LinkButton";
import { Tag } from "./Tag";
import { ListWithLimit } from "./ListWithLimit";
import { TravelPriceDetail } from "./TravelPriceDetail";

type TravelDestinationCardProps = {
  destination: Destination;
};

export const TravelDestinationCard: React.FC<TravelDestinationCardProps> = ({
  destination,
}) => {
  const limit = 5;
  const imageUrl = selectDestinationImage(destination).tablet;

  return (
    <div className={styles.card}>

      <img className={styles.image} src={imageUrl} />

      <div className={styles.details}>
        <div className={styles.detailsItem}>

          <div className={styles.detailsItemText}>
            <div className={styles.detailsDestination}>{destination.destination} in {destination.days} days</div>
            <div className={styles.detailsTitle}>{destination.title}</div>
            <div className={styles.detailsItemLists}>
                <ListWithLimit limit={limit}>
                    { destination.highlights.map((highlight) => <span>{ highlight.title }</span>) }
                </ListWithLimit>
                <ListWithLimit limit={limit}>
                    { selectDestinationIncludesAsLabels(destination).map((label) => <span className={styles.label}>{ label }</span>) }
                </ListWithLimit>
            </div>
          </div>

            <div>
                <TravelPriceDetail priceDetail={ destination.priceDetail }/>
            </div>
        </div>
        <div>
            <div className={styles.tags}>
                { destination.hasPrivateTour ? (<Tag type='highlight'>Private tours</Tag>) : (<Tag type='highlight'>Group tours</Tag>) }
                { destination.hasSoloTraveller ? (<Tag type='highlight'>Solo traveler</Tag>) : null }
                { destination.tags.map((tag) => (<Tag key={tag.tagId}>{tag.name}</Tag>)) }
            </div>
          <div>
            <LinkButton href={destination.url}>See trip</LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};
