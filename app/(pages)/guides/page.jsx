import Head from 'next/head';
import Link from 'next/link';
import prisma from "../../../lib/prisma";

const GuidesPage = async () => {
  const guides = await prisma.guide.findMany({
    select: {
      id: true,
      title: true,
      description: true,
    },
  });

  return (
    <div className='max-w-lg mx-auto py-8 px-4'>  
      <Head>
        <title>Game Guides</title>
        <meta name="description" content="Explore our extensive collection of game guides." />
      </Head>

      <main className="mx-auto p-4 h-screen justify-center items-center">
        <h1 className="text-2xl font-bold my-4">Game Guides</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {guides.map(guide => (
            <div key={guide.id} className="border p-4 rounded-lg">
              <h2 className="text-xl font-semibold">{guide.title}</h2>
              <p>{guide.description}</p>
              <Link className="text-blue-500 hover:underline" href={`/guides/${guide.id}`}>
               Read more
              </Link>
            </div>
          ))}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded-lg transition duration-300">
            <Link href={`/guides/new/`}>Create New Guide</Link>
          </button>
        </div>
      </main>
    </div>
  );
};

export default GuidesPage;