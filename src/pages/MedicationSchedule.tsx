"use client";

import React, { useState } from "react";
import {
  Pill,
  Clock,
  Search,
  Filter,
  Plus,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  Calendar,
  User,
  Syringe,
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

const MedicationSchedule = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [activeTab, setActiveTab] = useState("today");

  // Sample medication schedule data
  const medicationSchedule = [
    {
      id: 1,
      patient: "John Smith",
      room: "ICU-101",
      medication: "Insulin",
      dosage: "10 units",
      time: "08:00 AM",
      status: "pending",
      route: "Subcutaneous",
      frequency: "Daily",
      lastAdministered: "Yesterday, 08:00 AM",
      notes: "Administer after breakfast",
    },
    {
      id: 2,
      patient: "Mary Johnson",
      room: "ICU-102",
      medication: "Antibiotics",
      dosage: "500mg",
      time: "09:00 AM",
      status: "pending",
      route: "Intravenous",
      frequency: "Every 8 hours",
      lastAdministered: "Yesterday, 01:00 AM",
      notes: "Monitor for allergic reactions",
    },
    {
      id: 3,
      patient: "Robert Davis",
      room: "ICU-103",
      medication: "Pain Relief",
      dosage: "5mg",
      time: "10:00 AM",
      status: "completed",
      route: "Oral",
      frequency: "As needed",
      lastAdministered: "Today, 10:00 AM",
      notes: "Administer with food",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge variant="success" className="gap-1">
            <CheckCircle2 className="h-3 w-3" />
            Completed
          </Badge>
        );
      case "pending":
        return (
          <Badge variant="warning" className="gap-1">
            <Clock className="h-3 w-3" />
            Pending
          </Badge>
        );
      case "overdue":
        return (
          <Badge variant="destructive" className="gap-1">
            <AlertCircle className="h-3 w-3" />
            Overdue
          </Badge>
        );
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const filteredMedications = medicationSchedule.filter((med) => {
    const matchesSearch = med.patient
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter = filter === "all" || med.status === filter;
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
                    <Pill className="h-6 w-6 text-blue-600" />
                  </div>
                  <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                    Medication Schedule
                  </h1>
                </div>
                <p className="text-muted-foreground max-w-2xl">
                  Manage and track medication administration schedules. Ensure
                  timely delivery of medications and maintain accurate records.
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
                >
                  <Plus className="h-4 w-4" />
                  Add Medication
                </Button>
                <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
                  <Calendar className="h-4 w-4" />
                  Schedule
                </Button>
              </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="border-none shadow-sm bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/20">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Completed Today
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
                      <p className="text-sm text-muted-foreground">Pending</p>
                      <p className="text-2xl font-bold">5</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-sm bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/20">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Overdue</p>
                      <p className="text-2xl font-bold">2</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-sm bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/20">
                      <Syringe className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Total Today
                      </p>
                      <p className="text-2xl font-bold">15</p>
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
              value="upcoming"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-primary-foreground"
            >
              Upcoming
            </TabsTrigger>
            <TabsTrigger
              value="completed"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-primary-foreground"
            >
              Completed
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search patients..."
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
                All Medications
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter("pending")}>
                Pending
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter("completed")}>
                Completed
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter("overdue")}>
                Overdue
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Medication Cards */}
        <div className="grid grid-cols-1 gap-4">
          {filteredMedications.map((med) => (
            <Card key={med.id} className="overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{med.patient}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Room {med.room}
                    </p>
                  </div>
                  {getStatusBadge(med.status)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Pill className="h-4 w-4 text-blue-600" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Medication
                        </p>
                        <p className="font-medium">{med.medication}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Syringe className="h-4 w-4 text-blue-600" />
                      <div>
                        <p className="text-sm text-muted-foreground">Dosage</p>
                        <p className="font-medium">{med.dosage}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <div>
                        <p className="text-sm text-muted-foreground">Time</p>
                        <p className="font-medium">{med.time}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Route</p>
                      <p className="font-medium">{med.route}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Frequency</p>
                      <p className="font-medium">{med.frequency}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Last Administered
                      </p>
                      <p className="font-medium">{med.lastAdministered}</p>
                    </div>
                  </div>
                </div>
                {med.notes && (
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-sm text-muted-foreground">Notes</p>
                    <p className="font-medium">{med.notes}</p>
                  </div>
                )}
                <div className="mt-4 flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    View History
                  </Button>
                  <Button size="sm">Administer</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MedicationSchedule;
