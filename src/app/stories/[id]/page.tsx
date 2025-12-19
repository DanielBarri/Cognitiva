import { getStoryById } from '../storiesData';
import { notFound } from 'next/navigation';
import StoryContent from './StoryContent';

interface StoryPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { id } = await params;
  const story = getStoryById(id);

  if (!story) {
    notFound();
  }

  return <StoryContent story={story} />;
}
