import {useState, useEffect} from 'react';
import axios from 'axios';
import {EVENTS_LINK} from '../constants';

export const useFetchEvents = (pagesNum: number) => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(`${EVENTS_LINK}?per_page=${pagesNum}`);
      setEvents(response.data);
    } catch (err) {
      setError(err as Error);
      console.error('There is an error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return {events, error, isLoading, refetch};
};
