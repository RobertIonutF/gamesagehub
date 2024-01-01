"use client";
import { useRouter } from "next/navigation";
import Head from "next/head";

const ReviewDetail = () => {
  const { id } = useRouter();

  const review = {
    id: id,
    game: "Sample Game",
    content: "Detailed content of the review goes here...",
    rating: 4.5,
  };

  // Fetch the review data from your backend or API based on the `id`

  return (
    <div>
      <Head>
        <title>Review of {review.game}</title>
        <meta
          name="description"
          content={`Read more about ${review.game} review`}
        />
      </Head>

      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Review: {review.game}</h1>
        <p className="text-gray-800 font-bold">Rating: {review.rating}</p>
        <article className="prose lg:prose-xl">{review.content}</article>
      </main>
    </div>
  );
};

export default ReviewDetail;
