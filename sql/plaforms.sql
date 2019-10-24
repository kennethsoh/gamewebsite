use game_review;

CREATE TABLE IF NOT EXISTS game_review.platforms (
    `platform_id` INT NOT NULL AUTO_INCREMENT,
    `game_id` INT NOT NULL,
    `platform` VARCHAR(8) CHARACTER SET utf8,
    
PRIMARY KEY (`platform_id`),
  CONSTRAINT `FK_game_id`
    FOREIGN KEY (`game_id`)
    REFERENCES `game_review`.`games` (`game_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;

INSERT INTO platforms (`platform_id`,`game_id`,`platform`) VALUES (1,1,'PC'); /* Overwatch */
INSERT INTO platforms (`platform_id`,`game_id`,`platform`) VALUES (2,2,'PC'); /* FM19 */
INSERT INTO platforms (`platform_id`,`game_id`,`platform`) VALUES (3,3,'PC'); /* Motorsport Manager */
INSERT INTO platforms (`platform_id`,`game_id`,`platform`) VALUES (4,4,'PC'); /* Cities Skylines */
INSERT INTO platforms (`platform_id`,`game_id`,`platform`) VALUES (5,5,'PC'); /* Rainbow Six Siege */
INSERT INTO platforms (`platform_id`,`game_id`,`platform`) VALUES (6,6,'PC'); /* Minecraft*/
INSERT INTO platforms (`platform_id`,`game_id`,`platform`) VALUES (7,7,'PC'); /* Dota 2 */
INSERT INTO platforms (`platform_id`,`game_id`,`platform`) VALUES (8,8,'PC'); /* CS:Go */
INSERT INTO platforms (`platform_id`,`game_id`,`platform`) VALUES (9,9,'PC'); /* Fallout Shelter */
INSERT INTO platforms (`platform_id`,`game_id`,`platform`) VALUES (10,10,'PC'); /* World of Warships */
INSERT INTO platforms (`platform_id`,`game_id`,`platform`) VALUES (11,11,'PC'); /* Civilization VI */
INSERT INTO platforms (`platform_id`,`game_id`,`platform`) VALUES (12,12,'PC'); /* Assassin''s Creed Origin */


INSERT INTO platforms (`platform_id`,`game_id`,`platform`) VALUES (13,13,'Console');
INSERT INTO platforms (`platform_id`,`game_id`,`platform`) VALUES (14,14,'Console');
INSERT INTO platforms (`platform_id`,`game_id`,`platform`) VALUES (15,15,'Console');
INSERT INTO platforms (`platform_id`,`game_id`,`platform`) VALUES (16,16,'Console');
INSERT INTO platforms (`platform_id`,`game_id`,`platform`) VALUES (17,17,'Console');
INSERT INTO platforms (`platform_id`,`game_id`,`platform`) VALUES (18,18,'Console');
INSERT INTO platforms (`platform_id`,`game_id`,`platform`) VALUES (19,19,'Console');
INSERT INTO platforms (`platform_id`,`game_id`,`platform`) VALUES (20,20,'Console');
INSERT INTO platforms (`platform_id`,`game_id`,`platform`) VALUES (21,21,'Console');
INSERT INTO platforms (`platform_id`,`game_id`,`platform`) VALUES (22,22,'Console');
INSERT INTO platforms (`platform_id`,`game_id`,`platform`) VALUES (23,23,'Console');
INSERT INTO platforms (`platform_id`,`game_id`,`platform`) VALUES (24,24,'Console');

INSERT INTO platforms (`platform_id`,`game_id`,`platform`) VALUES (25,25,'Mobile');
INSERT INTO platforms (`platform_id`,`game_id`,`platform`) VALUES (26,26,'Mobile');
INSERT INTO platforms (`platform_id`,`game_id`,`platform`) VALUES (27,27,'Mobile');
INSERT INTO platforms (`platform_id`,`game_id`,`platform`) VALUES (28,28,'Mobile');
INSERT INTO platforms (`platform_id`,`game_id`,`platform`) VALUES (29,29,'Mobile');
INSERT INTO platforms (`platform_id`,`game_id`,`platform`) VALUES (30,30,'Mobile');
INSERT INTO platforms (`platform_id`,`game_id`,`platform`) VALUES (31,31,'Mobile');
INSERT INTO platforms (`platform_id`,`game_id`,`platform`) VALUES (32,32,'Mobile');
INSERT INTO platforms (`platform_id`,`game_id`,`platform`) VALUES (33,33,'Mobile');
INSERT INTO platforms (`platform_id`,`game_id`,`platform`) VALUES (34,34,'Mobile');
INSERT INTO platforms (`platform_id`,`game_id`,`platform`) VALUES (35,35,'Mobile');
INSERT INTO platforms (`platform_id`,`game_id`,`platform`) VALUES (36,36,'Mobile');