import { TravelPriceDetail } from "./TravelPriceDetail";
import { Default as CardDefault } from '@/components/TravelDestinationCard.stories';

const mockPriceDetail = CardDefault.args.destination.priceDetail;

export default {
    title: 'exoticca/TravelPriceDetail',
    component: TravelPriceDetail,
    tags: ['autodocs']
};

export const Default = {
    args: {
        priceDetail: mockPriceDetail
    }
}