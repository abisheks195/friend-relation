CREATE TABLE IF NOT EXISTS `users` (
  `user_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(256) NOT NULL,
  `lastName` VARCHAR(256) NOT NULL,
  `avatar` VARCHAR(256) NOT NULL,
  PRIMARY KEY(`user_id`)
);

CREATE TABLE IF NOT EXISTS `relation` (
  `user_one_id` INT UNSIGNED NOT NULL,
  `user_two_id` INT UNSIGNED NOT NULL,
  FOREIGN KEY (`user_one_id`) REFERENCES users(`user_id`),
  FOREIGN KEY (`user_two_id`) REFERENCES users(`user_id`)
);
