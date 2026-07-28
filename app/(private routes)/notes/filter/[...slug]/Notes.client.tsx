'use client';

import Link from 'next/link';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { fetchNotes } from '@/lib/api/clientApi';
import type { NoteTag } from '@/types/note';

import NoteList from '@/components/NoteList/NoteList';
import SearchBox from '@/components/SearchBox/SearchBox';
import Pagination from '@/components/Pagination/Pagination';

import css from '@/components/NotesPage/NotesPage.module.css';

const PER_PAGE = 12;

interface NotesClientProps {
  tag?: NoteTag;
}

export default function NotesClient({ tag }: NotesClientProps) {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const { data, isLoading, isError } = useQuery({
    queryKey: ['notes', page, PER_PAGE, search, tag],
    queryFn: () =>
      fetchNotes({
        page,
        perPage: PER_PAGE,
        search,
        tag,
      }),
    placeholderData: keepPreviousData,
  });

  const handleSearchChange = useDebouncedCallback((value: string) => {
    setSearch(value);
    setPage(1);
  }, 500);

  return (
    <main className={css.app}>
      <div className={css.toolbar}>
        <SearchBox onChange={handleSearchChange} />

        <Link
          href="/notes/action/create"
          className={css.button}
        >
          Create note +
        </Link>
      </div>

      {isLoading && <p>Loading, please wait...</p>}

      {isError && <p>Something went wrong.</p>}

      {data && data.notes.length > 0 ? (
        <NoteList notes={data.notes} />
      ) : (
        !isLoading && <p>No notes found.</p>
      )}

      {data && data.totalPages > 1 && (
        <Pagination
          pageCount={data.totalPages}
          currentPage={page}
          onPageChange={setPage}
        />
      )}
    </main>
  );
}