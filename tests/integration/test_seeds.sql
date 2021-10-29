TRUNCATE users,habits,logs RESTART IDENTITY;

INSERT INTO users (name, email, password) VALUES ('AliceTest', 'alice@test.com', '$alicetestpass'), ('BobTest', 'bob@test.com', '$bobtestpass');

INSERT INTO habits (habit_name, habit_frequency, user_id) VALUES ('Test habit 1', 'Daily', 1), ('Test habit 2', 'Daily', 2), ('Test habit 3', 'Daily', 2);

INSERT INTO logs (habit_id, log_date, habit_notes) VALUES (1, '2021-10-24', 'test notes 1'), (1, '2021-10-25', 'test notes 2');