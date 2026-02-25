-- Staff profiles table
create table if not exists public.staff_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  first_name text,
  last_name text,
  phone text,
  department text,
  position text,
  avatar_url text,
  is_admin boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Time entries table for clock in/out
create table if not exists public.time_entries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.staff_profiles(id) on delete cascade,
  clock_in timestamptz not null,
  clock_out timestamptz,
  notes text,
  created_at timestamptz default now()
);

-- Enable RLS
alter table public.staff_profiles enable row level security;
alter table public.time_entries enable row level security;

-- Staff profiles policies
-- Users can view their own profile
create policy "staff_profiles_select_own" on public.staff_profiles 
  for select using (auth.uid() = id);

-- Admins can view all profiles
create policy "staff_profiles_select_admin" on public.staff_profiles 
  for select using (
    exists (
      select 1 from public.staff_profiles 
      where id = auth.uid() and is_admin = true
    )
  );

-- Users can update their own profile (except is_admin)
create policy "staff_profiles_update_own" on public.staff_profiles 
  for update using (auth.uid() = id);

-- Users can insert their own profile
create policy "staff_profiles_insert_own" on public.staff_profiles 
  for insert with check (auth.uid() = id);

-- Time entries policies
-- Users can view their own time entries
create policy "time_entries_select_own" on public.time_entries 
  for select using (auth.uid() = user_id);

-- Admins can view all time entries
create policy "time_entries_select_admin" on public.time_entries 
  for select using (
    exists (
      select 1 from public.staff_profiles 
      where id = auth.uid() and is_admin = true
    )
  );

-- Users can insert their own time entries
create policy "time_entries_insert_own" on public.time_entries 
  for insert with check (auth.uid() = user_id);

-- Users can update their own time entries
create policy "time_entries_update_own" on public.time_entries 
  for update using (auth.uid() = user_id);

-- Create indexes for performance
create index if not exists idx_time_entries_user_id on public.time_entries(user_id);
create index if not exists idx_time_entries_clock_in on public.time_entries(clock_in);
create index if not exists idx_staff_profiles_is_admin on public.staff_profiles(is_admin);
