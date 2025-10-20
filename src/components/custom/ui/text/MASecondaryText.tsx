import { type MATextProps } from '@/scripts/types/MATextProps'

const MASecondaryText = ({ size = 'md', weight = 'normal', className, children }: MATextProps) => {
  return (
    <span className={`
      grayed-text
      text-${size} font-${weight} ${className} 
      cursor-default
      `}>
      {children}
    </span>
  );
};

export default MASecondaryText