import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/utils/cn';

const labelVariants = cva('', {
  variants: {
    variant: {
      default:
        'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface LabelProps
  extends React.HTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {
  children?: React.ReactNode;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <label
        className={cn(labelVariants({ variant, className }))}
        {...props}
        ref={ref}
      >
        {children}
      </label>
    );
  }
);

Label.displayName = 'Label';

export default Label;
