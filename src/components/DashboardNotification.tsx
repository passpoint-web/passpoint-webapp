
import { useState, useEffect } from 'react';
import { X, Info } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const DashboardNotification = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if notification has been dismissed before
    const isDismissed = localStorage.getItem('dashboardNotificationDismissed');
    if (!isDismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('dashboardNotificationDismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 right-4 z-[60] max-w-xs animate-fade-in">
      <Alert className="relative bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-l-blue-500 border-blue-200/60 shadow-lg">
        <Info className="h-4 w-4 text-blue-600" />
        <AlertDescription className="text-xs text-blue-800 pr-6">
          <div className="font-semibold mb-1">🚀 New Dashboard Launched!</div>
          <div>
            Existing users: Enter your email and reset your password to access the new dashboard. 
            <span className="font-medium"> You'll need to re-invite team members after login.</span>
          </div>
        </AlertDescription>
        <button
          onClick={handleDismiss}
          className="absolute top-1.5 right-1.5 p-1 text-blue-600 hover:text-blue-800 hover:bg-blue-100 rounded-full transition-colors"
          aria-label="Dismiss notification"
        >
          <X size={14} />
        </button>
      </Alert>
    </div>
  );
};

export default DashboardNotification;
