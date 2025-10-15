import { type MATextProps } from '@/scripts/types/MATextProps'

const MATitle = ({ size = '2xl', weight = 'semibold', className, children }: MATextProps) => {
  return (
    <h2 className={`text-${size} font-${weight} hover:cursor-default ${className}`}>
      {children}
    </h2>
  );
};

export default MATitle