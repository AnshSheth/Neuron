import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { apps } from "@/lib/data"

export default function FeaturedApp() {
  // Get the first app as featured
  const featuredApp = apps[0]

  return (
    <div className="rounded-xl overflow-hidden bg-gradient-to-r from-primary/10 to-primary/5 border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div className="flex flex-col justify-center">
          <Badge className="w-fit mb-4">Featured App</Badge>
          <h2 className="text-3xl font-bold mb-2">{featuredApp.name}</h2>
          <p className="text-muted-foreground mb-6">{featuredApp.description}</p>
          <div className="flex gap-4">
            <Button asChild>
              <Link href={`/app/${featuredApp.id}`}>View Details</Link>
            </Button>
            <Button variant="outline">Install Now</Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-[300px] aspect-square rounded-xl overflow-hidden">
            <Image
              src={featuredApp.screenshot || featuredApp.icon}
              alt={featuredApp.name}
              className="object-contain"
              width={300}
              height={300}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

