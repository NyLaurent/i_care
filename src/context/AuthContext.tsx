import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Role type to restrict role values
export type UserRole = "patient" | "doctor" | "admin" | "nurse" | "laboratory";

// User interface
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

// Auth context interface
interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  login: async () => {},
  logout: () => {},
  isAuthenticated: false,
});

// Mock users for demo
const MOCK_USERS = [
  {
    id: "1",
    name: "Dr. Marie Gemimah",
    email: "doctor@icare.com",
    password: "password",
    role: "doctor" as UserRole,
    avatar:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "Nyumbayire",
    email: "patient@icare.com",
    password: "password",
    role: "patient" as UserRole,
    avatar:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Admin User",
    email: "admin@icare.com",
    password: "password",
    role: "admin" as UserRole,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "Nurse Sarah Johnson",
    email: "nurse@icare.com",
    password: "password",
    role: "nurse" as UserRole,
    avatar:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: "lab-1",
    name: "Lab Technician John Smith",
    email: "lab@example.com",
    password: "password",
    role: "laboratory" as UserRole,
  },
];

// AuthProvider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("icare_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    // Simulate API request
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const foundUser = MOCK_USERS.find(
          (u) => u.email === email && u.password === password
        );

        if (foundUser) {
          // Create user object without password
          const { password, ...userWithoutPassword } = foundUser;
          setUser(userWithoutPassword);
          localStorage.setItem(
            "icare_user",
            JSON.stringify(userWithoutPassword)
          );
          resolve();
        } else {
          reject(new Error("Invalid email or password"));
        }
      }, 1000);
    });
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("icare_user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);
