DROP DATABASE IF EXISTS paknplay_db;
CREATE DATABASE paknplay_db;

USE paknplay_db;

CREATE TABLE user_accounts (
  user_id INT(11) NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(20) NOT NULL,
  last_name VARCHAR(20) NOT NULL,
  password VARCHAR(20) NOT NULL,
  street_address VARCHAR(45) NOT NULL,
  city VARCHAR(20) NOT NULL,
  state VARCHAR(2) NOT NULL,
  email VARCHAR(45) NOT NULL,
  PRIMARY KEY (user_id)
);

CREATE TABLE stock (
  item_id INT(11) NOT NULL AUTO_INCREMENT,
  user_id INT,
  item_type VARCHAR(20) NOT NULL,
  item_name VARCHAR(45) NOT NULL,
  item_description VARCHAR(255),
  quantity INT NOT NULL,
  total_uses INT NOT NULL, 
  updated_at DATE NOT NULL, 
  created_at DATE NOT NULL,
  PRIMARY KEY (item_id),
  FOREIGN KEY (user_id) REFERENCES user_accounts(user_id)
);



INSERT INTO user_accounts (first_name, last_name, password, street_address, city, state, email)
VALUES ("Steve", "Smith", "password1", "1 Main Street", "Dover", "NH", "email@yahoo.com"),
("Mike", "Smith", "password2", "2 Main Street", "Dover", "NH", "email2@yahoo.com"),
("Dave", "Smith", "password3", "3 Main Street", "Dover", "NH", "email3@yahoo.com");


INSERT INTO stock (user_id, item_type, item_name, item_description, quantity, total_uses, updated_at, created_at)
VALUES (1, "clothing", "shorts", "shorts for boys up to 6 months old", 3, 4, "2018-07-11", "2018-07-11"),
(1, "toiletries", "pampers", "pampers for babies up to 3 months old", 3, 4, "2018-07-11", "2018-07-11"),
(1, "toys", "elmo", "tickle me elmo doll", 3, 4, "2018-07-11", "2018-07-11");










/* ----------------------------Dave's changes to play around with fields and front end code---------------------------- */

DROP DATABASE IF EXISTS paknplay_db;
CREATE DATABASE paknplay_db;

USE paknplay_db;

CREATE TABLE user_accounts (
  user_id INT(11) NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(20) NOT NULL,
  last_name VARCHAR(20) NOT NULL,
  password VARCHAR(20) NOT NULL,
  street_address VARCHAR(45) NOT NULL,
  city VARCHAR(20) NOT NULL,
  state VARCHAR(2) NOT NULL,
  email VARCHAR(45) NOT NULL,
  PRIMARY KEY (user_id)
);

CREATE TABLE stock (
  item_id INT(11) NOT NULL AUTO_INCREMENT,
  user_id INT,
  first_name VARCHAR(20) NOT NULL,
  last_name VARCHAR(20) NOT NULL,
  item_category VARCHAR(20) NOT NULL,
  item_name VARCHAR(45) NOT NULL,
  item_description VARCHAR(255),
  photo_link VARCHAR(555) NOT NULL,
  quantity INT(11) NOT NULL,
  lend BOOLEAN NOT NULL DEFAULT 0,
  donate BOOLEAN NOT NULL DEFAULT 0,
  total_uses INT(11) NOT NULL, 
  updated_at DATE NOT NULL, 
  created_at DATE NOT NULL,
  PRIMARY KEY (item_id),
  FOREIGN KEY (user_id) REFERENCES user_accounts(user_id)
);



INSERT INTO user_accounts (first_name, last_name, password, street_address, city, state, email)
VALUES ("Steve", "Smith", "password1", "1 Main Street", "Dover", "NH", "email@yahoo.com"),
("Mike", "Smith", "password2", "2 Main Street", "Dover", "NH", "email2@yahoo.com"),
("Dave", "Smith", "password3", "3 Main Street", "Dover", "NH", "email3@yahoo.com");


INSERT INTO stock (user_id, first_name, last_name, item_category, item_name, item_description, photo_link, quantity, lend, donate, total_uses, updated_at, created_at)
VALUES (1, "Steve", "Smith", "explore", "shorts", "shorts for boys up to 6 months old", "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiprIGi24vcAhXkmuAKHeQyCTkQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pinterest.co.uk%2Fpin%2F499407046163154904%2F&psig=AOvVaw2dYY0Vh0FzAcmfqOU5pczA&ust=1531009038987469", 3, 1, 0, 4, "2018-07-11", "2018-07-11"),
(1, "Mike", "Smith", "bath", "pampers", "pampers for babies up to 3 months old", "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj8vK-U3IvcAhUwn-AKHT1OAToQjRx6BAgBEAU&url=http%3A%2F%2Fwww.mommyof2embracinglife.com%2Fblog%2Fcategory%2Fpampers&psig=AOvVaw3sSD0rwMntBgDtq7uH3a-b&ust=1531009253262282", 3, 0, 1, 4, "2018-07-11", "2018-07-11"),
(1, "Dave", "Smith", "play", "elmo", "tickle me elmo doll", "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiu-7C23IvcAhVkk-AKHfqYBToQjRx6BAgBEAU&url=https%3A%2F%2Fwww.whingewhingewine.co.uk%2F2017%2F11%2Ftickle-me-elmo-review.html&psig=AOvVaw3smRrZfdkhsex8VYnQhvbM&ust=1531009348098970", 3, 0, 1, 4, "2018-07-11", "2018-07-11");


-----------------------------------------------------------------------------------------

CREATE TABLE heroku_be642bd2c77b2c2.items
(
	id int NOT NULL AUTO_INCREMENT,
	item_name varchar(255) NOT NULL,
	price DECIMAL(19,4) NOT NULL,
	purchased BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

CREATE TABLE heroku_be642bd2c77b2c2.user_accounts (
  user_id INT(11) NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(20) NOT NULL,
  last_name VARCHAR(20) NOT NULL,
  password VARCHAR(20) NOT NULL,
  street_address VARCHAR(45) NOT NULL,
  city VARCHAR(20) NOT NULL,
  state VARCHAR(2) NOT NULL,
  email VARCHAR(45) NOT NULL,
  PRIMARY KEY (user_id)
);



INSERT INTO items (item_name, price, purchased) VALUES ('Stroller', '20.00', false);
INSERT INTO items (item_name, price, purchased) VALUES ('Crib', '15.00', false);
INSERT INTO items (item_name, price, purchased) VALUES ('Tickle Me Elmo', '20.00', false);

INSERT INTO user_accounts (first_name, last_name, password, street_address, city, state, email)
VALUES ("Steve", "Smith", "password1", "1 Main Street", "Dover", "NH", "email@yahoo.com"),
("Mike", "Smith", "password2", "2 Main Street", "Dover", "NH", "email2@yahoo.com"),
("Dave", "Smith", "password3", "3 Main Street", "Dover", "NH", "email3@yahoo.com");


---------------------------------------------------------------------------
/* JAWSDB Heroku Addon: */
USE w5ergtsckl98uek7;

CREATE TABLE items
(
	id int NOT NULL AUTO_INCREMENT,
	item_name varchar(255) NOT NULL,
	price DECIMAL(19,4) NOT NULL,
	purchased BOOLEAN DEFAULT false,
    createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE user_accounts (
  user_id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(20) NOT NULL,
  last_name VARCHAR(20) NOT NULL,
  password VARCHAR(20) NOT NULL,
  street_address VARCHAR(45) NOT NULL,
  city VARCHAR(20) NOT NULL,
  state VARCHAR(2) NOT NULL,
  email VARCHAR(45) NOT NULL,
  createdAt TIMESTAMP NOT NULL,
  PRIMARY KEY (user_id)
);



INSERT INTO items (item_name, price, purchased) VALUES ('Stroller', '20.00', false);
INSERT INTO items (item_name, price, purchased) VALUES ('Crib', '15.00', false);
INSERT INTO items (item_name, price, purchased) VALUES ('Tickle Me Elmo', '20.00', false);

INSERT INTO user_accounts (first_name, last_name, password, street_address, city, state, email)
VALUES ("Steve", "Smith", "password1", "1 Main Street", "Dover", "NH", "email@yahoo.com"),
("Mike", "Smith", "password2", "2 Main Street", "Dover", "NH", "email2@yahoo.com"),
("Dave", "Smith", "password3", "3 Main Street", "Dover", "NH", "email3@yahoo.com");