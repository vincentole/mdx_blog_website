import fs from 'fs';
import path from 'path';
import { bundleMDX } from 'mdx-bundler';
import { CategoriesUnion } from '#/src/types/types';
import { initialState } from '#/src/store/NumberOfPostsContext';

export interface FrontmatterBlog {
    title: string;
    description: string;
    category: CategoriesUnion;
    date: string;
    slug: string;
}

export async function getBlogData(folder: string) {
    const blogDir = path.join(process.cwd(), 'src', 'markdown', folder);
    const files = fs.readdirSync(blogDir);
    const numberOfPosts = { ...initialState };

    const posts = await Promise.all(
        files.map(async (filename) => {
            const markdownWithMeta = fs.readFileSync(path.join(blogDir, filename), 'utf-8');

            const result = await bundleMDX<FrontmatterBlog>({ source: markdownWithMeta });
            result.frontmatter.date = new Date(result.frontmatter.date).toISOString();

            const category = result.frontmatter.category;

            numberOfPosts[category] = numberOfPosts[category] ? (numberOfPosts[category] += 1) : 1;
            numberOfPosts['DevBlog'] = numberOfPosts['DevBlog']
                ? (numberOfPosts['DevBlog'] += 1)
                : 1;

            return result;
        }),
    );

    return { numberOfPosts, posts };
}
