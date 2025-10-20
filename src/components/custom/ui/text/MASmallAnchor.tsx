import { type MATextProps } from '@/scripts/types/MATextProps'

type MATextLinkProps = MATextProps & React.ComponentProps<'a'>;

const MASmallAnchor = ({ href, size = 'md', weight = 'normal', className, children }: MATextLinkProps) => {
  return (
    <a 
    href={href}
    className={`
      grayed-text
      text-${size} font-${weight} ${className} 
      hover:cursor-pointer 
      hover:text-white
      hover:underline
      `}>
      {children}
    </a>
  );
};

export default MASmallAnchor