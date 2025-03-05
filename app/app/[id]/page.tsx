import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Shield, Download, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { apps } from "@/lib/data"
import AppGrid from "@/components/app-grid"

export default function AppPage({ params }: { params: { id: string } }) {
  // Find the app by ID
  const app = apps.find((a) => a.id === params.id) || apps[0]

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="flex items-center text-muted-foreground mb-6">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Back to Neuron
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="md:col-span-2">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-20 h-20 rounded-xl overflow-hidden bg-muted">
              <Image 
                src={app.icon || "/placeholder.svg"} 
                alt={app.name} 
                className="object-cover" 
                width={80}
                height={80}
                priority
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-1">{app.name}</h1>
              <p className="text-muted-foreground mb-2">By {app.developer}</p>
              <div className="flex items-center gap-2">
                <Badge variant="outline">{app.category}</Badge>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < app.rating ? "fill-primary text-primary" : "text-muted"}`}
                    />
                  ))}
                  <span className="ml-1 text-sm text-muted-foreground">({app.reviews})</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <Image
              src={app.screenshot || "/placeholder.svg?height=300&width=600"}
              alt={`${app.name} screenshot`}
              className="rounded-lg object-cover"
              width={600}
              height={300}
            />
            <Image
              src={app.screenshot2 || "/placeholder.svg?height=300&width=600"}
              alt={`${app.name} screenshot 2`}
              className="rounded-lg object-cover"
              width={600}
              height={300}
            />
          </div>

          <Tabs defaultValue="description">
            <TabsList className="mb-4">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="permissions">Permissions</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="space-y-4">
              <h3 className="text-xl font-semibold">About this app</h3>
              <p>{app.description}</p>
              <p>{app.longDescription}</p>
            </TabsContent>
            <TabsContent value="permissions" className="space-y-4">
              <h3 className="text-xl font-semibold">Required Permissions</h3>
              <div className="space-y-3">
                {app.permissions.map((permission, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">{permission.name}</p>
                      <p className="text-sm text-muted-foreground">{permission.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="space-y-4">
              <h3 className="text-xl font-semibold">User Reviews</h3>
              <p className="text-muted-foreground">Reviews will appear here once users start rating this app.</p>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <div className="border rounded-lg p-6 sticky top-6">
            <div className="mb-4">
              <p className="text-2xl font-bold mb-1">{app.free ? "Free" : `$${app.price}`}</p>
              {!app.free && <p className="text-sm text-muted-foreground">One-time purchase</p>}
            </div>
            <Button className="w-full mb-4 hover:rounded-none transition-all" size="lg">
              <Download className="mr-2 h-4 w-4" />
              Install App
            </Button>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>
                <span className="font-medium text-foreground">Version:</span> {app.version}
              </p>
              <p>
                <span className="font-medium text-foreground">Updated:</span> {app.updated}
              </p>
              <p>
                <span className="font-medium text-foreground">Size:</span> {app.size}
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Similar Apps</h2>
        <AppGrid category={app.category} excludeId={app.id} />
      </section>
    </div>
  )
}

