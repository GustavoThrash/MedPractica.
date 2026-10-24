-- Pega TODO esto en Supabase > SQL Editor > Run. ANTES cambia TU_CORREO@EJEMPLO.COM (3 veces) por el correo del administrador.
create table if not exists public.structures (
  id text primary key,
  region text not null check (region in ('torax','cuello','cabeza','abdomen')),
  name text not null,
  aliases text[] not null default '{}',
  image_path text not null,
  updated_at timestamptz not null default now()
);
alter table public.structures enable row level security;
create policy "todos leen" on public.structures for select using (true);
create policy "solo admin escribe" on public.structures for all to authenticated
  using ((auth.jwt() ->> 'email') = 'TU_CORREO@EJEMPLO.COM')
  with check ((auth.jwt() ->> 'email') = 'TU_CORREO@EJEMPLO.COM');
insert into storage.buckets (id, name, public) values ('structures', 'structures', true) on conflict (id) do nothing;
create policy "admin sube imagenes" on storage.objects for insert to authenticated
  with check (bucket_id = 'structures' and (auth.jwt() ->> 'email') = 'TU_CORREO@EJEMPLO.COM');
create policy "admin borra imagenes" on storage.objects for delete to authenticated
  using (bucket_id = 'structures' and (auth.jwt() ->> 'email') = 'TU_CORREO@EJEMPLO.COM');
