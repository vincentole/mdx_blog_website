import { categories } from '#/src/settings/settings';

export function categoryToSlug(category: string) {
    return category.trim().replace(' ', '-').replace('.', '').toLowerCase();
}

export function categorySlugToCategory(categorySlug: string) {
    const allCategories = categories;
    const allCategoriesSlugs = allCategories.map((category) => categoryToSlug(category));
    const categoryIndex = allCategoriesSlugs.findIndex((slug) => slug === categorySlug);
    const category = allCategories[categoryIndex];

    return categoryIndex === -1 ? undefined : category;
}
