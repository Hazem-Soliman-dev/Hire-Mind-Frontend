"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, Filter, MoreHorizontal, Eye, Calendar, Download, Star, Brain, CheckCircle, XCircle, Clock } from 'lucide-react'

export default function ApplicationsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [jobFilter, setJobFilter] = useState("all")

  const applications = [
    {
      id: 1,
      candidate: {
        name: "Sarah Johnson",
        email: "sarah.johnson@email.com",
        avatar: "/placeholder.svg?height=40&width=40"
      },
      job: "Senior Frontend Developer",
      appliedDate: "2024-01-15",
      status: "interview_scheduled",
      atsScore: 92,
      experience: "5 years",
      location: "San Francisco, CA",
      resumeUrl: "#",
      aiInsights: "Strong React and TypeScript skills. Excellent cultural fit based on previous experience."
    },
    {
      id: 2,
      candidate: {
        name: "Michael Chen",
        email: "michael.chen@email.com",
        avatar: "/placeholder.svg?height=40&width=40"
      },
      job: "Product Manager",
      appliedDate: "2024-01-14",
      status: "under_review",
      atsScore: 88,
      experience: "7 years",
      location: "New York, NY",
      resumeUrl: "#",
      aiInsights: "Extensive product management experience. Strong analytical and leadership skills."
    },
    {
      id: 3,
      candidate: {
        name: "Emily Davis",
        email: "emily.davis@email.com",
        avatar: "/placeholder.svg?height=40&width=40"
      },
      job: "UX Designer",
      appliedDate: "2024-01-13",
      status: "rejected",
      atsScore: 76,
      experience: "3 years",
      location: "Austin, TX",
      resumeUrl: "#",
      aiInsights: "Good design portfolio but lacks experience with enterprise-level projects."
    },
    {
      id: 4,
      candidate: {
        name: "David Wilson",
        email: "david.wilson@email.com",
        avatar: "/placeholder.svg?height=40&width=40"
      },
      job: "Senior Frontend Developer",
      appliedDate: "2024-01-12",
      status: "new",
      atsScore: 85,
      experience: "6 years",
      location: "Seattle, WA",
      resumeUrl: "#",
      aiInsights: "Solid technical background with Vue.js and Node.js. Good potential candidate."
    },
    {
      id: 5,
      candidate: {
        name: "Lisa Rodriguez",
        email: "lisa.rodriguez@email.com",
        avatar: "/placeholder.svg?height=40&width=40"
      },
      job: "Product Manager",
      appliedDate: "2024-01-11",
      status: "hired",
      atsScore: 94,
      experience: "8 years",
      location: "Los Angeles, CA",
      resumeUrl: "#",
      aiInsights: "Exceptional candidate with proven track record in B2B SaaS products."
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new": return "bg-blue-100 text-blue-800"
      case "under_review": return "bg-yellow-100 text-yellow-800"
      case "interview_scheduled": return "bg-purple-100 text-purple-800"
      case "hired": return "bg-green-100 text-green-800"
      case "rejected": return "bg-red-100 text-red-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "new": return <Clock className="h-3 w-3" />
      case "under_review": return <Eye className="h-3 w-3" />
      case "interview_scheduled": return <Calendar className="h-3 w-3" />
      case "hired": return <CheckCircle className="h-3 w-3" />
      case "rejected": return <XCircle className="h-3 w-3" />
      default: return <Clock className="h-3 w-3" />
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 80) return "text-yellow-600"
    return "text-red-600"
  }

  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.candidate.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.job.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || app.status === statusFilter
    const matchesJob = jobFilter === "all" || app.job === jobFilter
    
    return matchesSearch && matchesStatus && matchesJob
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Applications</h1>
          <p className="text-gray-600">Manage and review candidate applications with AI insights</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Advanced Filters
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search candidates, jobs, or emails..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="under_review">Under Review</SelectItem>
                <SelectItem value="interview_scheduled">Interview Scheduled</SelectItem>
                <SelectItem value="hired">Hired</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
            <Select value={jobFilter} onValueChange={setJobFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by job" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Jobs</SelectItem>
                <SelectItem value="Senior Frontend Developer">Senior Frontend Developer</SelectItem>
                <SelectItem value="Product Manager">Product Manager</SelectItem>
                <SelectItem value="UX Designer">UX Designer</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Applications List */}
      <div className="space-y-4">
        {filteredApplications.map((application) => (
          <Card key={application.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={application.candidate.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {application.candidate.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-lg font-semibold">{application.candidate.name}</h3>
                      {application.atsScore >= 90 && (
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{application.candidate.email}</p>
                    <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                      <span>Applied for: <strong>{application.job}</strong></span>
                      <span>•</span>
                      <span>{application.experience} experience</span>
                      <span>•</span>
                      <span>{application.location}</span>
                      <span>•</span>
                      <span>Applied {new Date(application.appliedDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="flex items-center space-x-2">
                      <Brain className="h-4 w-4 text-blue-600" />
                      <span className={`font-bold ${getScoreColor(application.atsScore)}`}>
                        {application.atsScore}%
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">ATS Score</p>
                  </div>
                  
                  <Badge className={`${getStatusColor(application.status)} flex items-center space-x-1`}>
                    {getStatusIcon(application.status)}
                    <span className="capitalize">{application.status.replace('_', ' ')}</span>
                  </Badge>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="h-4 w-4 mr-2" />
                        View Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download className="h-4 w-4 mr-2" />
                        Download Resume
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Calendar className="h-4 w-4 mr-2" />
                        Schedule Interview
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Move to Next Stage
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <XCircle className="h-4 w-4 mr-2" />
                        Reject Application
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              
              {/* AI Insights */}
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <div className="flex items-start space-x-2">
                  <Brain className="h-4 w-4 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-blue-900">AI Insights</p>
                    <p className="text-sm text-blue-800">{application.aiInsights}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredApplications.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <Users className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No applications found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
