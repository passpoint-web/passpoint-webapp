
import { useState, useEffect } from 'react';
import { Activity, Globe, Shield, TrendingUp } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const RealTimeTrustSignals = () => {
  const [metrics, setMetrics] = useState({
    transactionsToday: 47832,
    uptime: 99.97,
    activeCountries: 28,
    processingTime: 1.2
  });

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setMetrics(prev => ({
        transactionsToday: prev.transactionsToday + Math.floor(Math.random() * 5),
        uptime: 99.97 + (Math.random() * 0.02),
        activeCountries: prev.activeCountries,
        processingTime: 1.0 + (Math.random() * 0.5)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const trustMetrics = [
    {
      icon: <Activity className="text-green-500" size={24} />,
      label: "Transactions Today",
      value: metrics.transactionsToday.toLocaleString(),
      color: "text-green-600",
      bgColor: "bg-green-50",
      pulse: true
    },
    {
      icon: <Shield className="text-blue-500" size={24} />,
      label: "Uptime",
      value: `${metrics.uptime.toFixed(2)}%`,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Globe className="text-purple-500" size={24} />,
      label: "Active Countries",
      value: metrics.activeCountries.toString(),
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: <TrendingUp className="text-orange-500" size={24} />,
      label: "Avg Processing Time",
      value: `${metrics.processingTime.toFixed(1)}s`,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Live Network Status
            </h3>
            <p className="text-gray-600">Real-time metrics from our African payment infrastructure</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustMetrics.map((metric, index) => (
              <div
                key={index}
                className={`${metric.bgColor} rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 relative overflow-hidden`}
              >
                {metric.pulse && (
                  <div className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                )}
                <div className="flex justify-center mb-3">
                  {metric.icon}
                </div>
                <div className={`text-2xl font-bold ${metric.color} mb-1`}>
                  {metric.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RealTimeTrustSignals;
