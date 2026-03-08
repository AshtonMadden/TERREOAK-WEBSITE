import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://terreoak.ca'

    const routes = [
        '',
        '/about',
        '/blog',
        '/portfolio',
        '/customer-support',
        '/landscape-installs',
        '/residential-snow-removal',
        '/irrigation-blowouts',
        '/spring-cleanup-calgary',
        '/fall-cleanup',
        '/commercial-grounds-maintenance',
        '/snow-referral',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))
}
