select
c.course_name, c.id as courseId, c.price, g.group_name
from courses as c
inner join groups as g
on c.id = g.course_id;


select u.id, u.name, u.surname, g.id, g.group_name 
from users as u
inner join groups as g
on u.id = g.user_id
where u.role = 'student';




select 
            c.id,
            c.title,
            json_agg(u.) as users
        from
            user_course uc
        inner join
            users u
        on
            uc.user_id = u.id
        inner join 
            courses c
        on
            uc.course_id = c.id
        group by c.id, c.title