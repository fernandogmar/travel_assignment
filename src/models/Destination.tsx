export type DestinationHighlight = {
  title: string;
  url: string;
};

export type DestinationImage = {
  desktop: string;
  tablet: string;
  mobile: string;
};

export type DestinationPriceDetail = {
  fromPrice: number;
  fromPriceBeautify: string;
  discountSaved: number;
  oldPriceBeautify: string;
  pricingPercentage: number;
  pricePerNight: string;
  oldPrice: number;
};

export type DestinationTag = {
  alias: string;
  name: string;
  description: string;
  categoryName: string;
  uri: string;
  tagId: string;
};

export type Destination = {
  id: number;
  title: string;
  destination: string;
  images: DestinationImage[];
  days: number;
  url: string;
  highlights: DestinationHighlight[];
  includes: string[];
  priceDetail: DestinationPriceDetail;
  tags: DestinationTag[];
  hasPrivateTour: boolean;
  hasSoloTraveller: boolean;
  [key: string]: any;
};
