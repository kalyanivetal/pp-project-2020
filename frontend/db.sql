create table mylogin(
	id int(11) AUTO_INCREMENT,
	uname varchar(13) NOT NULL,
	pword varchar(100) NOT NULL,
	PRIMARY KEY (id)
);
insert into mylogin(uname,pword) values('myadmin','$2b$09$sxbjhd51GTPGjMWrnL7oz.JdtlyA1HTei4WpMBdWKkGD1uVVg/P1y');
insert into mylogin(uname,pword) values('admin','$2b$09$sxbjhd51GTPGjMWrnL7oz.JdtlyA1HTei4WpMBdWKkGD1uVVg/P1y');
insert into mylogin(uname,pword) values('admin',12345');
create user 'puscd'@'localhost' IDENTIFIED BY '';
GRANT ALL ON puscd.* TO 'puscd'@'localhost';
FLUSH PRIVILEGES;
use user;

$2b$09$sxbjhd51GTPGjMWrnL7oz.JdtlyA1HTei4WpMBdWKkGD1uVVg/P1y

souce filename
build n up

save data jason

react mdhun as input ghenar

json input n out la dista te
