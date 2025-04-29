import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  PlusCircle,
  Package,
  AlertCircle,
  Search,
  Filter,
  Download,
  ShoppingCart,
  Clock,
  Calendar,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

const Inventory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  // Mock data for inventory
  const inventoryItems = [
    {
      id: "INV001",
      name: "Gloves (Box of 100)",
      category: "Consumables",
      quantity: 45,
      minQuantity: 20,
      status: "In Stock",
      lastOrder: "2024-04-15",
      nextOrder: "2024-05-10",
    },
    {
      id: "INV002",
      name: "Test Tubes",
      category: "Labware",
      quantity: 12,
      minQuantity: 30,
      status: "Low Stock",
      lastOrder: "2024-04-20",
      nextOrder: "2024-05-05",
    },
    // Add more mock data as needed
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "in stock":
        return "bg-green-100 text-green-800";
      case "low stock":
        return "bg-yellow-100 text-yellow-800";
      case "out of stock":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-medical-navy">
          Laboratory Inventory
        </h1>
        <div className="flex gap-2">
          <Button className="bg-medical-blue hover:bg-medical-navy text-white">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Item
          </Button>
          <Button
            variant="outline"
            className="border-medical-blue text-medical-blue hover:bg-medical-blue/10"
          >
            <Package className="mr-2 h-4 w-4" />
            Manage Stock
          </Button>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search inventory..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-[180px]">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="consumables">Consumables</SelectItem>
            <SelectItem value="labware">Labware</SelectItem>
            <SelectItem value="reagents">Reagents</SelectItem>
            <SelectItem value="equipment">Equipment</SelectItem>
          </SelectContent>
        </Select>
        <Button
          variant="outline"
          className="border-medical-blue text-medical-blue hover:bg-medical-blue/10"
        >
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card className="bg-gradient-to-br from-medical-blue/10 to-medical-navy/10">
          <CardHeader>
            <CardTitle className="text-medical-navy">Total Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-medical-blue">156</div>
            <div className="text-sm text-gray-500">In inventory</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-50 to-green-100">
          <CardHeader>
            <CardTitle className="text-green-800">In Stock</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">142</div>
            <div className="text-sm text-green-700">Available</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100">
          <CardHeader>
            <CardTitle className="text-yellow-800">Low Stock</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-600">8</div>
            <div className="text-sm text-yellow-700">Need reorder</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-red-50 to-red-100">
          <CardHeader>
            <CardTitle className="text-red-800">Out of Stock</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600">6</div>
            <div className="text-sm text-red-700">Urgent reorder</div>
          </CardContent>
        </Card>
      </div>

      {/* Inventory Table */}
      <Card className="border-medical-blue/20">
        <CardHeader>
          <CardTitle className="text-medical-navy">Inventory Items</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventoryItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{item.quantity}</span>
                      <span className="text-sm text-gray-500">
                        / {item.minQuantity} min
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(item.status)}>
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-medical-blue" />
                        Last: {item.lastOrder}
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-medical-blue" />
                        Next: {item.nextOrder}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-medical-blue text-medical-blue hover:bg-medical-blue/10"
                      >
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Order
                      </Button>
                      <Button
                        size="sm"
                        className="bg-medical-blue hover:bg-medical-navy text-white"
                      >
                        <Package className="h-4 w-4 mr-1" />
                        Manage
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Alerts Section */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-yellow-200">
          <CardHeader>
            <CardTitle className="text-yellow-800 flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              Stock Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-yellow-600">
                <AlertCircle className="h-4 w-4" />
                <span>8 items running low</span>
              </div>
              <div className="flex items-center gap-2 text-red-600">
                <AlertCircle className="h-4 w-4" />
                <span>6 items need immediate restocking</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-800 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Order History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Last Order Date</span>
                <span className="font-medium">April 25, 2024</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Next Order Due</span>
                <span className="font-medium">May 10, 2024</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Inventory;
