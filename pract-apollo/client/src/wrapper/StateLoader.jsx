export default function StateLoader({ loading, error, children }) {
  if (loading) return <div>Loading...</div>;
  else if (error) return <div>Error!!!</div>;
  else return children;
}