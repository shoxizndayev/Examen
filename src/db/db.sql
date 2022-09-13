-- users (username, password, role, course, phone number, id--UUID)
-- course (id--UUID, name, description, price, duration)
-- homework (id--UUID, title, )
-- group (id--UUID, name, FK course, FK teacher. )

create EXTENSION if not exists "uuid-ossp";

drop table if exists users;

create table users(
    id uuid not null default uuid_generate_v4() primary key,
    name varchar(64) not null,
    surname varchar(64) not null,
    username varchar(64) not null,
    password bigint not null,
    phone_number bigint not null,
    course varchar(64),
    role varchar(32) not null default 'student'
);

insert into users(name, surname, username, password, phone_number, role) values('Farhod', 'Shoxizindayev', 'farhod', 8973618, 8973618, 'admin' );
insert into users(name, surname, username, password, phone_number, course) values('Javohir', 'Gafurov', 'javohir', 8973142, 8973142, 'C++' );
insert into users(name, surname, username, password, phone_number, course, role) values('Toshmat', 'Teshaboev', 'kimdircha', 9999999, 9999999, 'C++', 2);

delete from users where id='7d7eae2e-c389-42fb-9da5-9eb2845a5c07';

alter table users drop column role;

alter table users add role int not null default 3;

select * from users where role = 'teacher';



-- COURSES TABLE


drop table if exists courses;

create table courses(
    id uuid not null default uuid_generate_v4() primary key,
    course_name varchar(64) not null,
    description varchar(256) not null,
    price numeric(10,2) not null,
    duration varchar(32) not null
);

insert into courses(course_n    ame, description, price, duration) values('C++', 'juda zor kurs', 600000, '4-oy');

-- GROUPS TABLE

drop table if exists groups;

create table groups(
    id uuid not null default uuid_generate_v4() primary key,
    group_name varchar(64) not null,
    user_id uuid,
    foreign key(user_id)
    references users(id)
    on delete cascade,
    course_id uuid,
    foreign key (course_id)
    references courses(id)
    on delete cascade
);

insert into groups(group_name, user_id, course_id) values('N1', '577df491-5e2b-4534-99fe-5b38e79f4452', '917cfdf7-8538-4079-b9f4-11e75024a3a9');

delete from groups where id='d68fe68d-77a4-40e1-a1c7-12545cd4f38b';

-- HOMEWORKS TABLE

drop table if exists homeworks;

create table homeworks(
    id uuid not null default uuid_generate_v4() primary key,
    title varchar(64) not null,
    group_id uuid,
    foreign key (group_id)
    references groups(id)
    on delete cascade
);

insert into homeworks(title, group_id) values('nimadr qilib kel', '8636e110-f4c9-4a44-84e6-76a924b6a54a');
