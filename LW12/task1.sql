SELECT 
    student.id,
	student.full_name,
    student.age,
    class.name
FROM 
    student
    INNER JOIN class ON student.class_id = class.id
WHERE 
    student.age = 19;