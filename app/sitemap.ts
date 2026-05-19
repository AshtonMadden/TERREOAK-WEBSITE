import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://terreoak.ca'

    const routes = [
        '',
        '/about',
        '/blog',
        '/projects',
        '/customer-support',
        '/landscape-installs',
        '/residential-snow-removal',
        '/irrigation-blowouts',
        '/spring-cleanup-calgary',
        '/fall-cleanup',
        '/commercial-grounds-maintenance',
        '/snow-referral',
        '/blog/why-calgary-spring-cleanup-matters',
        '/blog/why-open-grade-base-for-paver-patios',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))
}
