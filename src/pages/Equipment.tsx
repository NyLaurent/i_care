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
  Settings2,
  AlertCircle,
  Search,
  Filter,
  Download,
  Wrench,
  Clock,
  Calendar,
  CheckCircle,
  XCircle,
} from "lucide-react";

const Equipment = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Mock data for equipment
  const equipmentList = [
    {
      id: "EQ001",
      name: "Centrifuge",
      type: "Laboratory Equipment",
      status: "Operational",
      lastMaintenance: "2024-04-01",
      nextMaintenance: "2024-05-15",
      location: "Lab Room 1",
    },
    {
      id: "EQ002",
      name: "Microscope",
      type: "Diagnostic Equipment",
      status: "Under Maintenance",
      lastMaintenance: "2024-03-15",
      nextMaintenance: "2024-04-30",
      location: "Lab Room 2",
    },
    // Add more mock data as needed
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "operational":
        return "bg-green-100 text-green-800";
      case "under maintenance":
        return "bg-yellow-100 text-yellow-800";
      case "out of service":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-medical-navy">
          Laboratory Equipment
        </h1>
        <div className="flex gap-2">
          <Button className="bg-medical-blue hover:bg-medical-navy text-white">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Equipment
          </Button>
          <Button
            variant="outline"
            className="border-medical-blue text-medical-blue hover:bg-medical-blue/10"
          >
            <Settings2 className="mr-2 h-4 w-4" />
            Manage
          </Button>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search equipment..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="operational">Operational</SelectItem>
            <SelectItem value="under-maintenance">Under Maintenance</SelectItem>
            <SelectItem value="out-of-service">Out of Service</SelectItem>
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
            <CardTitle className="text-medical-navy">Total Equipment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-medical-blue">24</div>
            <div className="text-sm text-gray-500">In laboratory</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-50 to-green-100">
          <CardHeader>
            <CardTitle className="text-green-800">Operational</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">20</div>
            <div className="text-sm text-green-700">Ready for use</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100">
          <CardHeader>
            <CardTitle className="text-yellow-800">Under Maintenance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-600">3</div>
            <div className="text-sm text-yellow-700">Being serviced</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-red-50 to-red-100">
          <CardHeader>
            <CardTitle className="text-red-800">Out of Service</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600">1</div>
            <div className="text-sm text-red-700">Needs repair</div>
          </CardContent>
        </Card>
      </div>

      {/* Equipment Table */}
      <Card className="border-medical-blue/20">
        <CardHeader>
          <CardTitle className="text-medical-navy">Equipment List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Equipment ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Maintenance</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {equipmentList.map((equipment) => (
                <TableRow key={equipment.id}>
                  <TableCell className="font-medium">{equipment.id}</TableCell>
                  <TableCell>{equipment.name}</TableCell>
                  <TableCell>{equipment.type}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(equipment.status)}>
                      {equipment.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-medical-blue" />
                        Last: {equipment.lastMaintenance}
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-medical-blue" />
                        Next: {equipment.nextMaintenance}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{equipment.location}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-medical-blue text-medical-blue hover:bg-medical-blue/10"
                      >
                        <Wrench className="h-4 w-4 mr-1" />
                        Service
                      </Button>
                      <Button
                        size="sm"
                        className="bg-medical-blue hover:bg-medical-navy text-white"
                      >
                        <Settings2 className="h-4 w-4 mr-1" />
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
              Maintenance Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-yellow-600">
                <Clock className="h-4 w-4" />
                <span>3 equipment due for maintenance</span>
              </div>
              <div className="flex items-center gap-2 text-red-600">
                <AlertCircle className="h-4 w-4" />
                <span>1 equipment needs immediate attention</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-800 flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Service History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Last Service Date</span>
                <span className="font-medium">April 1, 2024</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Next Scheduled Service</span>
                <span className="font-medium">May 15, 2024</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Equipment;
