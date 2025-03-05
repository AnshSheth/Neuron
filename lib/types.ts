export interface App {
  id: string
  name: string
  description: string
  longDescription?: string
  category: string
  icon: string
  screenshot?: string
  screenshot2?: string
  developer: string
  version: string
  updated: string
  size: string
  rating: number
  reviews: number
  free: boolean
  price?: number
  permissions: Permission[]
}

export interface Permission {
  name: string
  description: string
}

