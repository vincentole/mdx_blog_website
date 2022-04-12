<div id="top"></div>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url] [![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url] [![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url] [![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/vincentole/mdx_blog_website">
    <img src="github/Logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">MDX Blog Website</h3>

  <p align="center">
    A responsive and static blog website with category functionality, portfolio section and more.
    <br />
    <br />
    <a href="https://github.com/vincentole/mdx_blog_website"><strong>Explore the code »</strong></a>
    <br />
    <br />
    <a href="https://mdx-blog-website-chi-flame.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/vincentole/mdx_blog_website/issues">Report Bug</a>
  
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary><b>Table of Contents</b></summary>
  <br/>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#highlights-of-what-i-learned">Highlights of What I Learned</a></li>
        <li><a href="#roadmap--continued-development">Roadmap & Continued Development</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>
<br />

<!-- ABOUT THE PROJECT -->

## About The Project

<br />

[![Rustica Coffee Website Screen Shot][product-screenshot]](https://rustica-coffee-website.vercel.app/)

<br />

MDX Blog Website is a statically generated blog. Blog posts can be grouped into categories
accessible from the sidebar. It is also possible to add individual pages based on mdx and group them
into categories. Each individual page shows linked tags of the other pages within its category for
easier access. In addition to Markdown pages, there are three other sections: Who Am I, Portfolio
and Contact, which offer the possibility to display additional author information.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

type script tailwind react next mdx bundler mdx gray matter

-   [TypeScript](https://www.typescriptlang.org/)
-   [Next.js](https://nextjs.org/)
-   [React.js](https://reactjs.org/)
-   [TailwindCSS](https://tailwindcss.com/)
-   [MDX](https://mdxjs.com/)
-   [MDX Bundler](https://github.com/kentcdodds/mdx-bundler)
-   [Gray Matter](https://github.com/jonschlinkert/gray-matter)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- What I learned -->

### Highlights of What I Learned

In this section, I highlight a few code snippets that I find valuable. Please refer to the
[section below](#roadmap--continued-development) for more concepts and features I implemented.

#### Get Blog Data (markdown, metadata, category count)

This function is the core logic of the blog. First, the frontmatter metadata interface is defined
according to the metadata used in the actual `.mdx` file. In the function, I set the path to the
folder that contains the blog entries, where the last `folder` name can be adjusted as needed via
the function argument. Then I initialize the `numberOfPosts` as an object containing all categories
and the value 0 as a field value. Since the map function is asynchronous, I use `Promise.all()` to
await all promises. Inside the map function, I return the output code and metadata output using
mdx-bundler and simulatively increment the number of blog entries within the specified category.
Note: The date is reformatted to an ISO string because of a type error.

The final output is an object with `numberOfPosts` containing the number of posts per category and
the object `posts` containing the code and metadata of each post.

```ts
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
```

This is an example of the `NumberOfPosts` used for the `numberOfPosts` object for reference:

```ts
type NumberOfPosts = {
    Algorithms: number;
    'React.js': number;
    'Next.js': number;
};
```

#### Generating Blog Post Lists

With `getStaticProps` data can be passed to statically generated pages. Here I get the blog data
from the function `getBlogData`, which I showed in more detail above. I then use type guards to make
sure I have a category slug with a string type, otherwise a 404 page is returned. Next, the category
slug is converted to the into the actual category name, and again type-checking is required to
ensure that this category exists. Finally, I either return the metadata for all posts if the
category `devblog` was chosen, or I only return the metadata for the appropriate category. All posts
are sorted by date, with new posts first. To understand this, notice the `-(...)` around
`new Date(a.date).getTime() - new Date(b.date).getTime()`.

```ts
export async function getStaticProps(context: GetStaticPropsContext) {
    const { numberOfPosts, posts } = await getBlogData('blog');

    if (!context.params || !context.params.category || Array.isArray(context.params.category)) {
        return {
            notFound: true,
        };
    }

    const contextCategory = context.params.category;
    const category = categorySlugToCategory(contextCategory);

    if (!category) {
        return {
            notFound: true,
        };
    }

    if (contextCategory === 'devblog') {
        const frontmatterSorted = posts
            .map((post) => post.frontmatter)
            .sort((a, b) => -(new Date(a.date).getTime() - new Date(b.date).getTime()));

        return { props: { numberOfPosts, frontmatterSorted, category: 'DevBlog' } };
    } else {
        const frontmatterSorted = posts
            .map((post) => post.frontmatter)
            .filter((post) => categoryToSlug(post.category) === contextCategory)
            .sort((a, b) => -(new Date(a.date).getTime() - new Date(b.date).getTime()));

        return { props: { numberOfPosts, frontmatterSorted, category } };
    }
}
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Roadmap & Continued Development -->

### Roadmap & Continued Development

-   [x] TypeScript
-   [x] Reusable components
-   [x] Dynamic routes
-   [x] Transitions
-   [x] Responsive sidebar
-   [x] Number of blog posts by category
-   [x] Blog post pages via mdx
-   [x] Single pages via mdx
-   [x] Show links to other single pages of the same category

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these steps.

### Installation

1.  Clone the repo <br/>

        ```sh
        git clone https://github.com/vincentole/mdx_blog_website.git
        ```

2.  Install packages <br/>

    npm

    ```sh
    npm install
    ```

    yarn

    ```sh
    yarn
    ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

### Usage

You can run the project in a local environment as follows:

npm

```sh
npm run dev
```

yarn

```sh
yarn dev
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `github/LICENSE.md` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Ole Urfels (vincentole):

-   [@vincent_ole](https://twitter.com/@vincent_ole)
-   [LinkedIn](https://www.linkedin.com/in/ole-urfels/)

Project Link:
[https://github.com/vincentole/mdx_blog_website](https://github.com/vincentole/mdx_blog_website)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]:
    https://img.shields.io/github/contributors/vincentole/mdx_blog_website.svg?style=for-the-badge
[contributors-url]: https://github.com/vincentole/mdx_blog_website/graphs/contributors
[forks-shield]:
    https://img.shields.io/github/forks/vincentole/mdx_blog_website.svg?style=for-the-badge
[forks-url]: https://github.com/vincentole/mdx_blog_website/network/members
[stars-shield]:
    https://img.shields.io/github/stars/vincentole/mdx_blog_website.svg?style=for-the-badge
[stars-url]: https://github.com/vincentole/mdx_blog_website/stargazers
[issues-shield]:
    https://img.shields.io/github/issues/vincentole/mdx_blog_website.svg?style=for-the-badge
[issues-url]: https://github.com/vincentole/mdx_blog_website/issues
[license-shield]:
    https://img.shields.io/github/license/vincentole/mdx_blog_website.svg?style=for-the-badge
[license-url]: https://github.com/vincentole/mdx_blog_website/blob/master/github/LICENSE.md
[linkedin-shield]:
    https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/ole-urfels
[product-screenshot]: github/preview.png
