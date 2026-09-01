import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, error, ...props }, ref) => {
    return (
      <div className="relative group w-full">
        {icon && (
          <div
            className={cn(
              'absolute left-4 top-1/2 -translate-y-1/2 text-xl transition-colors',
              error
                ? 'text-danger-text'
                : 'text-text-secondary group-focus-within:text-primary'
            )}
          >
            {icon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            'flex h-14 w-full rounded-md border bg-input-bg px-3 py-2 text-sm font-mono text-text-primary ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-text-secondary/50 focus-visible:outline-none focus-visible:border-[#C0C2C5] focus-visible:bg-surface transition-all disabled:cursor-not-allowed disabled:opacity-50',
            icon && 'pl-12',
            error ? 'border-[#ffb4ab]' : 'border-border-subtle',
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
