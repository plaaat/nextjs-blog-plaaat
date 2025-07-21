import type { GetServerSidePropsContext } from 'next';

type PostSummary = {
    contentnum: number;
    title: string;
    content: string;
    date: string;
    category: string;
};

function genSiteMap(posts: PostSummary[]) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url><loc>https://blog.plaaa.at</loc></url>
     <url><loc>https://blog.plaaa.at/about</loc></url>
     <url><loc>https://blog.plaaa.at/posts</loc></url>
     ${posts
        .map(({ contentnum }) => {
            return `<url><loc>https://blog.plaaa.at/posts/${contentnum}</loc></url>`;
        })
        .join('')}
   </urlset>
    `
}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
    const response = await fetch('https://api.plaaa.at/blog/posts.json');
    const posts: PostSummary[] = await response.json();

    res.setHeader('Content-Type', 'text/xml');
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
    res.write(genSiteMap(posts));
    res.end();

    return {
        props: {},
    };
}

export default function Sitemap() {
}