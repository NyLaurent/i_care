"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Activity,
  FileText,
  Calendar,
  CreditCard,
  Settings,
  User,
  HelpCircle,
  Menu,
  X,
  LogOut,
  ClipboardList,
  ActivitySquare,
  Bell,
  LineChart,
  DollarSign,
  ChevronRight,
  Pill,
  Brain,
  Heart,
  Users,
  Building2,
  BarChart2,
  Microscope,
  TestTube,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type UserRole = "doctor" | "nurse" | "laboratory" | "patient" | "admin";

// Keep your doctorNavItems array
const doctorNavItems = [
  {
    title: "Home",
    icon: Home,
    href: "/dashboard",
  },
  {
    title: "Order test",
    icon: ClipboardList,
    href: "/order-test",
  },
  {
    title: "Patient Measures",
    icon: ActivitySquare,
    href: "/patient-measures",
  },
  {
    title: "Reminder",
    icon: Bell,
    href: "/reminder",
  },
  {
    title: "Tracking Entries",
    icon: LineChart,
    href: "/tracking",
  },
  {
    title: "Financial Info",
    icon: DollarSign,
    href: "/financial",
  },
  {
    title: "Help",
    icon: HelpCircle,
    href: "/help",
  },
  {
    title: "User Profile",
    icon: User,
    href: "/doctor-profile",
  },
];

// Add nurse navigation items
const nurseNavItems = [
  {
    title: "Home",
    icon: Home,
    href: "/dashboard",
  },
  {
    title: "Patient Vitals",
    icon: ActivitySquare,
    href: "/patient-vitals",
  },
  {
    title: "Medication Schedule",
    icon: Pill,
    href: "/medication-schedule",
  },
  {
    title: "Patient Records",
    icon: FileText,
    href: "/patient-records",
  },
  {
    title: "Shift Schedule",
    icon: Calendar,
    href: "/shift-schedule",
  },
  {
    title: "Help",
    icon: HelpCircle,
    href: "/help",
  },
  {
    title: "User Profile",
    icon: User,
    href: "/nurse-profile",
  },
];

// Modify the getNavItems function
const getNavItems = (role: UserRole) => {
  switch (role) {
    case "doctor":
      return [
        { name: "Home", href: "/dashboard", icon: Home },
        { name: "Appointments", href: "/appointments", icon: Calendar },
        { name: "Patients", href: "/patients", icon: Users },
        { name: "Prescriptions", href: "/prescriptions", icon: FileText },
        {
          name: "Medical Records",
          href: "/medical-records",
          icon: ClipboardList,
        },
        { name: "Help", href: "/help", icon: HelpCircle },
        { name: "User Profile", href: "/profile", icon: User },
      ];
    case "nurse":
      return [
        { name: "Home", href: "/dashboard", icon: Home },
        { name: "Patient Vitals", href: "/patient-vitals", icon: Activity },
        {
          name: "Medication Schedule",
          href: "/medication-schedule",
          icon: Pill,
        },
        { name: "Patient Records", href: "/patient-records", icon: FileText },
        { name: "Shift Schedule", href: "/shift-schedule", icon: Calendar },
        { name: "Help", href: "/help", icon: HelpCircle },
        { name: "User Profile", href: "/profile", icon: User },
      ];
    case "laboratory":
      return [
        { name: "Dashboard", href: "/laboratory/dashboard", icon: Home },
        {
          name: "Test Requests",
          href: "/laboratory/test-requests",
          icon: ClipboardList,
        },
        {
          name: "Test Results",
          href: "/laboratory/test-results",
          icon: FileText,
        },
        { name: "Equipment", href: "/laboratory/equipment", icon: Microscope },
        { name: "Inventory", href: "/laboratory/inventory", icon: TestTube },
        {
          name: "Quality Control",
          href: "/laboratory/quality-control",
          icon: Activity,
        },
        { name: "Help", href: "/laboratory/help", icon: HelpCircle },
        { name: "User Profile", href: "/laboratory/profile", icon: User },
      ];
    case "patient":
      return [
        { name: "Home", href: "/dashboard", icon: Home },
        { name: "Appointments", href: "/appointments", icon: Calendar },
        { name: "Medical Records", href: "/medical-records", icon: FileText },
        { name: "Prescriptions", href: "/prescriptions", icon: Pill },
        { name: "Billing", href: "/billing", icon: CreditCard },
        { name: "Help", href: "/help", icon: HelpCircle },
        { name: "User Profile", href: "/profile", icon: User },
      ];
    case "admin":
      return [
        { name: "Home", href: "/dashboard", icon: Home },
        { name: "Users", href: "/users", icon: Users },
        { name: "Departments", href: "/departments", icon: Building2 },
        { name: "Settings", href: "/settings", icon: Settings },
        { name: "Reports", href: "/reports", icon: BarChart2 },
        { name: "Help", href: "/help", icon: HelpCircle },
        { name: "User Profile", href: "/profile", icon: User },
      ];
    default:
      return [];
  }
};

export const Sidebar = ({ onCollapseChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  // Get nav items based on user role
  const navItems = user ? getNavItems(user.role) : [];

  // Mobile sidebar open state
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    const newCollapsedState = !isCollapsed;
    setIsCollapsed(newCollapsedState);

    // Notify parent components about the change
    if (onCollapseChange) {
      onCollapseChange(newCollapsedState);
    }

    // Also dispatch a custom event for other components
    window.dispatchEvent(
      new CustomEvent("sidebarStateChange", {
        detail: { collapsed: newCollapsedState },
      })
    );
  };

  // Close mobile sidebar when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="fixed top-4 left-4 z-50 block lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <Menu className="h-6 w-6 text-medical-blue" />
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex flex-col bg-gradient-to-b from-medical-navy via-medical-blue to-medical-navy text-white transition-all duration-300 shadow-xl",
          isCollapsed ? "w-20" : "w-64",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Sidebar header */}
        <div className="flex h-16 items-center justify-between px-4 py-6 border-b border-white/10">
          <div className="flex items-center">
            {!isCollapsed && (
              <h1 className="text-2xl font-semibold text-white ml-2 flex items-center">
                <span className="text-medical-light-blue">i</span>Care
              </h1>
            )}
            {isCollapsed && (
              <h1 className="text-2xl font-semibold text-white">
                <span className="text-medical-light-blue">i</span>
              </h1>
            )}
          </div>
          <button
            onClick={toggleSidebar}
            className="text-white/80 hover:text-white hidden lg:block p-1 rounded-full hover:bg-white/10 transition-colors"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? (
              <ChevronRight className="h-5 w-5" />
            ) : (
              <X className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Sidebar navigation */}
        <TooltipProvider delayDuration={0}>
          <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            {navItems.map((item) => (
              <Tooltip key={item.href}>
                <TooltipTrigger asChild>
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center rounded-lg px-3 py-3 text-sm font-medium transition-all duration-200",
                      location.pathname === item.href
                        ? "bg-white/15 text-white shadow-inner"
                        : "text-white/70 hover:bg-white/10 hover:text-white",
                      isCollapsed && "justify-center px-3"
                    )}
                  >
                    <item.icon
                      className={cn(
                        "h-5 w-5",
                        isCollapsed ? "mr-0" : "mr-3",
                        location.pathname === item.href
                          ? "text-white"
                          : "text-white/70"
                      )}
                    />
                    {!isCollapsed && <span>{item.name}</span>}
                  </Link>
                </TooltipTrigger>
                {isCollapsed && (
                  <TooltipContent
                    side="right"
                    className="bg-medical-navy text-white border-medical-blue"
                  >
                    {item.name}
                  </TooltipContent>
                )}
              </Tooltip>
            ))}
          </nav>
        </TooltipProvider>

        {/* Sidebar footer */}
        <div className="mt-auto border-t border-white/10 px-3 py-4">
          {/* Help section */}
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to="/help"
                  className={cn(
                    "flex items-center rounded-lg px-3 py-3 text-sm font-medium text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-white",
                    isCollapsed && "justify-center px-3"
                  )}
                >
                  <HelpCircle
                    className={cn("h-5 w-5", isCollapsed ? "mr-0" : "mr-3")}
                  />
                  {!isCollapsed && <span>Help</span>}
                </Link>
              </TooltipTrigger>
              {isCollapsed && (
                <TooltipContent
                  side="right"
                  className="bg-medical-navy text-white border-medical-blue"
                >
                  Help
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>

          {/* Logout button */}
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={logout}
                  className={cn(
                    "flex w-full items-center rounded-lg px-3 py-3 text-sm font-medium text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-white",
                    isCollapsed && "justify-center px-3"
                  )}
                >
                  <LogOut
                    className={cn("h-5 w-5", isCollapsed ? "mr-0" : "mr-3")}
                  />
                  {!isCollapsed && <span>Logout</span>}
                </button>
              </TooltipTrigger>
              {isCollapsed && (
                <TooltipContent
                  side="right"
                  className="bg-medical-navy text-white border-medical-blue"
                >
                  Logout
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>

          {/* User info */}
          {user && !isCollapsed && (
            <div className="mt-4 flex items-center px-3 py-3 bg-white/5 rounded-lg">
              <img
                src={
                  user.avatar ||
                  `https://ui-avatars.com/api/?name=${
                    user.name || "/placeholder.svg"
                  }&background=0D8ABC&color=fff`
                }
                alt={user.name}
                className="h-9 w-9 rounded-full object-cover border-2 border-white/20"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-white">{user.name}</p>
                <p className="text-xs text-white/60 capitalize">{user.role}</p>
              </div>
            </div>
          )}

          {user && isCollapsed && (
            <div className="mt-4 flex justify-center">
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="p-1 rounded-full border-2 border-white/20">
                      <img
                        src={
                          user.avatar ||
                          `https://ui-avatars.com/api/?name=${
                            user.name || "/placeholder.svg"
                          }&background=0D8ABC&color=fff`
                        }
                        alt={user.name}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="bg-medical-navy text-white border-medical-blue"
                  >
                    {user.name} ({user.role})
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          )}
        </div>
      </aside>

      {/* Sidebar overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
