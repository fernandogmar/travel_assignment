import { ListWithLimit } from "./ListWithLimit";

export default {
    title: 'exoticca/ListWithLimit',
    component: ListWithLimit,
    tags: ['autodocs']
};

export const UnderLimit = {
    args: {
        limit: 5
    },
    render: ({ limit } : { limit: number}) =>  (
        <ListWithLimit  limit={limit}>
            <span>First item</span>
            <span>Second item</span>
        </ListWithLimit>
    )
};

export const OverLimit = {
    args: {
        limit: 5
    },
    render: ({ limit } : { limit: number}) =>  (
        <ListWithLimit  limit={limit}>
            <span>First item</span>
            <span>Second item</span>
            <span>Third item</span>
            <span>Fourth item</span>
            <span>Fifth item</span>
            <span>Sixth item</span>
        </ListWithLimit>
    )
};