"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { BarChart3, TrendingUp, Users, Clock, Target, Calendar } from 'lucide-react'

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600">Track your hiring performance and optimize your recruitment process</p>
        </div>
        <Select defaultValue="30days">
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7days">Last 7 days</SelectItem>
            <SelectItem value="30days">Last 30 days</SelectItem>
            <SelectItem value="90days">Last 90 days</SelectItem>
            <SelectItem value="1year">Last year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-green-600">+12.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Interviews Conducted</CardTitle>
            <Calendar className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-green-600">+8.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Successful Hires</CardTitle>
            <Target className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-green-600">+15.3% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Time to Hire</CardTitle>
            <Clock className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18 days</div>
            <p className="text-xs text-red-600">-2 days from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Hiring Funnel */}
        <Card>
          <CardHeader>
            <CardTitle>Hiring Funnel</CardTitle>
            <CardDescription>Conversion rates at each stage</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Applications</span>
                <span className="text-sm text-gray-600">1,247 (100%)</span>
              </div>
              <Progress value={100} className="h-2" />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Screened</span>
                <span className="text-sm text-gray-600">623 (50%)</span>
              </div>
              <Progress value={50} className="h-2" />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Phone/Video Screen</span>
                <span className="text-sm text-gray-600">312 (25%)</span>
              </div>
              <Progress value={25} className="h-2" />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">On-site Interview</span>
                <span className="text-sm text-gray-600">156 (12.5%)</span>
              </div>
              <Progress value={12.5} className="h-2" />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Offers Extended</span>
                <span className="text-sm text-gray-600">62 (5%)</span>
              </div>
              <Progress value={5} className="h-2" />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Hired</span>
                <span className="text-sm text-gray-600">42 (3.4%)</span>
              </div>
              <Progress value={3.4} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Top Performing Jobs */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Jobs</CardTitle>
            <CardDescription>Jobs with highest application rates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h4 className="font-medium">Senior Frontend Developer</h4>
                  <p className="text-sm text-gray-600">Engineering</p>
                </div>
                <div className="text-right">
                  <div className="font-bold">245 apps</div>
                  <div className="text-sm text-green-600">+18% CTR</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h4 className="font-medium">Product Manager</h4>
                  <p className="text-sm text-gray-600">Product</p>
                </div>
                <div className="text-right">
                  <div className="font-bold">189 apps</div>
                  <div className="text-sm text-green-600">+12% CTR</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h4 className="font-medium">UX Designer</h4>
                  <p className="text-sm text-gray-600">Design</p>
                </div>
                <div className="text-right">
                  <div className="font-bold">156 apps</div>
                  <div className="text-sm text-green-600">+8% CTR</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h4 className="font-medium">DevOps Engineer</h4>
                  <p className="text-sm text-gray-600">Engineering</p>
                </div>
                <div className="text-right">
                  <div className="font-bold">134 apps</div>
                  <div className="text-sm text-green-600">+15% CTR</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Source Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Application Sources</CardTitle>
          <CardDescription>Where your best candidates are coming from</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">LinkedIn</span>
                <span className="text-sm text-gray-600">45%</span>
              </div>
              <Progress value={45} />
              <div className="text-sm text-gray-600">562 applications • 18 hires</div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Indeed</span>
                <span className="text-sm text-gray-600">32%</span>
              </div>
              <Progress value={32} />
              <div className="text-sm text-gray-600">399 applications • 12 hires</div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Company Website</span>
                <span className="text-sm text-gray-600">23%</span>
              </div>
              <Progress value={23} />
              <div className="text-sm text-gray-600">287 applications • 12 hires</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Time to Hire by Department */}
      <Card>
        <CardHeader>
          <CardTitle>Time to Hire by Department</CardTitle>
          <CardDescription>Average days from application to offer</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <span className="font-medium">Engineering</span>
              </div>
              <div className="text-right">
                <div className="font-bold">22 days</div>
                <div className="text-sm text-red-600">+3 days vs target</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="font-medium">Product</span>
              </div>
              <div className="text-right">
                <div className="font-bold">18 days</div>
                <div className="text-sm text-green-600">-1 day vs target</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-purple-500 rounded"></div>
                <span className="font-medium">Design</span>
              </div>
              <div className="text-right">
                <div className="font-bold">15 days</div>
                <div className="text-sm text-green-600">-4 days vs target</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-orange-500 rounded"></div>
                <span className="font-medium">Marketing</span>
              </div>
              <div className="text-right">
                <div className="font-bold">12 days</div>
                <div className="text-sm text-green-600">-7 days vs target</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
