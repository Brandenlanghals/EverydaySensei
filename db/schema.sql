
USE user_profiles;

CREATE TABLE sensei (
    id INT NOT NULL,
    geo_coordinates VARCHAR(25),
    name VARCHAR(50),
    email VARCHAR(55),
    profile_photo VARBINARY(500),
    bio VARCHAR(1000),
    skills VARCHAR(100),
    skill_level INT(5),
    interests VARCHAR(100),
    credits INT(255),
    rating INT(10)
);

CREATE TABLE student (
    id INT NOT NULL,
    geo_coordinates VARCHAR(25),
    name VARCHAR(50),
    email VARCHAR(55),
    profile_photo VARBINARY(500),
    bio VARCHAR(1000),
    skill_level INT(5),
    interests VARCHAR(100),
    credits INT(255)
);