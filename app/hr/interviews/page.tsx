"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, Calendar, Clock, Video, MapPin, MoreHorizontal, Plus, CheckCircle, XCircle, Edit, Brain } from 'lucide-react'

export default function InterviewsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [timeFilter, setTimeFilter] = useState("all")

  const interviews = [
    {
      id: 1,
      candidate: {
        name: "Sarah Johnson",
        email: "sarah.johnson@email.com",
        avatar: "/placeholder.svg?height=40&width=40"
      },
      job: "Senior Frontend Developer",
      interviewer: "John Smith",
      date: "2024-01-20",
      time: "2:00 PM",
      duration: "60 min",
      type: "video",
      status: "scheduled",
      location: "Zoom Meeting",
      notes: "",
      feedback: ""
    },
    {
      id: 2,
      candidate: {
        name: "Michael Chen",
        email: "michael.chen@email.com",
        avatar: "/placeholder.svg?height=40&width=40"
      },
      job: "Product Manager",
      interviewer: "Jane Doe",
      date: "2024-01-21",
      time: "10:00 AM",
      duration: "45 min",
      type: "in-person",
      status: "confirmed",
      location: "Conference Room A",
      notes: "",
      feedback: ""
    },
    {
      id: 3,
      candidate: {
        name: "Emily Davis",
        email: "emily.davis@email.com",
        avatar: "/placeholder.svg?height=40&width=40"
      },
      job: "UX Designer",
      interviewer: "Bob Wilson",
      date: "2024-01-19",
      time: "3:30 PM",
      duration: "60 min",
      type: "video",
      status: "completed",
      location: "Google Meet",
      notes: "Great portfolio, strong design thinking",
      feedback: "Excellent candidate with strong UX skills and good cultural fit. Recommend for next round."
    },
    {
      id: 4,
      candidate: {
        name: "David Wilson",
        email: "david.wilson@email.com",
        avatar: "/placeholder.svg?height=40&width=40"
      },
      job: "Senior Frontend Developer",
      interviewer: "Alice Brown",
      date: "2024-01-18",
      time: "11:00 AM",
      duration: "60 min",
      type: "video",
      status: "completed",
      location: "Zoom Meeting",
      notes: "Technical skills are solid, but communication could be better",
      feedback: "Good technical knowledge but needs improvement in communication skills. Consider for junior role instead."
    },
    {
      id: 5,
      candidate: {
        name: "Lisa Rodriguez",
        email: "lisa.rodriguez@email.com",
        avatar: "/placeholder.svg?height=40&width=40"
      },
      job: "Product Manager",
      interviewer: "Tom Johnson",
      date: "2024-01-22",
      time: "1:00 PM",
      duration: "45 min",
      type: "in-person",
      status: "pending",
      location: "Conference Room B",
      notes: "",
      feedback: ""
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "scheduled": return "bg-blue-100 text-blue-800"
      case "confirmed": return "bg-green-100 text-green-800"
      case "completed": return "bg-purple-100 text-purple-800"
      case "pending": return "bg-yellow-100 text-yellow-800"
      case "cancelled": return "bg-red-100 text-red-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "scheduled": return <Clock className="h-3 w-3" />
      case "confirmed": return <CheckCircle className="h-3 w-3" />
      case "completed": return <CheckCircle className="h-3 w-3" />
      case "pending": return <Clock className="h-3 w-3" />
      case "cancelled": return <XCircle className="h-3 w-3" />
      default: return <Clock className="h-3 w-3" />
    }
  }

  const filteredInterviews = interviews.filter(interview => {
    const matchesSearch = interview.candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         interview.job.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         interview.interviewer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || interview.status === statusFilter
    
    const today = new Date()
    const interviewDate = new Date(interview.date)
    let matchesTime = true
    
    if (timeFilter === "today") {
      matchesTime = interviewDate.toDateString() === today.toDateString()
    } else if (timeFilter === "upcoming") {
      matchesTime = interviewDate >= today
    } else if (timeFilter === "past") {
      matchesTime = interviewDate < today
    }
    
    return matchesSearch && matchesStatus && matchesTime
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Interviews</h1>
          <p className="text-gray-600">Schedule and manage candidate interviews</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Schedule Interview
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Interviews</CardTitle>
            <Calendar className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">2 confirmed, 1 pending</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
            <Clock className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+4 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">76%</div>
            <p className="text-xs text-muted-foreground">+8% vs last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search interviews..."
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
                <SelectItem value="scheduled">Scheduled</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            <Select value={timeFilter} onValueChange={setTimeFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="past">Past</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Interviews List */}
      <div className="space-y-4">
        {filteredInterviews.map((interview) => (
          <Card key={interview.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={interview.candidate.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {interview.candidate.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{interview.candidate.name}</h3>
                    <p className="text-sm text-gray-600">{interview.candidate.email}</p>
                    <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                      <span>Position: <strong>{interview.job}</strong></span>
                      <span>•</span>
                      <span>Interviewer: {interview.interviewer}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span>{new Date(interview.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1">
                      <Clock className="h-4 w-4" />
                      <span>{interview.time} ({interview.duration})</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1">
                      {interview.type === 'video' ? (
                        <Video className="h-4 w-4" />
                      ) : (
                        <MapPin className="h-4 w-4" />
                      )}
                      <span>{interview.location}</span>
                    </div>
                  </div>
                  
                  <Badge className={`${getStatusColor(interview.status)} flex items-center space-x-1`}>
                    {getStatusIcon(interview.status)}
                    <span className="capitalize">{interview.status}</span>
                  </Badge>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit Interview
                      </DropdownMenuItem>
                      {interview.status === 'completed' && (
                        <DropdownMenuItem>
                          <Brain className="h-4 w-4 mr-2" />
                          Generate AI Feedback
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Mark as Completed
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <XCircle className="h-4 w-4 mr-2" />
                        Cancel Interview
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              
              {/* Interview Notes/Feedback */}
              {(interview.notes || interview.feedback) && (
                <div className="mt-4 space-y-3">
                  {interview.notes && (
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm font-medium text-gray-900 mb-1">Interview Notes</p>
                      <p className="text-sm text-gray-700">{interview.notes}</p>
                    </div>
                  )}
                  {interview.feedback && (
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-start space-x-2">
                        <Brain className="h-4 w-4 text-blue-600 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-blue-900">AI-Generated Feedback</p>
                          <p className="text-sm text-blue-800">{interview.feedback}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredInterviews.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No interviews found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria or schedule a new interview.</p>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Schedule Interview
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
