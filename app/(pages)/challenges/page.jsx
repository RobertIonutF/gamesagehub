import Head from 'next/head';
import Link from 'next/link';
// Import other necessary components and hooks

const ChallengesPage = () => {
  // Placeholder data - replace with actual data fetching logic
  const challenges = [
    { id: 1, title: 'League of Legends Weekend Warrior', description: 'Win 5 matches over the weekend.', reward: 50 },
    { id: 2, title: 'Fortnite Builder', description: 'Build 500 structures in a single match.', reward: 30 },
    // Add more challenges...
  ];

  return (
    <div>
      <Head>
        <title>Gaming Challenges</title>
        <meta name="description" content="Participate in exciting gaming challenges and earn rewards." />
      </Head>

      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold my-4">Gaming Challenges</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {challenges.map(challenge => (
            <div key={challenge.id} className="border p-4 rounded-lg">
              <h2 className="text-xl font-semibold">{challenge.title}</h2>
              <p>{challenge.description}</p>
              <p className="font-bold">Reward Points: {challenge.reward}</p>
              {/* Add a button or link to participate in the challenge */}
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded-lg transition duration-300">
                <Link href={`/challenges/${challenge.id}`}>Participate</Link>
              </button> 
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ChallengesPage;