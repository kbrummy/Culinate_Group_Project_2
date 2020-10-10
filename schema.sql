-- Schema for creating database of user posts. Will be filled in with example posts using a seed.sql
DROP DATABASE IF EXISTS user_posts_db;

CREATE DATABASE user_posts_db;

USE user_posts_db;

CREATE TABLE `posts` (
  `id` Int AUTO_INCREMENT NOT NULL,
  `username` VARCHAR( 255) NOT NULL,
  `imageSource` TEXT NOT NULL,
  `caption` TEXT NOT NULL,

  PRIMARY KEY ( `id` ) 
);

INSERT INTO posts (username, imageSource, caption)
VALUES ("joesmith", "figure out way to add picture", "This is a test post");