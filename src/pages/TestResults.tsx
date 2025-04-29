"use client";

import React, { useState } from "react";
import {
  FileText,
  Search,
  Filter,
  Download,
  Printer,
  Share2,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Clock,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TestResults = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [activeTab, setActiveTab] = useState("all");

  // Sample test results data
  const testResults = [
    {
      id: 1,
      patient: "John Smith",
      testType: "Blood Test",
      status: "normal",
      date: "2023-06-15",
      doctor: "Dr. Sarah Johnson",
      results: {
        hemoglobin: "14.2 g/dL",
        wbc: "7.5 x 10^9/L",
        platelets: "250 x 10^9/L",
        glucose: "95 mg/dL",
      },
      notes: "All values within normal range",
    },
    {
      id: 2,
      patient: "Mary Johnson",
      testType: "Urine Analysis",
      status: "abnormal",
      date: "2023-06-15",
      doctor: "Dr. Michael Brown",
      results: {
        protein: "2+",
        glucose: "Negative",
        ketones: "Trace",
        specificGravity: "1.020",
      },
      notes: "Proteinuria detected, recommend follow-up",
    },
    {
      id: 3,
      patient: "Robert Davis",
      testType: "Culture Test",
      status: "pending",
      date: "2023-06-14",
      doctor: "Dr. Emily Wilson",
      results: {
        culture: "In Progress",
        sensitivity: "Pending",
      },
      notes: "Results expected in 48 hours",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "normal":
        return (
          <Badge variant="success" className="gap-1">
            <CheckCircle2 className="h-3 w-3" />
            Normal
          </Badge>
        );
      case "abnormal":
        return (
          <Badge variant="destructive" className="gap-1">
            <AlertTriangle className="h-3 w-3" />
            Abnormal
          </Badge>
        );
      case "pending":
        return (
          <Badge variant="warning" className="gap-1">
            <Clock className="h-3 w-3" />
            Pending
          </Badge>
        );
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const filteredResults = testResults.filter((result) => {
    const matchesSearch = result.patient
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter = filter === "all" || result.status === filter;
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
                    Test Results
                  </h1>
                </div>
                <p className="text-muted-foreground max-w-2xl">
                  View and manage laboratory test results. Track test status,
                  view detailed reports, and share results with healthcare
                  providers.
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
                >
                  <Download className="h-4 w-4" />
                  Export
                </Button>
                <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
                  <Printer className="h-4 w-4" />
                  Print
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
                        Normal Results
                      </p>
                      <p className="text-2xl font-bold">24</p>
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
                        Abnormal Results
                      </p>
                      <p className="text-2xl font-bold">5</p>
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
                        Pending Results
                      </p>
                      <p className="text-2xl font-bold">8</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-sm bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/20">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Total Tests
                      </p>
                      <p className="text-2xl font-bold">37</p>
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
              value="all"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-primary-foreground"
            >
              All Results
            </TabsTrigger>
            <TabsTrigger
              value="normal"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-primary-foreground"
            >
              Normal
            </TabsTrigger>
            <TabsTrigger
              value="abnormal"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-primary-foreground"
            >
              Abnormal
            </TabsTrigger>
            <TabsTrigger
              value="pending"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-primary-foreground"
            >
              Pending
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search results..."
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
                All Results
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter("normal")}>
                Normal
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter("abnormal")}>
                Abnormal
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter("pending")}>
                Pending
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Test Result Cards */}
        <div className="grid grid-cols-1 gap-6">
          {filteredResults.map((result) => (
            <Card key={result.id} className="overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{result.patient}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {result.testType}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {getStatusBadge(result.status)}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Test Details */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div>
                        <p className="text-sm text-muted-foreground">Date</p>
                        <p className="font-medium">{result.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Requesting Doctor
                        </p>
                        <p className="font-medium">{result.doctor}</p>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Results</p>
                      <div className="mt-2 space-y-2">
                        {Object.entries(result.results).map(([key, value]) => (
                          <div
                            key={key}
                            className="flex justify-between items-center"
                          >
                            <span className="text-sm font-medium capitalize">
                              {key}
                            </span>
                            <span className="text-sm">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-muted-foreground">Notes</p>
                  <p className="mt-1 text-sm">{result.notes}</p>
                </div>

                <div className="mt-6 flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default TestResults;
