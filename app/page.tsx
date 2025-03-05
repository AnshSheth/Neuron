import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import AppGrid from "@/components/app-grid"
import FeaturedApp from "@/components/featured-app"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">AI App Store</h1>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost">My Apps</Button>
            </Link>
            <Link href="/developer">
              <Button variant="outline">Developer Portal</Button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search for AI apps..." className="pl-10 w-full md:w-[400px]" />
        </div>
      </header>

      <section className="mb-12">
        <FeaturedApp />
      </section>

      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Popular AI Agents</h2>
          <Button variant="link">View all</Button>
        </div>
        <AppGrid category="popular" />
      </section>

      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Productivity</h2>
          <Button variant="link">View all</Button>
        </div>
        <AppGrid category="productivity" />
      </section>

      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Entertainment</h2>
          <Button variant="link">View all</Button>
        </div>
        <AppGrid category="entertainment" />
      </section>
    </div>
  )
}

