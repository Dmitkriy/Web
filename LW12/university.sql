CREATE DATABASE university CHARACTER SET utf8 COLLATE utf8_general_ci;
USE university;

CREATE TABLE faculty
(
	id 			INT AUTO_INCREMENT 	NOT NULL,
	name 		VARCHAR(255)		NOT NULL,
	PRIMARY KEY (id)
)
;

CREATE TABLE class
(
    id 				INT AUTO_INCREMENT 	NOT NULL,
    name 			VARCHAR(255)		NOT NULL,
    faculty_id		INT					NOT NULL,
    FOREIGN KEY (faculty_id) REFERENCES faculty(id),
    PRIMARY KEY (id)
)
;

CREATE TABLE student
(
    id 				INT AUTO_INCREMENT 	NOT NULL,	
    full_name		VARCHAR(255)		NOT NULL,
    age				INT					NOT NULL,
    class_id		INT					NOT NULL,
    FOREIGN KEY (class_id) REFERENCES class(id),
    PRIMARY KEY (id)
)
;

INSERT INTO faculty (name)
VALUES 
    ('ФИиВТ'),
    ('ЭФ'),
    ('ФУП')
;

INSERT INTO class (name, faculty_id)
VALUES
    ('ПС-11', 1),
    ('ПС-12', 1),
    ('ПС-13', 1),
    ('БИ-11', 2),
    ('БИ-12', 2),
    ('БИ-13', 2),
    ('ПИ-11', 3),
    ('ПИ-12', 3),
    ('ПИ-13', 3)
;

INSERT INTO student (full_name, age, class_id)
VALUES
	('Чернядьев Максим Владимирович', 		19, 1),
	('Кармазанов Роман Сергеевич', 			19, 1),
	('Осокин Владислав Михайлович', 		20, 1),
	('Аламбаев Даниил Алексеевич', 			19, 1),
	('Александров Дмитрий Владимирович', 	19, 1),
	('Безносюк Олег Николаевич', 			20, 2),
	('Петухов Дмитрий Игоревич', 			21, 2),
	('Москвин Алексей Евгеньевич', 			20, 2),
	('Каплунова Анастасия Владимировна', 	19, 2),
	('Бусыгин Алексей Александрович', 		19, 2),
	('Иванов Дмитрий Юрьевич', 				19, 3),
	('Попов Михаил Дмитриевич', 			20, 3),
	('Данилов Павел Андреевич', 			19, 3),
	('Колдырев Даниил Сергеевич', 			19, 3),
	('Смирнов Роман Дмитриевич', 			21, 3),
	('Подоплелов Дмитрий Алексеевич', 		19, 4),
	('Иванов Артем Александрович', 			19, 4),
	('Клочко Александр Александрович', 		20, 4),
	('Белов Никита Васильевич', 			19, 4),
	('Игнатьев Владислав Дмитриевич', 		19, 4),
	('Крюков Дмитрий Александрович', 		22, 5),
	('Пащенко Дарья Дмитриевна', 			19, 5),
	('Волков Семен Александрович', 			18, 5),
	('Горник Мария Юрьевна', 				19, 5),
	('Романова Анна Андреевна', 			20, 5),
	('Мыза Артём Александрович', 			19, 6),
	('Чухланцев Павел Андреевич', 			19, 6),
	('Михайлов Александр Сергеевич', 		19, 6),
	('Комиссарова Арина Григорьевна', 		19, 6),
	('Видякин Егор Викторович', 			22, 6),
	('Таныгин Вадим Викторович', 			19, 7),
	('Васильева Ольга Александровна', 		19, 7),
	('Петухов Фёдор Александрович', 		18, 7),
	('Яковлев Кирилл Игоревич', 			25, 7),
	('Петров Михаил Владимирович', 			18, 7),
	('Платонова Дарья Александровна', 		19, 8),
	('Пирогова Светлана Павловна', 			20, 8),
	('Петухов Максим Анатольевич', 			19, 8),
	('Ильдюков Дмитрий Юрьевич', 			20, 8),
	('Ткаченко Святослав Андреевич', 		19, 8),
	('Кашин Владислав Сергеевич', 			19, 9),
	('Кузнецов Вадим Алексеевич', 			20, 9),
	('Данилов Владимир Владимирович', 		19, 9),
	('Журавлёва Татьяна Олеговна', 			19, 9),
	('Арсибеков Артем Артурович', 			18, 9)
;