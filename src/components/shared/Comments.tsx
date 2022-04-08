import Giscus from '@giscus/react';

export default function Comments() {
    return (
        <section className='article'>
            <div className='max-w-prose mx-auto'>
                <p className='pb-4'>
                    This blog uses <span className='italic'>Incremental Static Regeneration</span>.
                    Therefore, comments or reactions may not be visible immediately.
                </p>
                <Giscus
                    repo='vincentole/personal_website'
                    repoId='R_kgDOHGWZGw'
                    category='Announcements'
                    categoryId='DIC_kwDOHGWZG84COeLW'
                    mapping='pathname'
                    reactionsEnabled='1'
                    emitMetadata='0'
                    inputPosition='top'
                    theme='light'
                    lang='en'
                />
            </div>
        </section>
    );
}
