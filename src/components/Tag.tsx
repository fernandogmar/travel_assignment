import React, { ReactNode } from "react";
import styles from './Tag.module.css';

type TagProps = {
    children: ReactNode;
    type?: 'default' | 'highlight'
}

export const Tag : React.FC<TagProps> = ({ children, type = 'default' }) => (
    <span className={ [ styles.tag, styles[`tag--${type}`] ].join(' ')}>{ children }</span>
);