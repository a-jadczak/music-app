import { Button } from '@/components/ui/shadcn/ui/button';
import React, { useState } from 'react';

const MAFollow = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const follow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <>
      <Button
        className={`cursor-pointer 
        ${
          isFollowing
            ? 'border-2 bg-card text-white hover:bg-card'
            : 'bg-white text-black hover:bg-white/80'
        }`}
        onClick={() => follow()}
      >
        {isFollowing ? 'Unfollow' : 'Follow'}
      </Button>
    </>
  );
};

export default MAFollow;
