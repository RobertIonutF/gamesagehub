'use client';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
// Import other necessary components and hooks

const ChallengeDetail = () => {
  const { id } = useRouter();

  // Placeholder data - replace this with data fetching logic
  const challenge = {
    id: id,
    title: 'Sample Challenge Title',
    description: 'Detailed description of the challenge goes here...',
    reward: 100,
    // Additional fields like 'status', 'requirements', etc., can be added
  };

  // Fetch the challenge data from your backend or API based on the `id`

  return (
    <div>
      <Head>
        <title>{challenge.title}</title>
        <meta name="description" content={`Participate in the challenge: ${challenge.title}`} />
      </Head>

      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{challenge.title}</h1>
        <p className="mb-2">{challenge.description}</p>
        <p className="font-bold">Reward Points: {challenge.reward}</p>
        {/* Additional details and participation button/logic */}
      </main>
    </div>
  );
};

export default ChallengeDetail;