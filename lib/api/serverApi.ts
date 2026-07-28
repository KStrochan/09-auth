import { cookies } from 'next/headers';
import { api } from './api';
import type { Note, FetchNotesParams, FetchNotesResponse } from '@/types/note';
import type { User } from '@/types/user';

// Функції для серверних компонентів. На сервері axios не має доступу до
// куків браузера, тож передаємо їх вручну через заголовок Cookie.

export async function fetchNotes({
  page,
  perPage,
  search,
  tag,
}: FetchNotesParams): Promise<FetchNotesResponse> {
  const cookieStore = await cookies();

  const params = {
    page,
    perPage,
    ...(search ? { search } : {}),
    ...(tag ? { tag } : {}),
  };

  const response = await api.get<FetchNotesResponse>('/notes', {
    params,
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return response.data;
}

export async function fetchNoteById(id: string): Promise<Note> {
  const cookieStore = await cookies();

  const response = await api.get<Note>(`/notes/${id}`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return response.data;
}

export async function getMe(): Promise<User> {
  const cookieStore = await cookies();

  const response = await api.get<User>('/users/me', {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return response.data;
}

export async function checkSession() {
  const cookieStore = await cookies();

  const response = await api.get('/auth/session', {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return response;
}
