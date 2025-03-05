import Link from "next/link"
import Image from "next/image"
import { Star, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { App } from "@/lib/types"

interface AppCardProps {
  app: App
}

export function AppCard({ app }: AppCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg border border-gray-100 rounded-xl">
      <Link href={`/app/${app.id}`}>
        <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-blue-50 to-white p-4">
          <Image
            src={app.icon || "/placeholder.svg"}
            alt={app.name}
            className="object-contain transition-transform hover:scale-105"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-2">
          <Link href={`/app/${app.id}`} className="hover:text-blue-600">
            <h3 className="font-semibold text-lg text-gray-800">{app.name}</h3>
          </Link>
          <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100">
            {app.category}
          </Badge>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{app.description}</p>
        <div className="flex items-center text-sm">
          <div className="flex items-center mr-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < app.rating ? "fill-amber-400 text-amber-400" : "text-gray-200"}`} />
            ))}
          </div>
          <span className="text-gray-500">({app.reviews})</span>
        </div>
      </CardContent>
      <CardFooter className="p-5 pt-0 flex justify-between items-center border-t border-gray-100 mt-3">
        <span className={app.free ? "text-green-600 font-medium" : "text-gray-700 font-medium"}>
          {app.free ? "Free" : `$${app.price}`}
        </span>
        <Button size="sm" className="rounded-full bg-blue-600 hover:bg-blue-700 hover:rounded-none transition-all">
          <Download className="mr-1 h-4 w-4" />
          Install
        </Button>
      </CardFooter>
    </Card>
  )
}

