import { useEffect, useState } from 'react';

export const useFetchData = ( url: string) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data['products']);

      } catch (error: any) {
        setError(error.message || 'Loading failed');
      } finally {
        setIsLoading(false);
      }
    };

    const loadData = async () => {
      fetchData();
      document.querySelector('.loader-overlay')?.classList.add('fade-out');
    };

    setTimeout(loadData, 1500);
  }, []);

  return { data, isLoading, error };
};