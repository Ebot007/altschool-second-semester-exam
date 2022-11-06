import { useUser } from '../hooks/useUser';

const Dashboard = () => {
  const user = useUser();

  return (
    <div className="container mx-auto">
      <p>Dashboard Page</p>
      <p>Hi, {user?.username}</p>
    </div>
  );
};

export default Dashboard;
