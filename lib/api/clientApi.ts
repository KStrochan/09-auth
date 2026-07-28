import { api } from './api';
import type {
  Note,
  FetchNotesParams,
  FetchNotesResponse,
  CreateNoteData,
} from '@/types/note';
import type { User } from '@/types/user';

// ---------- Notes ----------

export async function fetchNotes({
  page,
  perPage,
  search,
  tag,
}: FetchNotesParams): Promise<FetchNotesResponse> {
  const params = {
    page,
    perPage,
    ...(search ? { search } : {}),
    ...(tag ? { tag } : {}),
  };

  const response = await api.get<FetchNotesResponse>('/notes', { params });
  return response.data;
}

export async function fetchNoteById(id: string): Promise<Note> {
  const response = await api.get<Note>(`/notes/${id}`);
  return response.data;
}

export async function createNote(note: CreateNoteData): Promise<Note> {
  const response = await api.post<Note>('/notes', note);
  return response.data;
}

export async function deleteNote(id: string): Promise<Note> {
  const response = await api.delete<Note>(`/notes/${id}`);
  return response.data;
}

// ---------- Auth ----------

export interface AuthRequestPayload {
  email: string;
  password: string;
}

export async function register(payload: AuthRequestPayload): Promise<User> {
  const response = await api.post<User>('/auth/register', payload);
  return response.data;
}

export async function login(payload: AuthRequestPayload): Promise<User> {
  const response = await api.post<User>('/auth/login', payload);
  return response.data;
}

export async function logout(): Promise<void> {
  await api.post('/auth/logout');
}

export async function checkSession(): Promise<boolean> {
  const response = await api.get<{ success: boolean }>('/auth/session');
  return response.data.success;
}

// ---------- Users ----------

export async function getMe(): Promise<User> {
  const response = await api.get<User>('/users/me');
  return response.data;
}

export interface UpdateMePayload {
  username?: string;
}

export async function updateMe(payload: UpdateMePayload): Promise<User> {
  const response = await api.patch<User>('/users/me', payload);
  return response.data;
}
