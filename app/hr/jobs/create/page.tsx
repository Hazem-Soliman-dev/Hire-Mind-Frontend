"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Brain, Wand2, Save, Eye, Send } from 'lucide-react'
import { useRouter } from "next/navigation"

export default function CreateJobPage() {
  const router = useRouter()
  const [isGenerating, setIsGenerating] = useState(false)
  const [jobData, setJobData] = useState({
    title: "",
    department: "",
    location: "",
    type: "",
    experience: "",
    salary: "",
    requirements: "",
    aiDescription: ""
  })

  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([])

  const platforms = [
    { id: "linkedin", name: "LinkedIn", enabled: true },
    { id: "indeed", name: "Indeed", enabled: true },
    { id: "glassdoor", name: "Glassdoor", enabled: false },
    { id: "company-website", name: "Company Website", enabled: true }
  ]

  const handleGenerateDescription = async () => {
    if (!jobData.title || !jobData.requirements) {
      alert("Please fill in job title and requirements first")
      return
    }

    setIsGenerating(true)
    
    // Simulate AI generation
    setTimeout(() => {
      const generatedDescription = `We are seeking a talented ${jobData.title} to join our dynamic team. This role offers an exciting opportunity to work on cutting-edge projects and contribute to our company's growth.

Key Responsibilities:
• Lead and execute strategic initiatives in ${jobData.department}
• Collaborate with cross-functional teams to deliver high-quality solutions
• Mentor junior team members and contribute to team development
• Drive innovation and best practices within the organization

Requirements:
${jobData.requirements}

What We Offer:
• Competitive salary and comprehensive benefits package
• Flexible work arrangements and remote work options
• Professional development opportunities and career growth
• Collaborative and inclusive work environment
• State-of-the-art technology and tools

Join us in shaping the future of our industry while building a rewarding career with endless possibilities for growth and impact.`

      setJobData(prev => ({ ...prev, aiDescription: generatedDescription }))
      setIsGenerating(false)
    }, 2000)
  }

  const handleSave = () => {
    // Save as draft
    console.log("Saving job as draft:", jobData)
    router.push("/hr/jobs")
  }

  const handlePublish = () => {
    // Publish job
    console.log("Publishing job:", jobData, "to platforms:", selectedPlatforms)
    router.push("/hr/jobs")
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Create New Job</h1>
        <p className="text-gray-600">Use AI to generate compelling job descriptions and post to multiple platforms</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Job Details Form */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Job Details</CardTitle>
              <CardDescription>Basic information about the position</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Job Title *</Label>
                  <Input
                    id="title"
                    placeholder="e.g. Senior Frontend Developer"
                    value={jobData.title}
                    onChange={(e) => setJobData(prev => ({ ...prev, title: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Select onValueChange={(value) => setJobData(prev => ({ ...prev, department: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="product">Product</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="hr">Human Resources</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    placeholder="e.g. San Francisco, CA"
                    value={jobData.location}
                    onChange={(e) => setJobData(prev => ({ ...prev, location: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Job Type</Label>
                  <Select onValueChange={(value) => setJobData(prev => ({ ...prev, type: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="internship">Internship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Experience Level</Label>
                  <Select onValueChange={(value) => setJobData(prev => ({ ...prev, experience: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entry">Entry Level</SelectItem>
                      <SelectItem value="mid">Mid Level</SelectItem>
                      <SelectItem value="senior">Senior Level</SelectItem>
                      <SelectItem value="lead">Lead/Principal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="salary">Salary Range (Optional)</Label>
                <Input
                  id="salary"
                  placeholder="e.g. $80,000 - $120,000"
                  value={jobData.salary}
                  onChange={(e) => setJobData(prev => ({ ...prev, salary: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirements">Requirements & Qualifications *</Label>
                <Textarea
                  id="requirements"
                  placeholder="List the key requirements, skills, and qualifications for this role..."
                  className="min-h-[120px]"
                  value={jobData.requirements}
                  onChange={(e) => setJobData(prev => ({ ...prev, requirements: e.target.value }))}
                />
              </div>
            </CardContent>
          </Card>

          {/* AI Generated Description */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center">
                    <Brain className="h-5 w-5 mr-2 text-blue-600" />
                    AI-Generated Job Description
                  </CardTitle>
                  <CardDescription>Let AI create a compelling job description based on your requirements</CardDescription>
                </div>
                <Button 
                  onClick={handleGenerateDescription}
                  disabled={isGenerating || !jobData.title || !jobData.requirements}
                >
                  {isGenerating ? (
                    <>
                      <Wand2 className="h-4 w-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Wand2 className="h-4 w-4 mr-2" />
                      Generate Description
                    </>
                  )}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {jobData.aiDescription ? (
                <div className="space-y-4">
                  <Textarea
                    value={jobData.aiDescription}
                    onChange={(e) => setJobData(prev => ({ ...prev, aiDescription: e.target.value }))}
                    className="min-h-[300px]"
                  />
                  <div className="flex items-center space-x-2 text-sm text-green-600">
                    <Brain className="h-4 w-4" />
                    <span>AI-generated content ready! You can edit it above.</span>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <Brain className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>Fill in the job details above and click "Generate Description" to create an AI-powered job posting.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Publishing Options */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Publishing Options</CardTitle>
              <CardDescription>Choose where to post this job</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {platforms.map((platform) => (
                <div key={platform.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id={platform.id}
                      checked={selectedPlatforms.includes(platform.id)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedPlatforms(prev => [...prev, platform.id])
                        } else {
                          setSelectedPlatforms(prev => prev.filter(p => p !== platform.id))
                        }
                      }}
                      disabled={!platform.enabled}
                    />
                    <Label htmlFor={platform.id} className={!platform.enabled ? "text-gray-400" : ""}>
                      {platform.name}
                    </Label>
                  </div>
                  {platform.enabled ? (
                    <Badge variant="secondary">Available</Badge>
                  ) : (
                    <Badge variant="outline">Pro Plan</Badge>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full" onClick={handleSave}>
                <Save className="h-4 w-4 mr-2" />
                Save as Draft
              </Button>
              <Button variant="outline" className="w-full">
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Button>
              <Separator />
              <Button 
                className="w-full" 
                onClick={handlePublish}
                disabled={!jobData.title || !jobData.aiDescription || selectedPlatforms.length === 0}
              >
                <Send className="h-4 w-4 mr-2" />
                Publish Job
              </Button>
              {selectedPlatforms.length > 0 && (
                <p className="text-xs text-gray-600 text-center">
                  Will publish to {selectedPlatforms.length} platform{selectedPlatforms.length > 1 ? 's' : ''}
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
