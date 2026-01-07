import { formatDate } from '@/utilities/formatDate'
import type { Post } from '@/payload-types'
import { Media } from '@/components/Media'

export const PostHero: React.FC<{ post: Post }> = ({ post }) => {
  const { heroImage, populatedAuthors, publishedAt, title, categories } = post

  return (
    <div className="relative flex items-end">
      <div className="container z-10 relative pb-8 text-white lg:grid lg:grid-cols-[1fr_48rem_1fr]">
        <div className="col-start-1 col-span-1 md:col-start-2 md:col-span-2">
          {categories && categories.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {categories.map((category, index) => {
                if (typeof category === 'object' && category !== null) {
                  const { title: categoryTitle } = category
                  return (
                    <span
                      key={index}
                      className="inline-block bg-white/10 backdrop-blur-sm px-3 py-1 text-sm rounded-full"
                    >
                      {categoryTitle}
                    </span>
                  )
                }
                return null
              })}
            </div>
          )}

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">{title}</h1>

          <div className="flex flex-wrap gap-4 text-sm text-white/80">
            {populatedAuthors && populatedAuthors.length > 0 && (
              <span>
                Autor:{' '}
                {populatedAuthors.map((author, index) => {
                  const { name } = author
                  const isLast = index === populatedAuthors.length - 1
                  return (
                    <span key={index}>
                      {name}
                      {!isLast && ', '}
                    </span>
                  )
                })}
              </span>
            )}
            {publishedAt && <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>}
          </div>
        </div>
      </div>

      <div className="min-h-[80vh] select-none">
        {heroImage && typeof heroImage !== 'string' && (
          <Media fill imgClassName="-z-10 object-cover" priority resource={heroImage} />
        )}
        <div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />
      </div>
    </div>
  )
}
