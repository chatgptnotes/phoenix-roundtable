
-- 1) Create table to store Join form submissions
create table if not exists public.join_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  mobile text not null,
  email text not null,
  city text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 2) Enable Row Level Security
alter table public.join_requests enable row level security;

-- 3) Keep updated_at fresh
drop trigger if exists set_updated_at_on_join_requests on public.join_requests;
create trigger set_updated_at_on_join_requests
before update on public.join_requests
for each row execute function public.update_updated_at_column();

-- 4) Policies
-- Allow anyone (including anonymous visitors) to create a join request
drop policy if exists "Public can create join requests" on public.join_requests;
create policy "Public can create join requests"
on public.join_requests
for insert
with check (true);

-- Allow authenticated users (dashboard/admin) to read, update, and delete
drop policy if exists "Admins can view join requests" on public.join_requests;
create policy "Admins can view join requests"
on public.join_requests
for select
using (auth.role() = 'authenticated');

drop policy if exists "Admins can update join requests" on public.join_requests;
create policy "Admins can update join requests"
on public.join_requests
for update
using (auth.role() = 'authenticated');

drop policy if exists "Admins can delete join requests" on public.join_requests;
create policy "Admins can delete join requests"
on public.join_requests
for delete
using (auth.role() = 'authenticated');
