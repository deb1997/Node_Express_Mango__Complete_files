CREATE -> insertOne() , insertMany()
-------------------------------------
SQL : INSERT INTO Employee (name, age, desg)
		VALUES ('John', 35, 'Manager');
		
MongoDB : db.employee.insertOne({
				name : 'John',
				age : 35,
				desg : 'Manager'
			});	

		   db.employee.insertMany([
					{} , {} , {}
		   ]);			

READ -> find() , findOne()
----------------------------
SQL : SELECT * FROM Employee;
SQL : SELECT *  FROM Employee where name = 'John'

MongoDB : db.employee.find().pretty();

MongoDB : db.employee.find({ name : 'John'}).pretty();

UPDATE -> updateOne() , updateMany()
------------------------------------
SQL : UPDATE Employee set name = 'John Doe' where id = '65464';

MongoDB : db.employee.updateOne(
			  { "_id" : ObjectId("5ced396d766a27c8a5a10027") },
			  { $set: { "age" : "45" } }
		   );

DELETE -> deleteOne() , deleteMany()
-------------------------------------
SQL : DELETE * From Employee where id = '23423432424'

MongoDB: db.employee.deleteOne({
			"_id" : ObjectId("5ced396d766a27c8a5a10027")
         });



