"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Search,
  Filter,
  Plus,
  ChevronDown,
  User,
  Building2,
  MapPin,
  Users,
  AlertCircle,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ShiftSchedule = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [activeTab, setActiveTab] = useState("upcoming");

  // Sample shift schedule data
  const shifts = [
    {
      id: 1,
      date: "2023-06-20",
      day: "Monday",
      startTime: "07:00",
      endTime: "15:00",
      type: "Morning",
      unit: "ICU",
      floor: "3rd Floor",
      room: "ICU-101",
      patients: 4,
      status: "Scheduled",
      notes: "Regular shift",
    },
    {
      id: 2,
      date: "2023-06-21",
      day: "Tuesday",
      startTime: "15:00",
      endTime: "23:00",
      type: "Evening",
      unit: "Emergency",
      floor: "1st Floor",
      room: "ER-201",
      patients: 6,
      status: "Pending",
      notes: "Covering for Nurse Smith",
    },
    {
      id: 3,
      date: "2023-06-22",
      day: "Wednesday",
      startTime: "23:00",
      endTime: "07:00",
      type: "Night",
      unit: "ICU",
      floor: "3rd Floor",
      room: "ICU-102",
      patients: 3,
      status: "Completed",
      notes: "Night shift with critical patients",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "scheduled":
        return <Badge variant="default">{status}</Badge>;
      case "pending":
        return <Badge variant="warning">{status}</Badge>;
      case "completed":
        return <Badge variant="success">{status}</Badge>;
      case "cancelled":
        return <Badge variant="destructive">{status}</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const filteredShifts = shifts.filter((shift) => {
    const matchesSearch = shift.unit
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter = filter === "all" || shift.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600/20 via-blue-500/10 to-transparent">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/20">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                    Shift Schedule
                  </h1>
                </div>
                <p className="text-muted-foreground max-w-2xl">
                  Manage and view nurse shift schedules. Track working hours,
                  assign shifts, and ensure proper staffing coverage.
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
                >
                  <Plus className="h-4 w-4" />
                  Add Shift
                </Button>
                <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
                  <Calendar className="h-4 w-4" />
                  View Calendar
                </Button>
              </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="border-none shadow-sm bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/20">
                      <User className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        On Duty Today
                      </p>
                      <p className="text-2xl font-bold">8</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-sm bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/20">
                      <Clock className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Upcoming Shifts
                      </p>
                      <p className="text-2xl font-bold">12</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-sm bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/20">
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Unfilled Shifts
                      </p>
                      <p className="text-2xl font-bold">2</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-sm bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/20">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Total Nurses
                      </p>
                      <p className="text-2xl font-bold">24</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <Tabs
          defaultValue={activeTab}
          onValueChange={setActiveTab}
          className="mb-6"
        >
          <TabsList className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-1">
            <TabsTrigger
              value="today"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-primary-foreground"
            >
              Today
            </TabsTrigger>
            <TabsTrigger
              value="week"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-primary-foreground"
            >
              This Week
            </TabsTrigger>
            <TabsTrigger
              value="month"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-primary-foreground"
            >
              This Month
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search nurses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
              >
                <Filter className="h-4 w-4" />
                Filter
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setFilter("all")}>
                All Shifts
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter("day")}>
                Day Shift
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter("night")}>
                Night Shift
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter("unfilled")}>
                Unfilled
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Shift Cards */}
        <div className="grid grid-cols-1 gap-6">
          {filteredShifts.map((shift) => (
            <Card key={shift.id} className="overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">
                      {shift.day}, {shift.date}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {shift.type} Shift
                    </p>
                  </div>
                  {getStatusBadge(shift.status)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Shift Details */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Shift Hours
                        </p>
                        <p className="font-medium">
                          {shift.startTime} - {shift.endTime}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-blue-600" />
                      <div>
                        <p className="text-sm text-muted-foreground">Unit</p>
                        <p className="font-medium">{shift.unit}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Location
                        </p>
                        <p className="font-medium">
                          {shift.floor}, {shift.room}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Patient Info */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-blue-600" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Patient Count
                        </p>
                        <p className="font-medium">{shift.patients} patients</p>
                      </div>
                    </div>
                    {shift.notes && (
                      <div className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-blue-600" />
                        <div>
                          <p className="text-sm text-muted-foreground">Notes</p>
                          <p className="font-medium">{shift.notes}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6 flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button size="sm">Request Change</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ShiftSchedule;
