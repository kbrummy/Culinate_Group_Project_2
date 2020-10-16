-- Schema for creating database of user posts. Will be filled in with example posts using a seed.sql
DROP DATABASE IF EXISTS recipes_db;

CREATE DATABASE recipes_db;

USE recipes_db;

CREATE TABLE `saved_recipes` (
  `id` Int AUTO_INCREMENT NOT NULL,
  `entreeName` VARCHAR( 255) NOT NULL,
  `entreeImage` TEXT NOT NULL,
  `entreeRecipe` TEXT NOT NULL,

  PRIMARY KEY ( `id` ) 
);

INSERT INTO saved_recipes (entreeName, entreeImage, entreeRecipe)
VALUES ("pasta", "figure out way to add picture", "This is a test recipe");