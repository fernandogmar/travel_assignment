import React, { Children, ReactNode } from "react";
import styles from './ListWithLimit.module.css';

type ListWithLimitProps = {
    children: ReactNode,
    limit: number
}

export const ListWithLimit : React.FC<ListWithLimitProps> = ({ children, limit }) => {
    // limit is exactly the number of elements to be shown in the list
    // but if the limit is exceeded the line that shows the leftover is counted as one element
    const allChildren = Children.toArray(children);
    const leftoverCount = (limit < allChildren.length) ? allChildren.length - (limit - 1) : null;
    const limitedChildren = (leftoverCount) ? allChildren.slice(0, (limit - 1)) : allChildren;

    return (
        <ul className={ styles.list }>
            { 
                limitedChildren.map((child, position) => (
                    <li className={ styles.listItem } key={ position }>{ child }</li>
                ))
            }
            { leftoverCount && (<li className={ styles.listName } key="leftover">+ {leftoverCount} more</li>)}
        </ul>
    );
} 