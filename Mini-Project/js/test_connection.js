var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "alumni"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  //-----------------------------------------------------------------------------------
  
  //ALUMNI TABLE
  var create = "create table alumni(roll_no varchar(20) not null,email varchar(40) unique not null,blood_grp varchar(5),f_name varchar(20),l_name varchar(20),age int(3),dob date,image varchar(1000),gender varchar(2),join_year date,leave_year date,constraint pk1 primary key (roll_no));"
  con.query(create, function (err, result) {
    if (err) throw err;
    console.log("table created.");
  });
  var sql = "INSERT INTO alumni (roll_no,email,blood_grp,f_name,l_name,age,dob,image,gender,join_year,leave_year) VALUES ('123','user@mail.com','O','Jamal','Na',21,date '2000-12-29','placeholder','M',date '2019-09-20',date '2022-06-30');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
  con.query("SELECT * FROM alumni;", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
  
  //-----------------------------------------------------------------------------------
  
  //FORUM TABLE
  var create = "create table forum(msg_id varchar(10) not null,roll_no varchar(20) not null,msg varchar(500) not null,upvotes int(10),t_stamp int(20),constraint pk4 primary key (msg_id));"
  con.query(create, function (err, result) {
    if (err) throw err;
    console.log("table created.");
  });
  var edit = "alter table forum add constraint fk4 foreign key (roll_no) references alumni(roll_no);"
  con.query(edit, function (err, result) {
    if (err) throw err;
    console.log("Table modified");
  });
  var sql = "INSERT INTO forum (msg_id,roll_no,msg,upvotes,t_stamp) VALUES ('1','123','This is a message',20,10);";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
  con.query("SELECT * FROM forum;", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
  
  //-----------------------------------------------------------------------------------
  
  //LOGIN TABLE
  var create = "create table login_details(roll_no varchar(20) not null,passwd varchar(20) not null,phone_no bigint(20) not null,email varchar(40) unique not null,constraint pk2 primary key (roll_no));"
  con.query(create, function (err, result) {
    if (err) throw err;
    console.log("table created.");
  });
  var edit = "alter table login_details add constraint fk2 foreign key (roll_no) references alumni(roll_no);"
  con.query(edit, function (err, result) {
    if (err) throw err;
    console.log("Table modified");
  });
  var sql = "INSERT INTO login_details (roll_no,passwd,phone_no,email) VALUES ('123','secret_password',9830345252,'user@mail.com');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
  con.query("SELECT * FROM login_details;", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

  //-----------------------------------------------------------------------------------
  
  //PROFESSIONS TABLE
  var create = "create table profession(roll_no varchar(20) not null,cmp_stat varchar(5) not null,deg_name varchar(20) not null,company_name varchar(20),designation varchar(20),constraint pk3 primary key (roll_no));"
  con.query(create, function (err, result) {
    if (err) throw err;
    console.log("table created.");
  });
  var edit = "alter table profession add constraint fk3 foreign key (roll_no) references alumni(roll_no);"
  con.query(edit, function (err, result) {
    if (err) throw err;
    console.log("Table modified");
  });
  var sql = "INSERT INTO profession (roll_no,cmp_stat,deg_name,company_name,designation) VALUES ('123','HIRED','B.TECH CSE','Google','CFO');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
  con.query("SELECT * FROM profession;", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });  

  //-----------------------------------------------------------------------------------
  
  //SOCIALS TABLE
  var create = "create table socials(roll_no varchar(20) not null,linkedin varchar(100),facebook varchar(100),instagram varchar(100),twitter varchar(100),github varchar(100),interests varchar(100),constraint pk5 primary key (roll_no));"
  con.query(create, function (err, result) {
    if (err) throw err;
    console.log("table created.");
  });
  var edit = "alter table socials add constraint fk1 foreign key (roll_no) references alumni(roll_no);"
  con.query(edit, function (err, result) {
    if (err) throw err;
    console.log("Table modified");
  });
  var sql = "INSERT INTO socials (roll_no,linkedin,facebook,instagram,twitter,github,interests) VALUES ('123','Jamal_05','@BroJamal','@Jamaaal','@JamalSpeaks','@JamalCoder05','coding,cotton,food');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
  con.query("SELECT * FROM socials;", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
  
  //-----------------------------------------------------------------------------------

});
