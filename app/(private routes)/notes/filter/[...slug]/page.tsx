import type { Metadata } from 'next';

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { notFound } from 'next/navigation';

import { fetchNotes } from '@/lib/api/serverApi';
import type { NoteTag } from '@/types/note';

import NotesClient from './Notes.client';

const PER_PAGE = 12;

const validTags: NoteTag[] = [
  'Todo',
  'Work',
  'Personal',
  'Meeting',
  'Shopping',
];

interface NotesPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

function getTagFromSlug(slug: string[]): NoteTag | undefined {
  const currentTag = slug[0];

  if (!currentTag || currentTag === 'all') {
    return undefined;
  }

  if (validTags.includes(currentTag as NoteTag)) {
    return currentTag as NoteTag;
  }

  notFound();
}

export async function generateMetadata({
  params,
}: NotesPageProps): Promise<Metadata> {
  const { slug } = await params;

  const tag = slug[0];

  const title = tag && tag !== 'all'
    ? `${tag} notes | NoteHub`
    : 'All notes | NoteHub';

  const description = tag && tag !== 'all'
    ? `Notes filtered by ${tag} tag.`
    : 'All personal notes in NoteHub.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://notehub.com/notes/filter/${tag ?? 'all'}`,
      images: [
        {
          url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
          width: 1200,
          height: 630,
          alt: 'NoteHub',
        },
      ],
    },
  };
}

export default async function NotesPage({ params }: NotesPageProps) {
  const { slug } = await params;

  const tag = getTagFromSlug(slug);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['notes', 1, PER_PAGE, '', tag],
    queryFn: () =>
      fetchNotes({
        page: 1,
        perPage: PER_PAGE,
        search: '',
        tag,
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}