# angular-tgtkuf

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-tgtkuf)

The Challenge
User Story 1
As a barber shop receptionist, I would like to keep track of walk-in customers, so that I can let the barber(s) know who is next for a hair-cut.
Assumptions
-	There can be up to 3 barbers working at a time. 
-	Assume that only 2 barbers are working, named Joe and Gary.
-	Customers may request to wait for a specific barber. 
Acceptance Criteria
-	Should be able to enter in a name and phone number and get back a number indicating the customers position in line
-	UI should display an ordered list of customers who are waiting overall and who are waiting for a particular barber. 
-	UI should indicate which customer is currently with a barber
-	Should be able to hit a button that says “In Chair” to automatically update that customer to be in the chair for a specific barber and reorder the list of waiting customers. 

User Story 2
As a barber shop receptionist, I would like to be able to see what the expected wait time is for customers, so that I can let them know how long their wait may be
Assumptions
-	Assume that the average haircut takes about 15 minutes.
-	Assume that the barber requires at least 90 seconds in between haircuts to clean-up the chair for the next customer. 
Acceptance Criteria
-	Should be able to see the current time displayed in the UI
-	Should be able to see an approximate time next to each waiting customer as to how long the wait is and an approximate time for when they would be in the chair. 
-	Hitting the “In Chair” button (see User Story 1) should also update the times for each of the waiting customers. 
-	Customers who are waiting for specific barber should be able to go with next available barber if they don’t want to wait any more.
