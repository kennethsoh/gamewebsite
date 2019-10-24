/*TESTED & WORKING */
use game_review;

CREATE TABLE IF NOT EXISTS game_review.users (
    `user_id` INT NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(32) NOT NULL UNIQUE,
    `email_address` VARCHAR(64) NOT NULL,
    `date_of_birth` DATE NOT NULL,
    `gender` VARCHAR(8) NOT NULL,
    `password` VARCHAR(32) NOT NULL,

PRIMARY KEY (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


INSERT INTO users (`user_id`, `username`, `email_address`, `date_of_birth`, `gender`, `password`) VALUES (1, 'root', '1800932d@student.tp.edu.sg', '2001-03-26', 'Male', 'toor');

