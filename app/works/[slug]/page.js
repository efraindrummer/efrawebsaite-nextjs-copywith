import { worksData } from '../../../lib/works-data'
import WorkDetailClient from './work-detail-client'

const SITE_URL = 'https://efrainmay.dev'

export async function generateStaticParams() {
  return Object.keys(worksData).map(slug => ({ slug }))
}

export async function generateMetadata({ params }) {
  const work = worksData[params.slug]
  if (!work) {
    return { title: 'Proyecto no encontrado' }
  }

  const title = `${work.title} (${work.year})`
  const description = work.description.slice(0, 155)
  const stack = work.meta.find(m => m.label === 'Stack' || m.label === 'Tecnologías')?.value

  return {
    title,
    description: stack ? `${description} — Stack: ${stack}` : description,
    openGraph: {
      title: `${work.title} | Efrain May`,
      description,
      url: `${SITE_URL}/works/${params.slug}`,
      images: work.images[0]
        ? [{ url: work.images[0], alt: work.title }]
        : [],
    },
    alternates: {
      canonical: `${SITE_URL}/works/${params.slug}`,
    },
  }
}

export default function WorkDetailPage({ params }) {
  const work = worksData[params.slug]
  return <WorkDetailClient work={work} slug={params.slug} />
}
