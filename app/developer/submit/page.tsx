import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronLeft, Upload, Info } from "lucide-react"
import Link from "next/link"

export default function SubmitApp() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/developer" className="flex items-center text-muted-foreground mb-6">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Back to Developer Dashboard
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Submit a New AI App</h1>
        <p className="text-muted-foreground">Complete the form below to submit your AI app for review</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Provide essential details about your AI app</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="app-name">App Name</Label>
                <Input id="app-name" placeholder="Enter app name" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="productivity">Productivity</SelectItem>
                      <SelectItem value="entertainment">Entertainment</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="health">Health &amp; Fitness</SelectItem>
                      <SelectItem value="travel">Travel</SelectItem>
                      <SelectItem value="shopping">Shopping</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pricing">Pricing Model</Label>
                  <Select>
                    <SelectTrigger id="pricing">
                      <SelectValue placeholder="Select pricing" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="free">Free</SelectItem>
                      <SelectItem value="paid">Paid</SelectItem>
                      <SelectItem value="freemium">Freemium</SelectItem>
                      <SelectItem value="subscription">Subscription</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="short-description">Short Description</Label>
                <Input id="short-description" placeholder="Brief description (max 100 characters)" maxLength={100} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="full-description">Full Description</Label>
                <Textarea id="full-description" placeholder="Detailed description of your app" rows={6} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>App Assets</CardTitle>
              <CardDescription>Upload icons, screenshots, and other visual assets</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>App Icon (512x512px)</Label>
                <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
                  <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground mb-1">Drag and drop or click to upload</p>
                  <p className="text-xs text-muted-foreground">PNG or JPG (max. 2MB)</p>
                  <Button variant="outline" size="sm" className="mt-4">
                    Choose File
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Screenshots (1920x1080px recommended)</Label>
                <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
                  <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground mb-1">Drag and drop or click to upload</p>
                  <p className="text-xs text-muted-foreground">PNG or JPG (max. 5MB each, at least 3 screenshots)</p>
                  <Button variant="outline" size="sm" className="mt-4">
                    Choose Files
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Promotional Video (optional)</Label>
                <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
                  <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground mb-1">Drag and drop or click to upload</p>
                  <p className="text-xs text-muted-foreground">MP4 (max. 50MB, 30-90 seconds)</p>
                  <Button variant="outline" size="sm" className="mt-4">
                    Choose File
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Permissions & Privacy</CardTitle>
              <CardDescription>Specify what data your app needs to access</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox id="permission-location" />
                  <div className="grid gap-1.5 leading-none">
                    <Label
                      htmlFor="permission-location"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Location Access
                    </Label>
                    <p className="text-sm text-muted-foreground">Access user's location data</p>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="permission-contacts" />
                  <div className="grid gap-1.5 leading-none">
                    <Label
                      htmlFor="permission-contacts"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Contacts
                    </Label>
                    <p className="text-sm text-muted-foreground">Access user's contacts</p>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="permission-calendar" />
                  <div className="grid gap-1.5 leading-none">
                    <Label
                      htmlFor="permission-calendar"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Calendar
                    </Label>
                    <p className="text-sm text-muted-foreground">Access user's calendar</p>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="permission-files" />
                  <div className="grid gap-1.5 leading-none">
                    <Label
                      htmlFor="permission-files"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Files &amp; Storage
                    </Label>
                    <p className="text-sm text-muted-foreground">Access user's files and storage</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Label htmlFor="privacy-policy">Privacy Policy URL</Label>
                <Input id="privacy-policy" placeholder="https://example.com/privacy-policy" className="mt-2" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Submission Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center p-6 border rounded-lg bg-muted/20">
                <div className="text-center">
                  <Info className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm font-medium">Not Submitted</p>
                  <p className="text-xs text-muted-foreground mt-1">Complete all required fields to submit</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <Button className="w-full">Submit for Review</Button>
                <Button variant="outline" className="w-full">
                  Save as Draft
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Submission Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <p>
                  <span className="font-medium">Review Process:</span> All apps undergo a review process that typically
                  takes 2-3 business days.
                </p>
                <p>
                  <span className="font-medium">Content Guidelines:</span> Apps must comply with our content guidelines
                  and terms of service.
                </p>
                <p>
                  <span className="font-medium">Privacy Requirements:</span> A valid privacy policy is required for all
                  apps.
                </p>
                <p>
                  <span className="font-medium">Performance:</span> Apps must perform reliably and as described.
                </p>
                <Button variant="link" className="p-0 h-auto">
                  Read Full Guidelines
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

