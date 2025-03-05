import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { apps } from "@/lib/data"
import { ArrowRight, Star } from "lucide-react"

export default function FeaturedApp() {
  // Get the first app as featured
  const featuredApp = apps[0]

  return (
    <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 via-indigo-50 to-white border border-blue-200 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <div className="flex flex-col justify-center">
          <Badge className="w-fit mb-4 bg-blue-600 hover:bg-blue-700 px-3 py-1 text-white">Featured App</Badge>
          <h2 className="text-4xl font-bold mb-3 text-gray-800">{featuredApp.name}</h2>
          <div className="flex items-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < featuredApp.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`} />
              ))}
            </div>
            <span className="ml-2 text-gray-600">({featuredApp.reviews} reviews)</span>
          </div>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">{featuredApp.description}</p>
          <div className="flex gap-4">
            <Button asChild className="rounded-full bg-blue-600 hover:bg-blue-700 px-6 py-6 text-lg">
              <Link href={`/app/${featuredApp.id}`}>
                View Details
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" className="rounded-full border-blue-300 hover:bg-blue-100 hover:border-blue-400 px-6 py-6 text-lg">
              Install Now
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-[350px] aspect-square rounded-2xl overflow-hidden bg-white p-4 shadow-md border border-blue-100">
            <Image
              src={featuredApp.screenshot || featuredApp.icon}
              alt={featuredApp.name}
              className="object-contain"
              width={350}
              height={350}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

