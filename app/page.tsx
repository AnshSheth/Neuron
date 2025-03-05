import Link from "next/link"
import { Search, Sparkles, Star, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import AppGrid from "@/components/app-grid"
import FeaturedApp from "@/components/featured-app"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">Neuron</h1>
            <div className="flex items-center gap-4">
              <Link href="/dashboard">
                <Button variant="ghost" className="rounded-full hover:bg-blue-100">My Apps</Button>
              </Link>
              <Link href="/developer">
                <Button variant="outline" className="rounded-full border-blue-200 hover:bg-blue-100 hover:border-blue-300">Developer Portal</Button>
              </Link>
            </div>
          </div>
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-500" />
            <Input 
              placeholder="Search for AI apps..." 
              className="pl-12 py-6 pr-4 rounded-full border-blue-200 shadow-sm focus-visible:ring-blue-400 text-lg" 
            />
          </div>
        </header>

        <section className="mb-16">
          <FeaturedApp />
        </section>

        <section className="mb-12 bg-white p-8 rounded-2xl shadow-sm border border-blue-100">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-amber-500" />
              <h2 className="text-2xl font-semibold">Popular AI Agents</h2>
            </div>
            <Button variant="link" className="text-blue-600 hover:text-blue-800">View all</Button>
          </div>
          <AppGrid category="popular" />
        </section>

        <section className="mb-12 bg-white p-8 rounded-2xl shadow-sm border border-blue-100">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-blue-500" />
              <h2 className="text-2xl font-semibold">Productivity</h2>
            </div>
            <Button variant="link" className="text-blue-600 hover:text-blue-800">View all</Button>
          </div>
          <AppGrid category="productivity" />
        </section>

        <section className="mb-12 bg-white p-8 rounded-2xl shadow-sm border border-blue-100">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Star className="h-6 w-6 text-purple-500" />
              <h2 className="text-2xl font-semibold">Entertainment</h2>
            </div>
            <Button variant="link" className="text-blue-600 hover:text-blue-800">View all</Button>
          </div>
          <AppGrid category="entertainment" />
        </section>
        
        <footer className="text-center py-8 text-gray-500 text-sm">
          <p>© 2025 Neuron. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

