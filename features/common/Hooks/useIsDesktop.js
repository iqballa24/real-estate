import { useEffect, useState } from 'react';

export const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(null);

  useEffect(() => {
    const updateMedia = () => {
      if (window.innerWidth > 1000) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };

    updateMedia();

    window.addEventListener('resize', updateMedia);

    return () => {
      window.removeEventListener('resize', updateMedia);
    };
  }, []);

  return { isDesktop };
};
