import {
  File,
  FileDoc,
  FilePdf,
  FileXls,
  FilePpt,
  FileZip,
  FileImage,
  FileText,
  FileCode,
  FileVideo,
  FileAudio,
} from '@phosphor-icons/react/dist/ssr'

const mimeTypeIcons: Record<string, typeof File> = {
  // PDF
  'application/pdf': FilePdf,

  // Word documents
  'application/msword': FileDoc,
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': FileDoc,
  'application/vnd.oasis.opendocument.text': FileDoc,

  // Excel documents
  'application/vnd.ms-excel': FileXls,
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': FileXls,
  'application/vnd.oasis.opendocument.spreadsheet': FileXls,

  // PowerPoint documents
  'application/vnd.ms-powerpoint': FilePpt,
  'application/vnd.openxmlformats-officedocument.presentationml.presentation': FilePpt,
  'application/vnd.oasis.opendocument.presentation': FilePpt,

  // Archives
  'application/zip': FileZip,
  'application/x-zip-compressed': FileZip,
  'application/x-rar-compressed': FileZip,
  'application/x-7z-compressed': FileZip,
  'application/gzip': FileZip,

  // Images
  'image/jpeg': FileImage,
  'image/png': FileImage,
  'image/gif': FileImage,
  'image/webp': FileImage,
  'image/svg+xml': FileImage,

  // Text
  'text/plain': FileText,
  'text/csv': FileText,
  'text/rtf': FileText,

  // Code
  'text/html': FileCode,
  'text/css': FileCode,
  'text/javascript': FileCode,
  'application/json': FileCode,
  'application/xml': FileCode,

  // Video
  'video/mp4': FileVideo,
  'video/mpeg': FileVideo,
  'video/webm': FileVideo,

  // Audio
  'audio/mpeg': FileAudio,
  'audio/wav': FileAudio,
  'audio/ogg': FileAudio,
}

const extensionIcons: Record<string, typeof File> = {
  // PDF
  pdf: FilePdf,

  // Word
  doc: FileDoc,
  docx: FileDoc,
  odt: FileDoc,

  // Excel
  xls: FileXls,
  xlsx: FileXls,
  ods: FileXls,
  csv: FileXls,

  // PowerPoint
  ppt: FilePpt,
  pptx: FilePpt,
  odp: FilePpt,

  // Archives
  zip: FileZip,
  rar: FileZip,
  '7z': FileZip,
  gz: FileZip,
  tar: FileZip,

  // Images
  jpg: FileImage,
  jpeg: FileImage,
  png: FileImage,
  gif: FileImage,
  webp: FileImage,
  svg: FileImage,

  // Text
  txt: FileText,
  rtf: FileText,

  // Code
  html: FileCode,
  css: FileCode,
  js: FileCode,
  json: FileCode,
  xml: FileCode,

  // Video
  mp4: FileVideo,
  mpeg: FileVideo,
  webm: FileVideo,
  avi: FileVideo,

  // Audio
  mp3: FileAudio,
  wav: FileAudio,
  ogg: FileAudio,
}

export function getFileIcon(
  mimeTypeOrFilename?: string | null,
): typeof File {
  if (!mimeTypeOrFilename) return File

  // Check if it's a mime type
  if (mimeTypeIcons[mimeTypeOrFilename]) {
    return mimeTypeIcons[mimeTypeOrFilename]
  }

  // Check if it's a filename - extract extension
  const extension = mimeTypeOrFilename.split('.').pop()?.toLowerCase()
  if (extension && extensionIcons[extension]) {
    return extensionIcons[extension]
  }

  return File
}

export function getFileExtension(filename: string | null | undefined): string {
  if (!filename) return ''
  const parts = filename.split('.')
  return parts.length > 1 ? parts.pop()?.toUpperCase() || '' : ''
}

export function formatFileSize(bytes: number | null | undefined): string {
  if (!bytes) return ''

  const units = ['B', 'KB', 'MB', 'GB']
  let unitIndex = 0
  let size = bytes

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024
    unitIndex++
  }

  return `${size.toFixed(unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`
}
