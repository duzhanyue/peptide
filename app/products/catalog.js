export const productFamilies = [
  {
    slug: 'ghk-cu',
    name: 'GHK-CU',
    label: 'Copper peptide',
    summary:
      'A GHK-CU catalogue family with 50 mg and 100 mg specification options for focused research procurement inquiries.',
    image: '/img/l1-transparent.png',
    specifications: [
      ['GHK-CU 50mg', '/img/l1-transparent.png'],
      ['GHK-CU 100mg', '/img/l1.100-transparent.png'],
    ],
  },
  {
    slug: 'rt-peptide',
    name: 'RT Peptide',
    label: 'Multiple specifications',
    summary:
      'An RT Peptide catalogue family with specification options from 5 mg to 60 mg for research procurement inquiries.',
    image: '/img/l2-transparent.png',
    specifications: [
      ['RT Peptide 5mg', '/img/l2.5-transparent.png'],
      ['RT Peptide 10mg', '/img/l2.10-transparent.png'],
      ['RT Peptide 15mg', '/img/l2.15-transparent.png'],
      ['RT Peptide 20mg', '/img/l2.20-transparent.png'],
      ['RT Peptide 30mg', '/img/l2.30-transparent.png'],
      ['RT Peptide 40mg', '/img/l2.40-transparent.png'],
      ['RT Peptide 50mg', '/img/l2.50-transparent.png'],
      ['RT Peptide 60mg', '/img/l2-transparent.png'],
    ],
  },
  {
    slug: 'tirz-peptide',
    name: 'Tirz Peptide',
    label: 'Research supply',
    summary:
      'A Tirz Peptide catalogue family with specification options from 5 mg to 120 mg for research procurement inquiries.',
    image: '/img/l3-transparent.png',
    specifications: [
      ['Tirz Peptide 5mg', '/img/l3.5-transparent.png'],
      ['Tirz Peptide 10mg', '/img/l3.10-transparent.png'],
      ['Tirz Peptide 15mg', '/img/l3.15-transparent.png'],
      ['Tirz Peptide 20mg', '/img/l3.20-transparent.png'],
      ['Tirz Peptide 30mg', '/img/l3-transparent.png'],
      ['Tirz Peptide 40mg', '/img/l3.40-transparent.png'],
      ['Tirz Peptide 50mg', '/img/l3.50-transparent.png'],
      ['Tirz Peptide 60mg', '/img/l3.60-transparent.png'],
      ['Tirz Peptide 100mg', '/img/l3.100-transparent.png'],
      ['Tirz Peptide 120mg', '/img/l3.120-transparent.png'],
    ],
  },
  {
    slug: 'semaglu-peptide',
    name: 'Semaglu Peptide',
    label: 'Research supply',
    summary:
      'A Semaglu Peptide catalogue family with specification options from 2 mg to 30 mg for research procurement inquiries.',
    image: '/img/l4-transparent.png',
    specifications: [
      ['Semaglu Peptide 2mg', '/img/l4.22-transparent.png'],
      ['Semaglu Peptide 5mg', '/img/l4.1-transparent.png'],
      ['Semaglu Peptide 10mg', '/img/l4-transparent.png'],
      ['Semaglu Peptide 15mg', '/img/l4.15-transparent.png'],
      ['Semaglu Peptide 20mg', '/img/l4.2-transparent.png'],
      ['Semaglu Peptide 30mg', '/img/l4.30-transparent.png'],
    ],
  },
]

function versionProductImage(image) {
  return image.replace('.png', '-kmax.png')
}

productFamilies.forEach((family) => {
  family.image = versionProductImage(family.image)
  family.specifications = family.specifications.map(([title, image]) => [title, versionProductImage(image)])
})

export const products = productFamilies.flatMap((family) =>
  family.specifications.map(([title, image]) => ({
    title,
    image,
    category: family.slug,
    familyName: family.name,
  })),
)

export function getProductFamily(slug) {
  return productFamilies.find((family) => family.slug === slug)
}
