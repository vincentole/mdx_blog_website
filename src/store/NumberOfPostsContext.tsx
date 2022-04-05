import React from 'react';
import { NumberOfPosts } from '#/src/types/types';
import { categories } from '#/src/settings/settings';

export const initialState = Object.fromEntries(
    categories.map((item) => [item, 0]),
) as NumberOfPosts;

export const NumberOfPostsContext = React.createContext<NumberOfPosts>(initialState);
