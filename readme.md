to connect to the mandatory personal UMN DB provided:
'''mysql -uC4131S25S01U12 -hcse-mysql-classes-01.cse.umn.edu -P3306 -p C4131S25S01U12'''
'''194'''

sql command ran:
'''
CREATE TABLE schedule (  id INT AUTO_INCREMENT PRIMARY KEY,  event VARCHAR(256),  day VARCHAR(256),  start TIME,  end TIME,  location VARCHAR(256),  phone VARCHAR(256),  url VARCHAR(256)  );
'''

To show you have successfully created the table
'''
show tables
'''

To add the original real schedule events:
'''
INSERT INTO schedule (event, day, start, end, phone, location, url) VALUES
('CSCI 4131 lec', 'Monday', '11:15:00', '12:30:00', NULL, '257 S 19th Ave, Minneapolis, MN 55455', 'https://umtc.catalog.prod.coursedog.com/courses/7906541'),
('Jour 3765 lec', 'Monday', '13:00:00', '14:15:00', NULL, '222 Pleasant St SE, Minneapolis, MN 55455', 'https://umtc.catalog.prod.coursedog.com/courses/0002431'),
('CSCI 4211 lec', 'Monday', '13:00:00', '14:15:00', NULL, '222 Pleasant St SE, Minneapolis, MN 55455', 'https://umtc.catalog.prod.coursedog.com/courses/7906551'),
('PE 1033', 'Tuesday', '10:10:00', '11:00:00', NULL, '1900 University Ave SE, Minneapolis, MN 55455 308', 'https://umtc.catalog.prod.coursedog.com/courses/0026611'),
('CSCI 4131 lec', 'Wednesday', '11:15:00', '12:30:00', NULL, '257 S 19th Ave, Minneapolis, MN 55455', 'https://umtc.catalog.prod.coursedog.com/courses/7906541'),
('Jour 3765 lec', 'Wednesday', '13:00:00', '14:15:00', NULL, '222 Pleasant St SE, Minneapolis, MN 55455', 'https://umtc.catalog.prod.coursedog.com/courses/0002431'),
('CSCI 4211 lec', 'Wednesday', '13:00:00', '14:15:00', NULL, '222 Pleasant St SE, Minneapolis, MN 55455', 'https://umtc.catalog.prod.coursedog.com/courses/7906551'),
('PE 1033', 'Thursday', '10:10:00', '11:00:00', NULL, '1900 University Ave SE, Minneapolis, MN 55455 308', 'https://umtc.catalog.prod.coursedog.com/courses/0026611'),
('lab work', 'Friday', '10:10:00', '14:00:00', NULL, '410 Church St SE, Minneapolis, MN 55455', 'https://mcrlab.umn.edu'),
('gym-exercise', 'Saturday', '17:00:00', '18:00:00', NULL, '123 SE Harvard St, Minneapolis, MN 55455', 'https://recwell.umn.edu/'),
('at home resting', 'Sunday', '00:00:00', '23:59:00', NULL, 'Coffman Memorial Union, 300 Washington Ave SE 4th Floor, Minneapolis, MN 55455', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBpQcGixfQ-RibVNI4BxS1YfufI7vVxOxH5Q&s');
'''