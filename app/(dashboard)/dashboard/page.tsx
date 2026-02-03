"use client";
import { useSession } from "next-auth/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Eye,
  ShoppingCart,
  CheckCircle2,
  Package,
  MoreVertical,
} from "lucide-react";

export default function DashboardPage() {
  const { data: session } = useSession();
  const isAdmin = session?.user?.role === "ADMIN";

  const stats = [
    {
      title: "Website View",
      subtitle: "Last Campaign Performance",
      value: "12,543",
      change: "+15%",
      trend: "up",
      status: "campaign sent 2 days ago",
      show: true,
    },
    {
      title: "Daily Sales",
      subtitle: "15% increase in today sales",
      value: "₹45,678",
      change: "+24%",
      trend: "up",
      status: "updated 4 min ago",
      show: true,
    },
    {
      title: "Completed Tasks",
      subtitle: "Last Campaign Performance",
      value: "89",
      change: "+12%",
      trend: "up",
      status: "just updated",
      show: true,
    },
    {
      title: "Orders Overview",
      subtitle: "Recent orders summary",
      value: "234",
      change: "+8%",
      trend: "up",
      status: "+24% this month",
      show: isAdmin,
    },
  ];

  const projects = [
    {
      company: "Chakra Vision UI",
      members: 4,
      budget: "$14,000",
      completion: 60,
      status: "active",
    },
    {
      company: "Add Progress Track",
      members: 2,
      budget: "$3,000",
      completion: 10,
      status: "pending",
    },
    {
      company: "Fix Platform Errors",
      members: 8,
      budget: "$14,000",
      completion: 100,
      status: "completed",
    },
    {
      company: "Launch our Mobile App",
      members: 6,
      budget: "$32,000",
      completion: 100,
      status: "completed",
    },
    {
      company: "Add the New Pricing Page",
      members: 3,
      budget: "$8,000",
      completion: 25,
      status: "active",
    },
  ];

  const recentOrders = [
    {
      title: "$2400, Design changes",
      date: "22 DEC 7:20 PM",
      type: "success",
    },
    {
      title: "New order #1832412",
      date: "21 DEC 11 PM",
      type: "error",
    },
    {
      title: "Server payments for April",
      date: "21 DEC 9:34 PM",
      type: "success",
    },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Sticky Header Section */}
      <div className="sticky top-0 z-10 bg-zinc-50 pb-6 space-y-6">
        {/* Hero Section */}
        <Card className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-0 overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div className="max-w-xl space-y-4">
                <h1 className="text-4xl font-bold text-white">
                  Build Amazing Teams
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Connect with diverse talent and create inclusive workspaces that
                  drive innovation. Discover how our platform helps you build
                  stronger teams.
                </p>
                <Button className="bg-white text-gray-900 hover:bg-gray-100 font-medium">
                  Get Started
                </Button>
              </div>
              <div className="hidden lg:block text-6xl">
                👥👨‍💼👩‍💼🧑‍💻👨‍🔬
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats
            .filter((stat) => stat.show)
            .map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </CardTitle>
                  <CardDescription className="text-xs">
                    {stat.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {/* Placeholder for mini chart */}
                  <div className="h-16 flex items-end gap-1">
                    {[30, 45, 35, 60, 25, 40, 50, 35, 55, 40, 45, 65].map((height, i) => (
                      <div
                        key={i}
                        className={`flex-1 rounded-t ${i === 3 ? "bg-blue-500" : "bg-gray-900"
                          }`}
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>

                  {/* Stats Footer */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                      <span className="text-xs text-gray-600">{stat.status}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto space-y-6">
        {/* Projects Table */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-lg font-semibold">Projects</CardTitle>
              <CardDescription className="flex items-center gap-2 mt-1">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-sm">30 done this month</span>
              </CardDescription>
            </div>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b text-left">
                    <th className="pb-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Companies
                    </th>
                    <th className="pb-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Members
                    </th>
                    <th className="pb-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Budget
                    </th>
                    <th className="pb-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Completion
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {projects.map((project, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                            <Package className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-medium text-gray-900">
                            {project.company}
                          </span>
                        </div>
                      </td>
                      <td className="py-4">
                        <div className="flex -space-x-2">
                          {Array.from({ length: project.members }).map((_, i) => (
                            <div
                              key={i}
                              className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-white flex items-center justify-center text-xs text-white font-medium"
                            >
                              {String.fromCharCode(65 + i)}
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="py-4">
                        <span className="text-sm font-medium text-gray-900">
                          {project.budget}
                        </span>
                      </td>
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex-1 max-w-xs">
                            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full ${project.completion === 100
                                  ? "bg-green-500"
                                  : project.completion >= 50
                                    ? "bg-blue-500"
                                    : "bg-orange-500"
                                  }`}
                                style={{ width: `${project.completion}%` }}
                              />
                            </div>
                          </div>
                          <span className="text-sm font-medium text-gray-900 w-12">
                            {project.completion}%
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Orders Overview (Only for Admin) */}
        {isAdmin && (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg font-semibold">
                    Orders Overview
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-1">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-600 font-medium">
                      +24% this month
                    </span>
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 pb-4 last:pb-0 border-b last:border-0"
                  >
                    <div
                      className={`mt-1 p-2 rounded-lg ${order.type === "success"
                        ? "bg-green-100"
                        : "bg-red-100"
                        }`}
                    >
                      {order.type === "success" ? (
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                      ) : (
                        <ShoppingCart className="h-4 w-4 text-red-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {order.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{order.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
