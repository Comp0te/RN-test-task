import { useEffect, useRef, useState } from 'react';

export const useIsFirstLoading = (isLoading: boolean): boolean => {
  const prevIsLoading = useRef<boolean>(false);
  const [isFirstLoading, setIsFirstLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!isLoading && prevIsLoading.current) {
      setIsFirstLoading(false);
    }
  }, [isLoading]);

  if (isLoading && isFirstLoading) {
    prevIsLoading.current = true;
  }

  return isFirstLoading;
};