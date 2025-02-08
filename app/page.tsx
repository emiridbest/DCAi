/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextPage } from 'next';
import AgentInterface from '../components/AgentInterface';

const Home: NextPage = () => {
  return (
    <div className="container mx-auto p-4">
      <AgentInterface />
    </div>
  );
};

export default Home;