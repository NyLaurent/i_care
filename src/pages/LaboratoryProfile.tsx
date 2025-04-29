import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Settings, Bell } from "lucide-react";

const LaboratoryProfile = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Laboratory Profile</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <Button variant="outline">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Laboratory Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
                  <User className="h-10 w-10 text-gray-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Central Laboratory</h3>
                  <p className="text-gray-500">Main Branch</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Location:</span>
                  <span>123 Medical Center Drive</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Contact:</span>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Email:</span>
                  <span>lab@medicalcenter.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Accreditation:</span>
                  <span>ISO 15189:2012</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Staff Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-500">Total Staff:</span>
                <span className="font-bold">24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Lab Technicians:</span>
                <span className="font-bold">15</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Pathologists:</span>
                <span className="font-bold">4</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Support Staff:</span>
                <span className="font-bold">5</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LaboratoryProfile;
