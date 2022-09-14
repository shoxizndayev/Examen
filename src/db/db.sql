create EXTENSION if not exists "uuid-ossp";

-- User Table

drop table if exists users;

create table users(
    id uuid not null default uuid_generate_v4() primary key,
    name varchar(64) not null,
    surname varchar(64) not null,
    username varchar(64) not null,
    password bigint not null,
    phone_number bigint not null,
    course varchar(64),
    role varchar(32) not null default 3
);

insert into users(name, surname, username, password, phone_number, role) values('Zokir', 'Berdiev', 'zokir', 8973636, 8973636, 'admin');
insert into users(name, surname, username, password, phone_number, course) values('Javohir', 'Gafurov', 'javohir', 8973142, 8973142, 'C++');
insert into users(name, surname, username, password, phone_number, course, role) values('Toshmat', 'Teshaboev', 'kimdircha', 9999999, 9999999, 'C++', 'teacher');


-- COURSES TABLE


drop table if exists courses;

create table courses(
    id uuid not null default uuid_generate_v4() primary key,
    course_name varchar(64) not null,
    description varchar(256) not null,
    price numeric(10,2) not null,
    duration varchar(32) not null
);

insert into courses(course_name, description, price, duration) values('C++', 'C++ algoritmlarni ishlashni tez va mukammal organing', 600000, '4-oy');

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

insert into groups(group_name, user_id, course_id) values('1-guruh', '35a18137-51a8-4c88-8b0a-3b7ade6a8817', '56401bca-2dd3-40bc-bf86-12e9f737139d');
insert into groups(group_name, user_id, course_id) values('1-guruh', 'ea331933-b4ca-4e2f-93cd-6c188a764d97', '56401bca-2dd3-40bc-bf86-12e9f737139d');

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

insert into homeworks(title, group_id) values('Darsdagi algoritmlarni ishlab keling', 'e94a361b-1e59-4739-9c76-92432295feaa');
