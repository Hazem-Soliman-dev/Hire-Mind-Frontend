"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Users, Briefcase, Calendar, TrendingUp, Plus, Eye, Clock, CheckCircle, XCircle } from 'lucide-react'
import Link from "next/link"

export default function HRDashboard() {
  const stats = [
    {
      title: "Active Jobs",
      value: "12",
      change: "+2 this week",
      icon: Briefcase,
      color: "text-blue-600"
    },
    {
      title: "Total Applications",
      value: "248",
      change: "+18 today",
      icon: Users,
      color: "text-green-600"
    },
    {
      title: "Interviews Scheduled",
      value: "15",
      change: "3 this week",
      icon: Calendar,
      color: "text-purple-600"
    },
    {
      title: "Hire Rate",
      value: "24%",
      change: "+5% vs last month",
      icon: TrendingUp,
      color: "text-orange-600"
    }
  ]

  const recentJobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      applications: 45,
      status: "active",
      posted: "2 days ago",
      interviews: 8
    },
    {
      id: 2,
      title: "Product Manager",
      applications: 32,
      status: "active",
      posted: "1 week ago",
      interviews: 5
    },
    {
      id: 3,
      title: "UX Designer",
      applications: 28,
      status: "draft",
      posted: "3 days ago",
      interviews: 0
    }
  ]

  const upcomingInterviews = [
    {
      id: 1,
      candidate: "Sarah Johnson",
      position: "Senior Frontend Developer",
      time: "Today, 2:00 PM",
      status: "confirmed"
    },
    {
      id: 2,
      candidate: "Michael Chen",
      position: "Product Manager",
      time: "Tomorrow, 10:00 AM",
      status: "pending"
    },
    {
      id: 3,
      candidate: "Emily Davis",
      position: "UX Designer",
      time: "Friday, 3:30 PM",
      status: "confirmed"
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your hiring.</p>
        </div>
        <Link href="/hr/jobs/create">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create Job
          </Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-gray-600 mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Jobs */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Job Posts</CardTitle>
              <Link href="/hr/jobs">
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentJobs.map((job) => (
                <div key={job.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-medium">{job.title}</h3>
                    <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                      <span>{job.applications} applications</span>
                      <span>{job.interviews} interviews</span>
                      <span>{job.posted}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={job.status === 'active' ? 'default' : 'secondary'}>
                      {job.status}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Interviews */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Upcoming Interviews</CardTitle>
              <Link href="/hr/interviews">
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingInterviews.map((interview) => (
                <div key={interview.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-medium">{interview.candidate}</h3>
                    <p className="text-sm text-gray-600">{interview.position}</p>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      {interview.time}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={interview.status === 'confirmed' ? 'default' : 'secondary'}>
                      {interview.status}
                    </Badge>
                    {interview.status === 'confirmed' ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <Clock className="h-4 w-4 text-yellow-600" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Hiring Funnel */}
      <Card>
        <CardHeader>
          <CardTitle>Hiring Funnel - This Month</CardTitle>
          <CardDescription>Track your recruitment progress</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <span className="font-medium">Applications Received</span>
              </div>
              <div className="text-right">
                <div className="font-bold">248</div>
                <Progress value={100} className="w-32 mt-1" />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="font-medium">Screened</span>
              </div>
              <div className="text-right">
                <div className="font-bold">124</div>
                <Progress value={50} className="w-32 mt-1" />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-purple-500 rounded"></div>
                <span className="font-medium">Interviewed</span>
              </div>
              <div className="text-right">
                <div className="font-bold">45</div>
                <Progress value={18} className="w-32 mt-1" />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-orange-500 rounded"></div>
                <span className="font-medium">Offers Made</span>
              </div>
              <div className="text-right">
                <div className="font-bold">12</div>
                <Progress value={5} className="w-32 mt-1" />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-red-500 rounded"></div>
                <span className="font-medium">Hired</span>
              </div>
              <div className="text-right">
                <div className="font-bold">8</div>
                <Progress value={3} className="w-32 mt-1" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
