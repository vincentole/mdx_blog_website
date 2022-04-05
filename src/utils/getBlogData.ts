import fs from 'fs';
import path from 'path';
import { bundleMDX } from 'mdx-bundler';
import { CategoriesUnion } from '#/src/types/types';
import { initialState } from '#/src/store/NumberOfPostsContext';

const blogDir = path.join(process.cwd(), 'src', 'markdown', 'blog');

const files = fs.readdirSync(blogDir);

export interface Frontmatter {
    title: string;
    description: string;
    group: string;
    category: CategoriesUnion;
    date: string;
    slug: string;
}

export async function getBlogData() {
    const numberOfPosts = initialState;

    const posts = await Promise.all(
        files.map(async (filename) => {
            const markdownWithMeta = fs.readFileSync(path.join(blogDir, filename), 'utf-8');

            const result = await bundleMDX<Frontmatter>({ source: markdownWithMeta });
            result.frontmatter.date = new Date(result.frontmatter.date).toISOString();

            const category = result.frontmatter.category;

            numberOfPosts[category] = numberOfPosts[category] ? (numberOfPosts[category]! += 1) : 1;
            numberOfPosts['DevBlog'] = numberOfPosts['DevBlog']
                ? (numberOfPosts['DevBlog'] += 1)
                : 1;

            return result;
        }),
    );

    return { numberOfPosts, posts };
}
