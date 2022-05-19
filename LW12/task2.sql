SELECT
    student.id,
	student.full_name,
    class.name
FROM 
    student
    INNER JOIN class ON student.class_id = class.id
WHERE
    class.name = 'БИ-12';