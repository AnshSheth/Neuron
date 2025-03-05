import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PlusCircle, ArrowUpDown, Download } from "lucide-react"
import { apps } from "@/lib/data"

export default function DeveloperDashboard() {
  // Simulate developer's apps (first 2 apps)
  const developerApps = apps.slice(0, 2)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Developer Dashboard</h1>
        <Button asChild>
          <a href="/developer/submit">
            <PlusCircle className="mr-2 h-4 w-4" />
            Submit New App
          </a>
        </Button>
      </div>

      <Tabs defaultValue="apps">
        <TabsList className="mb-8">
          <TabsTrigger value="apps">My Apps</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Account Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="apps">
          <div className="grid grid-cols-1 gap-6">
            {developerApps.map((app) => (
              <Card key={app.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted">
                        <img
                          src={app.icon || "/placeholder.svg"}
                          alt={app.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle>{app.name}</CardTitle>
                        <CardDescription>
                          Version {app.version} • {app.category}
                        </CardDescription>
                        <div className="flex items-center mt-1">
                          <div className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">Published</div>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline">Manage</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="flex flex-col p-4 border rounded-lg">
                      <span className="text-sm text-muted-foreground">Installs</span>
                      <div className="flex items-center mt-1">
                        <span className="text-2xl font-bold">{Math.floor(Math.random() * 10000)}</span>
                        <ArrowUpDown className="ml-2 h-4 w-4 text-green-500" />
                      </div>
                    </div>
                    <div className="flex flex-col p-4 border rounded-lg">
                      <span className="text-sm text-muted-foreground">Active Users</span>
                      <div className="flex items-center mt-1">
                        <span className="text-2xl font-bold">{Math.floor(Math.random() * 5000)}</span>
                        <ArrowUpDown className="ml-2 h-4 w-4 text-green-500" />
                      </div>
                    </div>
                    <div className="flex flex-col p-4 border rounded-lg">
                      <span className="text-sm text-muted-foreground">Rating</span>
                      <div className="flex items-center mt-1">
                        <span className="text-2xl font-bold">{app.rating.toFixed(1)}</span>
                        <span className="text-sm text-muted-foreground ml-2">({app.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>App Performance</CardTitle>
              <CardDescription>View analytics for all your published apps</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="flex items-center justify-end px-6 mb-4 space-x-2">
                <Select defaultValue="7days">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="24hours">Last 24 hours</SelectItem>
                    <SelectItem value="7days">Last 7 days</SelectItem>
                    <SelectItem value="30days">Last 30 days</SelectItem>
                    <SelectItem value="90days">Last 90 days</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </div>

              <div className="w-full flex justify-center">
                <div className="max-w-[800px] w-full">
                  <img 
                    src="/app-performance-screenshot.svg" 
                    alt="App Performance Analytics" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total Installs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12,543</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-green-500">↑ 12%</span> from last period
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">8,350</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-green-500">↑ 8%</span> from last period
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Avg. Session Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">4m 32s</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-red-500">↓ 3%</span> from last period
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Developer Profile</CardTitle>
                <CardDescription>Manage your developer account information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input id="company-name" defaultValue="AI Innovations Inc." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" defaultValue="https://aiinnovations.example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Company Description</Label>
                  <Textarea
                    id="description"
                    rows={4}
                    defaultValue="We build cutting-edge AI applications that help users be more productive and creative."
                  />
                </div>
                <Button>Save Changes</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Settings</CardTitle>
                <CardDescription>Manage your payment and payout information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="payment-method">Payment Method</Label>
                  <Select defaultValue="bank">
                    <SelectTrigger id="payment-method">
                      <SelectValue placeholder="Select payment method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bank">Bank Account</SelectItem>
                      <SelectItem value="paypal">PayPal</SelectItem>
                      <SelectItem value="stripe">Stripe</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tax-info">Tax Information</Label>
                  <div className="p-3 border rounded-md bg-muted/20 text-sm">
                    Your tax information is complete. Last updated on March 1, 2025.
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="payout-schedule">Payout Schedule</Label>
                  <Select defaultValue="monthly">
                    <SelectTrigger id="payout-schedule">
                      <SelectValue placeholder="Select payout schedule" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="biweekly">Bi-weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button>Save Changes</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

