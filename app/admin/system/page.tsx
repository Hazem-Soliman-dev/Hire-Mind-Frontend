"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Server, Zap, Shield } from 'lucide-react'

export default function AdminSystemPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">System Status</h1>
        <p className="text-gray-600">Monitor system health and performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Database</CardTitle>
            <Database className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <Badge className="bg-green-100 text-green-800">Healthy</Badge>
            <p className="text-xs text-muted-foreground mt-1">99.9% uptime</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">API Server</CardTitle>
            <Server className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <Badge className="bg-green-100 text-green-800">Online</Badge>
            <p className="text-xs text-muted-foreground mt-1">Response time: 120ms</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Services</CardTitle>
            <Zap className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <Badge className="bg-green-100 text-green-800">Active</Badge>
            <p className="text-xs text-muted-foreground mt-1">Processing normally</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Security</CardTitle>
            <Shield className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <Badge className="bg-green-100 text-green-800">Secure</Badge>
            <p className="text-xs text-muted-foreground mt-1">No threats detected</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>System Monitoring</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Advanced system monitoring tools coming soon...</p>
        </CardContent>
      </Card>
    </div>
  )
}
