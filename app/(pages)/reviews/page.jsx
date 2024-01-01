import Head from "next/head";
import Link from "next/link";
// Import other necessary components and hooks

const ReviewsPage = () => {
  // Placeholder data - replace with actual data fetching logic
  const reviews = [
    {
      id: 1,
      game: "League of Legends",
      content: "Great game with a steep learning curve.",
      rating: 4.5,
    },
    {
      id: 2,
      game: "Fortnite",
      content: "Fun to play, but the community can be challenging.",
      rating: 3.8,
    },
    // Add more reviews...
  ];

  return (
    <div>
      <Head>
        <title>Game Reviews</title>
        <meta
          name="description"
          content="Read and explore game reviews from our community."
        />
      </Head>

      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold my-4">Game Reviews</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review) => (
            <div key={review.id} className="border p-4 rounded-lg">
              <h2 className="text-xl font-semibold">{review.game}</h2>
              <p className="text-gray-600">{review.content}</p>
              <p className="text-gray-800 font-bold">Rating: {review.rating}</p>

              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded-lg transition duration-300">
                <Link href={`/reviews/${review.id}`}>Read more</Link>
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ReviewsPage;
