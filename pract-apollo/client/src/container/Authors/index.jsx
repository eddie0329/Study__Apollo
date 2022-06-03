import { gql, useQuery } from '@apollo/client';
import StateLoader from '../../wrapper/StateLoader';

export const AUTHORS = gql`
  query GetAuthors {
      authors {
          name
      }
  }
`;

export default function Authors() {
  const { loading, error, data } = useQuery(AUTHORS);

  return (
    <StateLoader loading={loading} error={error}>
      <div>
        <h1>Authors</h1>
        <ul>
          {data?.authors?.map(authorInfo => <Author key={authorInfo.name} authorInfo={authorInfo} />)}
        </ul>
      </div>
    </StateLoader>
  );
}

function Author({ authorInfo }) {
  return (
    <li>{ authorInfo.name }</li>
  );
}
