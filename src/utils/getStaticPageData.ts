import fs from 'fs';
import path from 'path';
import { bundleMDX } from 'mdx-bundler';
import { CategoriesUnion } from '#/src/types/types';
import { initialState } from '#/src/store/NumberOfPostsContext';

export interface FrontmatterSinglePage {
    title: string;
    description: string;
    date: string;
    groupSlug: string;
    slug: string;
}

export async function getStaticPageData(folder: string) {
    const blogDir = path.join(process.cwd(), 'src', 'markdown', folder);
    const files = fs.readdirSync(blogDir);

    const posts = await Promise.all(
        files.map(async (filename) => {
            const markdownWithMeta = fs.readFileSync(path.join(blogDir, filename), 'utf-8');

            const result = await bundleMDX<FrontmatterSinglePage>({ source: markdownWithMeta });
            result.frontmatter.date = new Date(result.frontmatter.date).toISOString();

            return result;
        }),
    );

    return { posts };
}
