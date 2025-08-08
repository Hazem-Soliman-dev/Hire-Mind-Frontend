"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, Plus, MoreHorizontal, Eye, Edit, Crown, Building2, Users, DollarSign } from 'lucide-react'

export default function AdminOrganizationsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [planFilter, setPlanFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  const organizations = [
    {
      id: 1,
      name: "TechCorp Inc.",
      plan: "Professional",
      status: "active",
      users: 12,
      revenue: 2988,
      created: "2023-08-15",
      lastActive: "2 hours ago",
      jobs: 8,
      applications: 156
    },
    {
      id: 2,
      name: "StartupXYZ",
      plan: "Starter",
      status: "active",
      users: 3,
      revenue: 99,
      created: "2024-01-10",
      lastActive: "1 day ago",
      jobs: 2,
      applications: 23
    },
    {
      id: 3,
      name: "Enterprise Corp",
      plan: "Enterprise",
      status: "active",
      users: 45,
      revenue: 12000,
      created: "2023-05-20",
      lastActive: "30 minutes ago",
      jobs: 25,
      applications: 892
    },
    {
      id: 4,
      name: "MidSize Co.",
      plan: "Professional",
      status: "trial",
      users: 8,
      revenue: 0,
      created: "2024-01-18",
      lastActive: "3 hours ago",
      jobs: 5,
      applications: 67
    },
    {
      id: 5,
      name: "DevStudio",
      plan: "Starter",
      status: "suspended",
      users: 2,
      revenue: 99,
      created: "2023-12-01",
      lastActive: "1 week ago",
      jobs: 1,
      applications: 8
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800"
      case "trial": return "bg-blue-100 text-blue-800"
      case "suspended": return "bg-red-100 text-red-800"
      case "cancelled": return "bg-gray-100 text-gray-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case "Enterprise": return "bg-purple-100 text-purple-800"
      case "Professional": return "bg-blue-100 text-blue-800"
      case "Starter": return "bg-green-100 text-green-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const filteredOrganizations = organizations.filter(org => {
    const matchesSearch = org.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPlan = planFilter === "all" || org.plan === planFilter
    const matchesStatus = statusFilter === "all" || org.status === statusFilter
    
    return matchesSearch && matchesPlan && matchesStatus
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Organizations</h1>
          <p className="text-gray-600">Manage customer organizations and their subscriptions</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Organization
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Organizations</CardTitle>
            <Building2 className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-green-600">+12 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-green-600">+89 this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$47,890</div>
            <p className="text-xs text-green-600">+15% vs last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Trial Conversions</CardTitle>
            <Crown className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <p className="text-xs text-green-600">+5% vs last month</p>
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
                  placeholder="Search organizations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={planFilter} onValueChange={setPlanFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Plans</SelectItem>
                <SelectItem value="Starter">Starter</SelectItem>
                <SelectItem value="Professional">Professional</SelectItem>
                <SelectItem value="Enterprise">Enterprise</SelectItem>
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="trial">Trial</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Organizations List */}
      <div className="space-y-4">
        {filteredOrganizations.map((org) => (
          <Card key={org.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold">{org.name}</h3>
                    {org.plan === 'Enterprise' && (
                      <Crown className="h-4 w-4 text-yellow-500" />
                    )}
                    <Badge className={getStatusColor(org.status)}>
                      {org.status}
                    </Badge>
                    <Badge className={getPlanColor(org.plan)}>
                      {org.plan}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">{org.users}</span> users
                    </div>
                    <div>
                      <span className="font-medium">${org.revenue.toLocaleString()}</span>/month
                    </div>
                    <div>
                      <span className="font-medium">{org.jobs}</span> active jobs
                    </div>
                    <div>
                      <span className="font-medium">{org.applications}</span> applications
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <span>Created: {new Date(org.created).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>Last active: {org.lastActive}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit Organization
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Users className="h-4 w-4 mr-2" />
                        Manage Users
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <DollarSign className="h-4 w-4 mr-2" />
                        Billing Details
                      </DropdownMenuItem>
                      {org.status === 'active' && (
                        <DropdownMenuItem className="text-red-600">
                          Suspend Organization
                        </DropdownMenuItem>
                      )}
                      {org.status === 'suspended' && (
                        <DropdownMenuItem className="text-green-600">
                          Reactivate Organization
                        </DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredOrganizations.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <Building2 className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No organizations found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria or add a new organization.</p>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Organization
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
