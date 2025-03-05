import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { App } from "@/lib/types"

interface AppCardProps {
  app: App
}

export function AppCard({ app }: AppCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <Link href={`/app/${app.id}`}>
        <div className="aspect-square relative overflow-hidden bg-muted">
          <Image
            src={app.icon || "/placeholder.svg"}
            alt={app.name}
            className="object-cover transition-transform hover:scale-105"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <Link href={`/app/${app.id}`} className="hover:underline">
            <h3 className="font-semibold text-lg">{app.name}</h3>
          </Link>
          <Badge variant="outline" className="text-xs">
            {app.category}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{app.description}</p>
        <div className="flex items-center text-sm">
          <div className="flex items-center mr-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-3 h-3 ${i < app.rating ? "fill-primary text-primary" : "text-muted"}`} />
            ))}
          </div>
          <span className="text-muted-foreground">({app.reviews})</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <span className={app.free ? "text-green-600 font-medium" : ""}>{app.free ? "Free" : `$${app.price}`}</span>
        <Button size="sm">Install</Button>
      </CardFooter>
    </Card>
  )
}

