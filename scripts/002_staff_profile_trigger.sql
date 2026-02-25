-- Auto-create staff profile on user signup
create or replace function public.handle_new_staff_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.staff_profiles (id, email, first_name, last_name, phone, department, position, is_admin)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'first_name', null),
    coalesce(new.raw_user_meta_data ->> 'last_name', null),
    coalesce(new.raw_user_meta_data ->> 'phone', null),
    coalesce(new.raw_user_meta_data ->> 'department', null),
    coalesce(new.raw_user_meta_data ->> 'position', null),
    coalesce((new.raw_user_meta_data ->> 'is_admin')::boolean, false)
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

-- Drop existing trigger if it exists
drop trigger if exists on_auth_user_created on auth.users;

-- Create trigger
create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute function public.handle_new_staff_user();
