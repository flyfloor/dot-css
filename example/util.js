import {NS} from './setting';
import React from 'react';

export const CN = (className) => {
    return `${NS} ${className}`
};

export const TitleBlock = (name, content) => {
    content = content || `Content about ${name}`
    return (
        <div>
            <h3>{name}</h3>
            <blockquote className={CN('blockquote')}>
                <p>{content}</p>
            </blockquote>
        </div>
    )
}