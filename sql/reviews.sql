use game_review;

CREATE TABLE IF NOT EXISTS game_review.reviews (
    `review_id` INT NOT NULL AUTO_INCREMENT,
    `game_id` INT NOT NULL,
    `user_id` INT NOT NULL,
    `username` TEXT NOT NULL,
    `reviewTitle` TEXT NOT NULL,
    `rating` INT NOT NULL,
    `review` TEXT NOT NULL,
    `datePosted` VARCHAR(100) NOT NULL,
    
PRIMARY KEY (`review_id`),
  CONSTRAINT `FK_game_id__`
    FOREIGN KEY (`game_id`)REFERENCES `game_review`.`games` (`game_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_user_id_`
   FOREIGN KEY (`user_id`) REFERENCES `game_review`.`users` (`user_id`)
   ON DELETE CASCADE
   ON UPDATE NO ACTION)

ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;

INSERT INTO reviews (`review_id`,`game_id`,`user_id`,`username`, `reviewTitle`,`rating`,`review`,`datePosted`) VALUES (1,1,1,'root','Overwatch is Great!',9.0,'This is a good game','2018-12-31');
INSERT INTO reviews (`review_id`,`game_id`,`user_id`,`username`, `reviewTitle`,`rating`,`review`,`datePosted`) VALUES (2,1,1,'root','Lorem Ipsum',9.0,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.','2018-12-31');
INSERT INTO reviews (`review_id`,`game_id`,`user_id`,`username`,`reviewTitle`,`rating`,`review`,`datePosted`) VALUES (3,3,1,'root','Motorsport Manager is the real deal', 8.0,'This is a good game','2019-01-30');