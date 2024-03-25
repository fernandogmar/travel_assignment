import { Tag } from "./Tag";

export default {
    title: 'exoticca/Tag',
    component: Tag,
    tags: ['autodocs']
};

export const Default = {
    args: {
        children: 'Nature',
        type: 'default'
    }
};

export const Highlight = {
    args: {
        children: 'Group tours',
        type: 'highlight'
    }
}