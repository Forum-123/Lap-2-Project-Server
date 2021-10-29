INSERT INTO users (name, email, password) VALUES ('Katie', 'katie@email.com', '$2a$10$B7lvFay3RntDIuJ9VIucNuXf2uZsb8hdJ5dKHehEn/lWvLrZb6Gn2'), ('Chris', 'chris@email.com', '$2a$10$B7lvFay3RntDIuJ9VIucNuXf2uZsb8hdJ5dKHehEn/lWvLrZb6Gn2');

INSERT INTO habits (habit_name, habit_frequency, user_id) VALUES ('Drink 2 litres of water', 'Daily', 1), 
                                                                 ('Run 5k', 'Monthly', 2), 
                                                                 ('Sleep 8 hours every day', 'Weekly', 1),
                                                                 ('Go for a bike ride', 'Daily', 1),
                                                                 ('Eat 5 pieces of fruit', 'Daily', 1);

INSERT INTO logs (habit_id, log_date, habit_notes) VALUES (1, '2021-10-24', 'I drank 2 litres today'), 
                                                          (1, '2021-10-25', ''), 
                                                          (1, '2021-10-26', ''), 
                                                          (1, '2021-10-27', ''), 
                                                          (1, '2021-10-28', ''),
                                                          (2, '2021-10-25', 'I did it'), 
                                                          (2, '2021-11-25', 'I did it'), 
                                                          (3, '2021-10-14', ' '), 
                                                          (3, '2021-10-21', ' '),
                                                          (4, '2021-10-28', ' ');
                                                