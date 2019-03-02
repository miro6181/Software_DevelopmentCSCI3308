CREATE TABLE university_info(
  University_Name TEXT,
  Date_Established DATE,
  Address TEXT,
  Student_Population INTEGER,
  Acceptance_Rate FLOAT
);

INSERT INTO university_info(University_Name, Date_Established, Address, Student_Population, Acceptance_Rate)
VALUES ('CU Boulder', to_date('1876', 'YYYY'), '1100 28th St. Boulder, CO 80303', 35000, 80);

SELECT name, major FROM football_players ORDER BY major;

SELECT name, rushing_yards FROM football_players WHERE rushing_yards > 70;

SELECT * FROM football_games WHERE visitor_name = 'Nebraska';

SELECT * FROM football_games WHERE home_score > visitor_score;

SELECT visitor_name, game_date FROM football_games WHERE game_date > '2018-08-01' and game_date < '2019-01-01';

CREATE VIEW wins AS
SELECT COUNT(*) FROM football_games WHERE home_score > visitor_score;

CREATE VIEW games AS
SELECT COUNT(*) FROM football_games;

SELECT CAST((SELECT * FROM wins) AS FLOAT)/CAST((SELECT * FROM games) AS FLOAT);

CREATE VIEW cedric_games AS
SELECT COUNT(*) FROM football_games WHERE (SELECT id FROM football_players WHERE name = 'Cedric Vega') = ANY(players);

SELECT CAST((SELECT rushing_yards FROM football_players WHERE name = 'Cedric Vega') AS FLOAT)/CAST((SELECT * FROM cedric_games) AS FLOAT);
