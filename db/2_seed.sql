INSERT INTO users (name, email, password) VALUES ('Katie', 'katie@email.com', '$securepass'), ('Chris', 'chris@email.com', '$alsosecure');

INSERT INTO habits (habit_name, habit_frequency, user_id) VALUES ('Drink 2 litres of water', 'Daily', 1), ('Run 5k', 'Monthly', 2), ('Sleep 8 hours every day', 'Weekly', 1);

INSERT INTO logs (habit_id, log_date, habit_notes) VALUES (1, '2021-10-24', 'I drank 2 litres today'), (1, '2021-10-25', ''), (2, '2021-10-25', 'I did it'), (2, '2021-11-25', 'I did it'), (3, '2021-10-18', ' '), (3, '2021-10-25', ' '),(3, '2021-11-01', ' '), (3, '2021-11-08', ' ');