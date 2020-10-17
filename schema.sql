-- Schema for creating database of user posts. Will be filled in with example posts using a seed.sql
DROP DATABASE IF EXISTS searchedRecipes;

CREATE DATABASE searchedRecipes;

USE searchedRecipes;

CREATE TABLE searched (
  id Int AUTO_INCREMENT NOT NULL,
  wordsSearched VARCHAR(255) NOT NULL,

  PRIMARY KEY (id) 
);

