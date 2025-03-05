import { AppCard } from "@/components/app-card"
import { apps } from "@/lib/data"

interface AppGridProps {
  category: string;
  excludeId?: string;
}

export default function AppGrid({ category, excludeId }: AppGridProps) {
  // Filter apps by category or return all if category is "popular"
  let filteredApps = category === "popular" 
    ? apps.slice(0, 4) 
    : apps.filter((app) => app.category === category);
  
  // Exclude the app with the specified ID if provided
  if (excludeId) {
    filteredApps = filteredApps.filter((app) => app.id !== excludeId);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredApps.map((app) => (
        <AppCard key={app.id} app={app} />
      ))}
    </div>
  )
}

