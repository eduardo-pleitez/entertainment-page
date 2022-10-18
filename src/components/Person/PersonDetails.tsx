import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchPersonDetails from '../../hooks/useFetchPersonDetails';
import { BASE_URL } from '../../assets/globalVariables';
import LoadingMessage from '../Layout/LoadingMessage';
import ErrorMessage from '../Layout/ErrorMessage';

export default function PersonDetails() {
  const params = useParams();
  const url = `${BASE_URL}person/${params.personId}?language=en-US`;
  const { data, loading, error } = useFetchPersonDetails(url);
  return (
    <div>
      {loading ? <LoadingMessage /> : null}
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </div>
  );
}