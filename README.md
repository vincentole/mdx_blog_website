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
    <a href="https://rustica-coffee-website.vercel.app/">View Demo</a>
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

Rustica Coffee Website is a website with an integrated store. The coffee shop is imaginary and the
project was created for learning purposes. The website has a contact form integrated with formspree
and formik, a random products section, a store subpage (among others), as well as an interactive
shopping cart. In addition, the site is fully responsive and uses Next.js's integrated image
optimization. The products' data is pulled from graphcms via their GraphQL API.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

-   [TypeScript](https://www.typescriptlang.org/)
-   [Next.js](https://nextjs.org/)
-   [React.js](https://reactjs.org/)
-   [Redux](https://redux.js.org/)
-   [Redux Toolkit](https://redux-toolkit.js.org/)
-   [TailwindCSS](https://tailwindcss.com/)
-   [headlessUI](https://headlessui.dev/)
-   [Formik](https://formik.org/)
-   [Formspree](https://formspree.io/)
-   [GraphQL](https://graphql.org/) via [graphcms](https://graphcms.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- What I learned -->

### What I Learned

I present to you my first major project using Next.js and form integration.

In this section, I highlight a few code snippets that I find valuable. Please refer to the
[section below](#roadmap--continued-development) for more concepts and features I implemented.

#### Animation

Animating a component once based on a dependency, here `amountCartItems`.

```tsx
// ... //
const [animate, setAnimate] = useState(false);

useEffect(() => {
    setAnimate(true);
    // timing should be equivalent to animation timing
    const timeout = setTimeout(() => setAnimate(false), 350);
    return () => clearTimeout(timeout);
}, [amountCartItems]);

return (
    <button
        // ... //
        className={` ${className} ${animate && 'animate-pop-once'}`}
    >
        {/* ... */}
    </button>
);
```

#### Typescript

Using discriminating unions to specify mandatory types based on the button type.

```ts
type PropsLink = {
    label: string;
    secondary?: boolean;

    type: 'link';
    href: string;
};

type PropsAnchor = {
    label: string;
    secondary?: boolean;

    type: 'anchor';
    anchorId: string;
};

type PropsButton = {
    secondary?: boolean;

    type: 'button';
    btnType: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    onClick?: () => void;
};

type Props = PropsLink | PropsAnchor | PropsButton;
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Roadmap & Continued Development -->

### Roadmap & Continued Development

-   [x] TypeScript
    -   [x] Reusable types
    -   [x] Generic types
    -   [x] Discriminating unions
-   [x] Reusable components
-   [x] Dynamic routes
-   [x] API routes
-   [x] Animations
-   [x] Transitions
-   [x] Interactive cart
    -   [x] Dynamic product amount
    -   [x] Add items from shop subpage
    -   [x] Add further items from within cart overlay (set to amount++)
    -   [x] Remove items from within cart overlay (set to amount--)
    -   [x] Remove complete product (set amount = 0)
    -   [x] Show number of products added since last opened cart overlay
    -   [x] Show product total
    -   [x] Show cart total
-   [x] Shop subpage
    -   [x] Add different variants of the product via a form
    -   [x] Get product data dynamically
-   [x] Contact Form
    -   [x] Error handling and frontend validation
    -   [x] Hidden API Key via Next.js's API Route
-   [x] Fetch data from external DB with GraphQL

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these steps.

### Installation

1.  Get a free formspree API Key at [https://formspree.io/](https://formspree.io/)
2.  Setup a project for free at [graphcms](https://graphcms.com/) and create a schema according to
    the `shopItemDetailsType.ts`:

    ```ts
    type ShopItemDetailsType = {
        id: string;
        slug: string;
        title: string;
        allPrices: number[];
        aroma: string;
        cookingUtilities: string[];
        allVariants: string[];
        allWeights: number[];
        summary: string;
        description: string;
        readyForDelivery: boolean;
        image: { url: string };
    };

    export default ShopItemDetailsType;
    ```

    Note that images provided by _graphcms_ will automatically have a `url` field. Then generate a
    _Permanent Auth Token_.

3.  Clone the repo <br/>

        ```sh
        git clone https://github.com/vincentole/mdx_blog_website.git
        ```

4.  Install packages <br/>

    npm

    ```sh
    npm install
    ```

    yarn

    ```sh
    yarn
    ```

5.  Enter your API keys in `.env.local` <br/>

    ```js
    FORMSPREE_POST_API= Enter Your API KEY HERE
    GRAPHQL_CMS_ACCESS_TOKEN=FORMSPREE_POST_API = Enter Your API KEY HERE
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

-   [opencampus.sh](https://www.opencampus.sh/)

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
