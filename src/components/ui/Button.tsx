import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

const variants = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg',
  secondary: 'bg-slate-100 text-slate-700 hover:bg-slate-200',
  outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button'
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}
