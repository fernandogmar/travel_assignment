import { TravelCountryDestionations } from "./TravelCountryDestinations";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StoryFn } from "@storybook/react";
import { rest } from "msw";
import mockCountryDestinations from "@/assets/mockCountryDestinations.json";

const queryClient = new QueryClient();

export default {
  title: "exoticca/TravelCountryDestinations",
  component: TravelCountryDestionations,
  tags: ["autodocs"],
  decorators: [
    (Story: StoryFn) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
};

export const Default = {
  parameters: {
    msw: {
      handlers: [
        rest.get(
          "https://api-us.exoticca.com/api/landing/v2/country/botswana",
          (_, res, ctx) => res(ctx.json(mockCountryDestinations))
        ),
      ],
    },
  },
};