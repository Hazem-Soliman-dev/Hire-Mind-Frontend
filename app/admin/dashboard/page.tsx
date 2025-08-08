"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Building2, Users, DollarSign, TrendingUp, Plus, Eye, MoreHorizontal, Crown, AlertCircle } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Organizations",
      value: "156",
      change: "+12 this month",
      icon: Building2,
      color: "text-blue-600"
    },
    {
      title: "Active HR Users",
      value: "1,247",
      change: "+89 this week",
      icon: Users,
      color: "text-green-600"
    },
    {
      title: "Monthly Revenue",
      value: "$47,890",
      change: "+15% vs last month",
      icon: DollarSign,
      color: "text-purple-600"
    },
    {
      title: "System Usage",
      value: "94%",
      change: "Optimal performance",
      icon: TrendingUp,
      color: "text-orange-600"
    }
  ]

  const organizations = [
    {
      id: 1,
      name: "TechCorp Inc.",
      plan: "Professional",
      users: 12,
      revenue: "$2,988",
      status: "active",
      lastActive: "2 hours ago"
    },
    {
      id: 2,
      name: "StartupXYZ",
      plan: "Starter",
      users: 3,
      revenue: "$99",
      status: "active",
      lastActive: "1 day ago"
    },
    {
      id: 3,
      name: "Enterprise Corp",
      plan: "Enterprise",
      users: 45,
      revenue: "$12,000",
      status: "active",
      lastActive: "30 minutes ago"
    },
    {
      id: 4,
      name: "MidSize Co.",
      plan: "Professional",
      users: 8,
      revenue: "$2,392",
      status: "trial",
      lastActive: "3 hours ago"
    }
  ]

  const recentActivity = [
    {
      id: 1,
      type: "new_org",
      message: "New organization 'DevStudio' signed up",
      time: "2 hours ago",
      status: "success"
    },
    {
      id: 2,
      type: "upgrade",
      message: "TechCorp Inc. upgraded to Professional plan",
      time: "4 hours ago",
      status: "success"
    },
    {
      id: 3,
      type: "alert",
      message: "High API usage detected for Enterprise Corp",
      time: "6 hours ago",
      status: "warning"
    },
    {
      id: 4,
      type: "payment",
      message: "Payment failed for StartupABC",
      time: "1 day ago",
      status: "error"
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Monitor system performance and manage organizations</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Organization
        </Button>
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

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Organizations */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Organizations</CardTitle>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {organizations.map((org) => (
                  <div key={org.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium">{org.name}</h3>
                        {org.plan === 'Enterprise' && (
                          <Crown className="h-4 w-4 text-yellow-500" />
                        )}
                      </div>
                      <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                        <span>{org.users} users</span>
                        <span>{org.revenue}/month</span>
                        <span>Last active: {org.lastActive}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={org.status === 'active' ? 'default' : 'secondary'}>
                        {org.status}
                      </Badge>
                      <Badge variant="outline">
                        {org.plan}
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
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            Edit Organization
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            Manage Subscription
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>System events and notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.status === 'success' ? 'bg-green-500' :
                    activity.status === 'warning' ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                  {activity.status === 'warning' && (
                    <AlertCircle className="h-4 w-4 text-yellow-500" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue Overview</CardTitle>
          <CardDescription>Monthly recurring revenue by plan type</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <span className="font-medium">Starter Plan</span>
              </div>
              <div className="text-right">
                <div className="font-bold">$8,910</div>
                <Progress value={25} className="w-32 mt-1" />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="font-medium">Professional Plan</span>
              </div>
              <div className="text-right">
                <div className="font-bold">$26,730</div>
                <Progress value={75} className="w-32 mt-1" />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-purple-500 rounded"></div>
                <span className="font-medium">Enterprise Plan</span>
              </div>
              <div className="text-right">
                <div className="font-bold">$12,250</div>
                <Progress value={35} className="w-32 mt-1" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
