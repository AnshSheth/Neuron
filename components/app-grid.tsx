import { AppCard } from "@/components/app-card"
import { apps } from "@/lib/data"

export default function AppGrid({ category }: { category: string }) {
  // Filter apps by category or return all if category is "popular"
  const filteredApps = category === "popular" ? apps.slice(0, 4) : apps.filter((app) => app.category === category)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredApps.map((app) => (
        <AppCard key={app.id} app={app} />
      ))}
    </div>
  )
}

