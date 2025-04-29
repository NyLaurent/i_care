import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, AlertCircle, TrendingUp } from "lucide-react";

const QualityControl = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Quality Control</h1>
        <div className="flex gap-2">
          <Button>
            <ClipboardCheck className="mr-2 h-4 w-4" />
            New QC Test
          </Button>
          <Button variant="outline">
            <TrendingUp className="mr-2 h-4 w-4" />
            View Reports
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>QC Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Tests Today</span>
                <span className="font-bold">24</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Passed</span>
                <span className="font-bold text-green-600">22</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Failed</span>
                <span className="font-bold text-red-600">2</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Pending Review</span>
                <span className="font-bold text-yellow-600">0</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Compliance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Current Month</span>
                <span className="font-bold">98.5%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Last Month</span>
                <span className="font-bold">97.8%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-yellow-600">
                <AlertCircle className="h-4 w-4" />
                <span>2 QC tests require investigation</span>
              </div>
              <div className="flex items-center gap-2 text-red-600">
                <AlertCircle className="h-4 w-4" />
                <span>1 critical QC failure detected</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QualityControl;
