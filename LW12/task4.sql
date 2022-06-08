SELECT
    student.id,
	student.full_name,
    class.name AS class,
    faculty.name AS faculty
FROM 
    student
    INNER JOIN class ON student.class_id = class.id
    INNER JOIN faculty ON faculty.id = class.faculty_id
WHERE
    student.full_name = 'Крюков Дмитрий Александрович';