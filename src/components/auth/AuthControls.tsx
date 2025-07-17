"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface AuthControlsProps {
  isMobile?: boolean;
  onMenuClose?: () => void;
  className?: string;
}

interface UserInfo {
  email?: string;
  name?: string;
  firstName?: string;
  lastName?: string;
}

interface AuthState {
  isLoggedIn: boolean;
  showAuthOptions: boolean;
  userInfo?: UserInfo;
}

export default function AuthControls({ 
  isMobile = false, 
  onMenuClose, 
  className 
}: AuthControlsProps) {
  const [authState, setAuthState] = useState<AuthState>({
    isLoggedIn: false,
    showAuthOptions: false
  });

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = () => {
    const token = localStorage.getItem("authToken");
    const userInfo = localStorage.getItem("userInfo");
    
    setAuthState(prev => ({
      ...prev,
      isLoggedIn: !!token,
      userInfo: userInfo ? JSON.parse(userInfo) : undefined
    }));
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userInfo");
    setAuthState({
      isLoggedIn: false,
      showAuthOptions: false
    });
    onMenuClose?.();
  };

  const handleShowAuthOptions = () => {
    setAuthState(prev => ({
      ...prev,
      showAuthOptions: true
    }));
  };

  const handleLinkClick = () => {
    if (isMobile) {
      onMenuClose?.();
    }
  };

  // If user is logged in, show logout button
  if (authState.isLoggedIn) {
    return (
      <div className={cn("flex items-center", className)}>
        {authState.userInfo?.name && !isMobile && (
          <span className="text-sm text-gray-600 mr-3">
            Welcome, {authState.userInfo.name}
          </span>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={handleLogout}
          className={cn(
            isMobile 
              ? "w-full justify-start text-red-600 hover:text-red-700" 
              : "text-red-600 hover:text-red-700"
          )}
        >
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </div>
    );
  }

  // If auth options are shown, display sign in and sign up buttons
  if (authState.showAuthOptions) {
    return (
      <div className={cn(
        "flex items-center space-x-2",
        isMobile ? "flex-col space-x-0 space-y-2" : "",
        className
      )}>
        <Link href="/auth/signin" onClick={handleLinkClick}>
          <Button 
            variant="ghost" 
            size="sm" 
            className={isMobile ? "w-full" : ""}
          >
            Sign In
          </Button>
        </Link>
        <Link href="/auth/signup" onClick={handleLinkClick}>
          <Button 
            size="sm" 
            className={isMobile ? "w-full" : ""}
          >
            Sign Up
          </Button>
        </Link>
      </div>
    );
  }

  // Default state: show "Get Started" button
  return (
    <div className={cn("flex items-center", className)}>
      <Button 
        size="sm" 
        onClick={handleShowAuthOptions} 
        className={isMobile ? "w-full" : ""}
      >
        Get Started
      </Button>
    </div>
  );
}

// Hook for other components to use auth state
export function useAuthState() {
  const [authState, setAuthState] = useState<AuthState>({
    isLoggedIn: false,
    showAuthOptions: false
  });

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("authToken");
      const userInfo = localStorage.getItem("userInfo");
      
      setAuthState({
        isLoggedIn: !!token,
        showAuthOptions: false,
        userInfo: userInfo ? JSON.parse(userInfo) : undefined
      });
    };

    checkAuth();
    
    // Listen for storage changes (login/logout from other tabs)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "authToken" || e.key === "userInfo") {
        checkAuth();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const login = (token: string, userInfo?: UserInfo) => {
    localStorage.setItem("authToken", token);
    if (userInfo) {
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }
    setAuthState({
      isLoggedIn: true,
      showAuthOptions: false,
      userInfo
    });
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userInfo");
    setAuthState({
      isLoggedIn: false,
      showAuthOptions: false
    });
  };

  return {
    ...authState,
    login,
    logout,
    checkAuthStatus: () => {
      const token = localStorage.getItem("authToken");
      const userInfo = localStorage.getItem("userInfo");
      return {
        isLoggedIn: !!token,
        userInfo: userInfo ? JSON.parse(userInfo) : undefined
      };
    }
  };
}
