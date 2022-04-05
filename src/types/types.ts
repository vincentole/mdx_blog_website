import { categories } from '#/src/settings/settings';

export type CategoriesUnion = typeof categories[number];
export type NumberOfPosts = { [K in CategoriesUnion]: number };
