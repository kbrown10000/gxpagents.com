'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, motion } from 'framer-motion';

interface MetricCounterProps {
  metric: string;        // e.g. "50-80%" or "30+" or "95%+"
  description: string;
  className?: string;
  color?: string;        // Tailwind color class like "text-blue-600"
}

export function MetricCounter({ metric, description, className = '', color = 'text-blue-600' }: MetricCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    // Parse the metric to extract numbers
    // Handles: "50-80%", "30+", "95%+", "20-35%"
    const match = metric.match(/(\d+)(?:\s*[-–]\s*(\d+))?(%?\+?%?)/);
    if (!match) {
      setDisplayValue(metric);
      return;
    }

    const start = parseInt(match[1]);
    const end = match[2] ? parseInt(match[2]) : null;
    const suffix = match[3] || '';

    const duration = 2000; // 2 seconds
    const startTime = Date.now();
    const targetNum = end || start;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      if (end) {
        const currentStart = Math.round(start * eased);
        const currentEnd = Math.round(end * eased);
        setDisplayValue(`${currentStart}-${currentEnd}${suffix}`);
      } else {
        const current = Math.round(targetNum * eased);
        setDisplayValue(`${current}${suffix}`);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, metric]);

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`text-4xl md:text-5xl font-bold ${color} mb-2`}
      >
        {displayValue}
      </motion.div>
      <p className="text-slate-600 text-sm md:text-base leading-snug">{description}</p>
    </div>
  );
}
