/**
 * Truncates text at word boundaries
 */
export function truncate(text: string | null | undefined, maxLength: number): string {
  if (!text) return ''
  if (text.length <= maxLength) return text

  // Find the last space before maxLength
  const truncated = text.substring(0, maxLength)
  const lastSpace = truncated.lastIndexOf(' ')

  if (lastSpace === -1) {
    return truncated + '...'
  }

  return truncated.substring(0, lastSpace) + '...'
}

/**
 * Strips HTML tags and truncates text
 */
export function stripHtmlAndTruncate(
  html: string | null | undefined,
  maxLength: number,
): string {
  if (!html) return ''

  // Remove HTML tags
  const text = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()

  return truncate(text, maxLength)
}
