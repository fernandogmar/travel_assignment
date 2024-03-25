import React, { ReactNode } from 'react';
import styles from './LinkButton.module.css';

type LinkButtonProps = {
    children: ReactNode;
    href: string;
};

export const LinkButton: React.FC<LinkButtonProps> = ({ href, children }) => {
    return (
        <a className={ styles.button } href={ href }>{ children }</a>
    );
};