1. Project Title &; Description
   o The Project Title is Meeting Room Booking Appication(MeetSpace)

2. Team Details
   o Team name

- BitByBit
  o Member names
- Shivam Gupta
- Shri Dhanush Reddy
  o contact emails
- sshivamgupta833@gmail.com

3. Tech Stack
   o Nodejs, Express, React, Mysql.

4. Project Description
   o The meeting room booking Application is build using the above tech stack which allows an admin to create an acount and add, update, and delete a Room on the website and as a user or employee can book and cancel a room which he has booked.
   After Booking a room the user get an email of successful booking
   The api's restric the user by double booking
5. Setup Instructions
   o To Run the project locally on the machine clone it using the url and install the required node dependencies on your local machine, you should have installed mysql workbench to connect the database.
   Before connecting to the database add a dotenv file and set the required data using '.env.example' file
   After succefully conneting and installing the required dependencies run the project.

6. API Endpoints / Architecture
   o I have used routing for api's

- the Api is divided into three endpoints: 'room', 'admin', and 'employee'
- admin has 'signup' and 'signin' endpoints
- employee has 'signup' and 'signin' endpoints
- room has 'add', 'update' and 'delete' endpoints
