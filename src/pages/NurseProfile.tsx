"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import {
  Edit,
  ChevronRight,
  Calendar,
  FileText,
  Pill,
  Activity,
  Heart,
  Clipboard,
  Share2,
  Download,
  QrCode,
  User,
  Phone,
  Mail,
  MapPin,
  AlertTriangle,
  Clock,
  ArrowRight,
  MoreHorizontal,
  Shield,
  Stethoscope,
  Bookmark,
  ChevronDown,
  Award,
  Star,
  Users,
  Building,
  GraduationCap,
  MessageSquare,
  Video,
  Briefcase,
  Clock3,
  Syringe,
  Thermometer,
  Droplet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NurseProfile = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [showQrCode, setShowQrCode] = useState(false);

  // Sample nurse data
  const nurseData = {
    id: "NR78923451",
    name: "Sarah Johnson",
    title: "RN, BSN",
    specialty: "Critical Care",
    unit: "Intensive Care Unit",
    gender: "Female",
    languages: ["English", "Spanish"],
    experience: "8 years",
    address: "456 Medical Center Blvd, Healthcare City",
    phone: "(555) 987-6543",
    email: "nurse.johnson@medicalcenter.com",
    hospital: "City Medical Center",
    education: [
      { degree: "BSN", institution: "University of Nursing", year: "2015" },
      {
        degree: "Critical Care Certification",
        institution: "American Association of Critical-Care Nurses",
        year: "2017",
      },
    ],
    certifications: [
      "Basic Life Support (BLS)",
      "Advanced Cardiac Life Support (ACLS)",
      "Critical Care Registered Nurse (CCRN)",
    ],
    rating: 4.8,
    reviewCount: 156,
    avatar:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop",
    completeness: 95,
    shift: "Day Shift",
    patientsAssigned: 4,
  };

  // Sample patient vitals
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
    },
  ];

  // Sample medication schedule
  const medicationSchedule = [
    {
      id: 1,
      patient: "John Smith",
      medication: "Insulin",
      dosage: "10 units",
      time: "08:00 AM",
      status: "pending",
    },
    {
      id: 2,
      patient: "Mary Johnson",
      medication: "Antibiotics",
      dosage: "500mg",
      time: "09:00 AM",
      status: "pending",
    },
    {
      id: 3,
      patient: "Robert Davis",
      medication: "Pain Relief",
      dosage: "5mg",
      time: "10:00 AM",
      status: "pending",
    },
  ];

  return (
    <main className="bg-gray-50 dark:bg-slate-900 min-h-screen pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600/20 via-blue-500/10 to-transparent">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <Avatar className="h-24 w-24 border-4 border-white dark:border-slate-800 shadow-lg">
                <AvatarImage src={nurseData.avatar} alt={nurseData.name} />
                <AvatarFallback className="text-3xl bg-blue-600 text-white">
                  {nurseData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl font-bold">{nurseData.name}</h1>
                  <Badge className="bg-blue-600/10 text-blue-600 hover:bg-blue-600/20 border-none">
                    <Stethoscope className="h-3 w-3 mr-1" /> Nurse
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge
                    variant="outline"
                    className="bg-white/80 dark:bg-slate-800/80"
                  >
                    {nurseData.specialty}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-white/80 dark:bg-slate-800/80"
                  >
                    {nurseData.unit}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-white/80 dark:bg-slate-800/80 flex items-center gap-1"
                  >
                    <Briefcase className="h-3 w-3 text-blue-500" />
                    {nurseData.experience}
                  </Badge>
                </div>
                <div className="mt-3 text-sm text-muted-foreground">
                  ID: {nurseData.id}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="gap-1 bg-white/80 dark:bg-slate-800/80"
                onClick={() => setShowQrCode(true)}
              >
                <QrCode className="h-4 w-4" />
                <span className="hidden sm:inline">Show QR Code</span>
              </Button>
              <Button
                variant="outline"
                className="gap-1 bg-white/80 dark:bg-slate-800/80"
              >
                <Download className="h-4 w-4" />
                <span className="hidden sm:inline">Export Data</span>
              </Button>
              <Button className="gap-1 bg-blue-600 hover:bg-blue-700">
                <Edit className="h-4 w-4" />
                <span className="hidden sm:inline">Edit Profile</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Completeness */}
      <div className="container mx-auto px-4 py-4 max-w-7xl">
        <Card className="border-none shadow-sm bg-white/80 backdrop-blur-sm dark:bg-slate-800/80">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-medium">Profile Completeness</h3>
                <p className="text-sm text-muted-foreground">
                  Complete your profile to enhance your online presence
                </p>
              </div>
              <div className="flex-1 max-w-md">
                <div className="flex justify-between text-sm mb-1">
                  <span>{nurseData.completeness}% Complete</span>
                  <span>1 item left</span>
                </div>
                <Progress value={nurseData.completeness} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <Tabs
          defaultValue={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="flex justify-between items-center mb-6">
            <TabsList className="bg-white dark:bg-slate-800 p-1 shadow-sm">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-primary-foreground"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="patients"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-primary-foreground"
              >
                Patients
              </TabsTrigger>
              <TabsTrigger
                value="medications"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-primary-foreground"
              >
                Medications
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Overview Tab */}
          <TabsContent value="overview" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Professional Information */}
              <Card className="md:col-span-2 border-none shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <User className="h-5 w-5 text-blue-600" />
                    Professional Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Full Name & Title
                        </p>
                        <p className="font-medium">
                          {nurseData.name}, {nurseData.title}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Specialty
                        </p>
                        <p className="font-medium">{nurseData.specialty}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Unit
                        </p>
                        <p className="font-medium">{nurseData.unit}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Shift
                        </p>
                        <p className="font-medium">{nurseData.shift}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Email
                        </p>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <p className="font-medium">{nurseData.email}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Phone
                        </p>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <p className="font-medium">{nurseData.phone}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Hospital
                        </p>
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4 text-muted-foreground" />
                          <p className="font-medium">{nurseData.hospital}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Address
                        </p>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <p className="font-medium">{nurseData.address}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card className="border-none shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {nurseData.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-blue-600" />
                        <p>{cert}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Patients Tab */}
          <TabsContent value="patients" className="mt-0">
            <div className="grid grid-cols-1 gap-6">
              <Card className="border-none shadow-sm">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Users className="h-5 w-5 text-blue-600" />
                      Patient Vitals
                    </CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-1 text-blue-600"
                    >
                      View All <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {patientVitals.map((patient) => (
                      <Card key={patient.id} className="border-none shadow-sm">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">{patient.patient}</p>
                              <p className="text-sm text-muted-foreground">
                                Room {patient.room}
                              </p>
                            </div>
                            <Badge
                              variant={
                                patient.status === "alert"
                                  ? "destructive"
                                  : patient.status === "monitoring"
                                  ? "secondary"
                                  : "default"
                              }
                            >
                              {patient.status}
                            </Badge>
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
                                <p className="font-medium">
                                  {patient.temperature}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Droplet className="h-4 w-4 text-blue-600" />
                              <div>
                                <p className="text-sm text-muted-foreground">
                                  Blood Pressure
                                </p>
                                <p className="font-medium">
                                  {patient.bloodPressure}
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
                                  {patient.heartRate}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Activity className="h-4 w-4 text-blue-600" />
                              <div>
                                <p className="text-sm text-muted-foreground">
                                  Oxygen
                                </p>
                                <p className="font-medium">{patient.oxygen}</p>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 text-sm text-muted-foreground">
                            Last checked: {patient.lastChecked}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Medications Tab */}
          <TabsContent value="medications" className="mt-0">
            <div className="grid grid-cols-1 gap-6">
              <Card className="border-none shadow-sm">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Pill className="h-5 w-5 text-blue-600" />
                      Medication Schedule
                    </CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-1 text-blue-600"
                    >
                      View All <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {medicationSchedule.map((med) => (
                      <div
                        key={med.id}
                        className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-lg border shadow-sm"
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/20">
                            <Syringe className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium">{med.patient}</p>
                            <p className="text-sm text-muted-foreground">
                              {med.medication} - {med.dosage}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <Badge variant="outline">{med.time}</Badge>
                          <Button variant="outline" size="sm" className="gap-1">
                            Administer
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default NurseProfile;
