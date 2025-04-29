"use client";

import React, { useState } from "react";
import {
  Activity,
  Heart,
  Thermometer,
  Droplet,
  Clock,
  Search,
  Filter,
  Plus,
  AlertTriangle,
  ChevronDown,
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

const PatientVitals = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  // Sample patient vitals data
  const patientVitals = [
    {
      id: 1,
      patient: "John Smith",
      room: "ICU-101",
      temperature: "98.6°F",
      bloodPressure: "120/80",
      heartRate: "72 bpm",
      oxygen: "98%",
      lastChecked: "10 mins ago",
      status: "stable",
      age: 45,
      gender: "Male",
      doctor: "Dr. Sarah Johnson",
    },
    {
      id: 2,
      patient: "Mary Johnson",
      room: "ICU-102",
      temperature: "99.2°F",
      bloodPressure: "130/85",
      heartRate: "88 bpm",
      oxygen: "96%",
      lastChecked: "15 mins ago",
      status: "monitoring",
      age: 32,
      gender: "Female",
      doctor: "Dr. Michael Brown",
    },
    {
      id: 3,
      patient: "Robert Davis",
      room: "ICU-103",
      temperature: "100.1°F",
      bloodPressure: "140/90",
      heartRate: "95 bpm",
      oxygen: "94%",
      lastChecked: "5 mins ago",
      status: "alert",
      age: 58,
      gender: "Male",
      doctor: "Dr. Emily Wilson",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "alert":
        return (
          <Badge variant="destructive" className="gap-1">
            <AlertTriangle className="h-3 w-3" />
            Alert
          </Badge>
        );
      case "monitoring":
        return (
          <Badge variant="secondary" className="gap-1">
            <Clock className="h-3 w-3" />
            Monitoring
          </Badge>
        );
      case "stable":
        return (
          <Badge variant="default" className="gap-1">
            <Activity className="h-3 w-3" />
            Stable
          </Badge>
        );
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const filteredPatients = patientVitals.filter((patient) => {
    const matchesSearch = patient.patient
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter = filter === "all" || patient.status === filter;
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
                    <Activity className="h-6 w-6 text-blue-600" />
                  </div>
                  <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                    Patient Vitals
                  </h1>
                </div>
                <p className="text-muted-foreground max-w-2xl">
                  Monitor and track patient vital signs in real-time. Stay
                  updated with critical health metrics and ensure timely
                  interventions.
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
                >
                  <Plus className="h-4 w-4" />
                  Add Patient
                </Button>
                <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
                  <Clock className="h-4 w-4" />
                  Schedule Check
                </Button>
              </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="border-none shadow-sm bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/20">
                      <Activity className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Stable Patients
                      </p>
                      <p className="text-2xl font-bold">12</p>
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
                        Monitoring
                      </p>
                      <p className="text-2xl font-bold">5</p>
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
                      <p className="text-sm text-muted-foreground">Critical</p>
                      <p className="text-2xl font-bold">2</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-sm bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/20">
                      <Heart className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Total Patients
                      </p>
                      <p className="text-2xl font-bold">19</p>
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
                All Patients
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter("alert")}>
                Alert
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter("monitoring")}>
                Monitoring
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter("stable")}>
                Stable
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Patient Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPatients.map((patient) => (
            <Card key={patient.id} className="overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{patient.patient}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Room {patient.room}
                    </p>
                  </div>
                  {getStatusBadge(patient.status)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Thermometer className="h-4 w-4 text-blue-600" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Temperature
                      </p>
                      <p className="font-medium">{patient.temperature}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Droplet className="h-4 w-4 text-blue-600" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Blood Pressure
                      </p>
                      <p className="font-medium">{patient.bloodPressure}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-blue-600" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Heart Rate
                      </p>
                      <p className="font-medium">{patient.heartRate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-blue-600" />
                    <div>
                      <p className="text-sm text-muted-foreground">Oxygen</p>
                      <p className="font-medium">{patient.oxygen}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <div>
                      <p>Age: {patient.age}</p>
                      <p>Gender: {patient.gender}</p>
                    </div>
                    <div className="text-right">
                      <p>Last checked: {patient.lastChecked}</p>
                      <p>Doctor: {patient.doctor}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PatientVitals;
