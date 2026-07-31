import { worksData } from '../lib/works-data'

const SITE_URL = 'https://efradeveloper.lat/'

export default function sitemap() {
  const staticRoutes = [
    { url: SITE_URL, priority: 1.0, changeFrequency: 'monthly' },
    { url: `${SITE_URL}/works`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${SITE_URL}/skills`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${SITE_URL}/posts`, priority: 0.7, changeFrequency: 'weekly' },
    { url: `${SITE_URL}/github`, priority: 0.6, changeFrequency: 'weekly' },
    { url: `${SITE_URL}/coding`, priority: 0.6, changeFrequency: 'monthly' },
  ]

  const projectRoutes = Object.keys(worksData).map(slug => ({
    url: `${SITE_URL}/works/${slug}`,
    priority: 0.8,
    changeFrequency: 'yearly',
  }))

  return [...staticRoutes, ...projectRoutes]
}
