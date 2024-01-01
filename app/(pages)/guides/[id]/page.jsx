'use client';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

const GuideDetail = () => {
  const { id } = useRouter();

  // Placeholder data - replace this with data fetching logic
  const guide = {
    id: id,
    title: 'Sample Guide Title',
    content: 'Detailed content of the guide goes here...',
  };

  // Fetch the guide data from your backend or API based on the `id`

  return (
    <div>
      <Head>
        <title>{guide.title}</title>
        <meta name="description" content={`Read more about ${guide.title}`} />
      </Head>

      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{guide.title}</h1>
        <article className="prose lg:prose-xl">
          {guide.content}
        </article>
      </main>
    </div>
  );
};

export default GuideDetail;