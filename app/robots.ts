import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/thanks'],
        },
        sitemap: 'https://www.terreoak.ca/sitemap.xml',
    }
}
