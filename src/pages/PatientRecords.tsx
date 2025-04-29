"use client";

import React, { useState } from "react";
import {
  FileText,
  Search,
  Filter,
  Plus,
  ChevronDown,
  Calendar,
  User,
  Stethoscope,
  ClipboardList,
  Activity,
  Heart,
  Pill,
  MessageSquare,
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

const PatientRecords = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [activeTab, setActiveTab] = useState("overview");

  // Sample patient records data
  const patientRecords = [
    {
      id: 1,
      patient: "John Smith",
      room: "ICU-101",
      age: 45,
      gender: "Male",
      admissionDate: "2023-06-10",
      diagnosis: "Type 2 Diabetes",
      doctor: "Dr. Sarah Johnson",
      status: "Stable",
      lastVisit: "2023-06-15",
      vitals: {
        temperature: "98.6°F",
        bloodPressure: "120/80",
        heartRate: "72 bpm",
        oxygen: "98%",
      },
      medications: [
        {
          name: "Insulin",
          dosage: "10 units",
          frequency: "Daily",
          lastAdministered: "Today, 08:00 AM",
        },
      ],
      notes: "Patient responding well to treatment. Blood sugar levels stable.",
    },
    {
      id: 2,
      patient: "Mary Johnson",
      room: "ICU-102",
      age: 32,
      gender: "Female",
      admissionDate: "2023-06-12",
      diagnosis: "Pneumonia",
      doctor: "Dr. Michael Brown",
      status: "Improving",
      lastVisit: "2023-06-15",
      vitals: {
        temperature: "99.2°F",
        bloodPressure: "130/85",
        heartRate: "88 bpm",
        oxygen: "96%",
      },
      medications: [
        {
          name: "Antibiotics",
          dosage: "500mg",
          frequency: "Every 8 hours",
          lastAdministered: "Today, 09:00 AM",
        },
      ],
      notes: "Patient showing improvement. Continue monitoring oxygen levels.",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "stable":
        return <Badge variant="default">{status}</Badge>;
      case "improving":
        return <Badge variant="success">{status}</Badge>;
      case "critical":
        return <Badge variant="destructive">{status}</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const filteredPatients = patientRecords.filter((patient) => {
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
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                    Patient Records
                  </h1>
                </div>
                <p className="text-muted-foreground max-w-2xl">
                  Access and manage comprehensive patient records. View medical
                  history, vitals, medications, and clinical notes in one place.
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
                >
                  <Plus className="h-4 w-4" />
                  Add Record
                </Button>
                <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
                  <FileText className="h-4 w-4" />
                  Export
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
                        Active Patients
                      </p>
                      <p className="text-2xl font-bold">24</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-sm bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/20">
                      <FileText className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Total Records
                      </p>
                      <p className="text-2xl font-bold">156</p>
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
                        Critical Cases
                      </p>
                      <p className="text-2xl font-bold">3</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-sm bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/20">
                      <Calendar className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Today's Updates
                      </p>
                      <p className="text-2xl font-bold">12</p>
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
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="vitals">Vitals</TabsTrigger>
            <TabsTrigger value="medications">Medications</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
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
        <div className="grid grid-cols-1 gap-6">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Patient Information */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-blue-600" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Patient Info
                        </p>
                        <p className="font-medium">
                          {patient.age} years, {patient.gender}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Stethoscope className="h-4 w-4 text-blue-600" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Diagnosis
                        </p>
                        <p className="font-medium">{patient.diagnosis}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Admission Date
                        </p>
                        <p className="font-medium">{patient.admissionDate}</p>
                      </div>
                    </div>
                  </div>

                  {/* Vitals */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-blue-600" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Temperature
                        </p>
                        <p className="font-medium">
                          {patient.vitals.temperature}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-blue-600" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Heart Rate
                        </p>
                        <p className="font-medium">
                          {patient.vitals.heartRate}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Pill className="h-4 w-4 text-blue-600" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Current Medication
                        </p>
                        <p className="font-medium">
                          {patient.medications[0].name} -{" "}
                          {patient.medications[0].dosage}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-blue-600" />
                    <p className="text-sm font-medium">Notes</p>
                  </div>
                  <p className="mt-2 text-muted-foreground">{patient.notes}</p>
                </div>

                <div className="mt-6 flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    View Full History
                  </Button>
                  <Button size="sm">Update Record</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PatientRecords;
