import { type MATextProps } from '@/scripts/types/MATextProps'

const sizeMap = {
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
};

const MATitle = ({ size = '2xl', weight = 'semibold', className, children }: MATextProps) => {
  return (
    <h2 className={`${sizeMap[size]} font-${weight} hover:cursor-default ${className}`}>
      {children}
    </h2>
  );
};


export default MATitle