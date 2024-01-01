'use client';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';

const AddForm = () => {
  const { data: session } = useSession();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    const guideData = {
      title,
      description,
      content,
      authorId: session.user.name, 
    };

    // Post the data to your API route
    const response = await fetch('/api/guide/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(guideData),
    });

    if (response.ok) {
      // Reset form fields after successful submission
      setTitle('');
      setDescription('');
      setContent('');
      toast.success('Guide added successfully!');
      // Handle success (e.g., show a message)
    } else {
      console.log(response);
      toast.error('Something went wrong!');
    }
  };

  if (!session) {
    return <p className="text-red-500">You must be logged in to add a guide.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="max-w-lg mx-auto py-8 px-4">
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <input 
          id="title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          required 
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <input 
          id="description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          required 
        />
      </div>

      <div className="mb-6">
        <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
        <textarea 
          id="content" 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          required 
        ></textarea>
      </div>

      <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit Guide</button>
    </form>
  );
};

export default AddForm;