import React from 'react';
import { DestinationPriceDetail } from '@/models/Destination';
import styles from './TravelPriceDetail.module.css';

type TravelPriceDetailProps = {
    priceDetail: DestinationPriceDetail
};

export const TravelPriceDetail : React.FC<TravelPriceDetailProps> = ({ priceDetail }) => {
    return (
        <div className={ styles.detailWrapper }>
            <div className={ styles.detailPercentage }>{ priceDetail.pricingPercentage }</div>
            <div className={ styles.detailOld }>From <span className={ styles.detailOldPrice }>{ priceDetail.oldPriceBeautify }</span></div>
            <div className={ styles.detailFrom }>{ priceDetail.fromPriceBeautify }</div>
            <div className={ styles.detailPerNight }>Per night { priceDetail.pricePerNight }</div>
        </div>
    );
};