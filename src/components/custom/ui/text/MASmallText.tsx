import { type MATextProps } from '@/scripts/types/MATextProps'

const MASmallText = ({ size = '2xl', weight = 'semibold', className, children }: MATextProps) => {
  return (
    <span className={`
      grayed-text
      text-${size} font-${weight} ${className} 
      hover:cursor-pointer 
      hover:text-white
      hover:underline
      `}>
      {children}
    </span>
  );
};

export default MASmallText