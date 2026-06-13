import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.terreoak.ca'

    const routes = [
        '',
        '/about',
        '/blog',
        '/projects',
        '/mckenzielakelandscaping',
        '/projects/featured-project-2',
        '/parklandlandscaping',

        '/landscape-installs',
        '/residential-snow-removal',
        '/irrigation-blowouts',
        '/spring-cleanup-calgary',
        '/fall-cleanup',
        '/commercial-grounds-maintenance',
        '/snow-referral',
        '/hardscaping',
        '/softscapes',
        '/our-process',
        '/shop',
        '/careers',
        '/blog/why-calgary-spring-cleanup-matters',
        '/blog/why-open-grade-base-for-paver-patios',
        '/blog/why-hire-snow-removal-company',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))
}
