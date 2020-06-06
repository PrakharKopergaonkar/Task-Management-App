# Task-Management-App
Task mangement app developed using mern stack, redux for Stackhack online hackathon(organised by hackerearth)

<ol>
  <li> 
    <strong> Installation Guide -  </strong><br/>
    <p> Make sure you have node js, mongodb and npm installed before installing and configuring rest of the application 		<br/>
	You can install mongoDB from - https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
	<br/>
	 Node js - https://nodejs.org/en/download/
    </p>
      <ul>
        <li> <strong> Mongodb configuration - </strong>
        <ul>
           <li> Create a database named users by using following command - <strong> use users </strong> </li>
           <li> 
              Create a mongodb user name "user" with password "user123" by using following command <br>
              <strong>
              db.createUser({
		          user: “user”,
		          pwd: “user123”,
		          roles: [“readWrite”, “dbAdmin”]
              })
              </strong>
           </li>
           <li> Authorize this user to use mongodb database users by - <strong>db.auth({user: “user”, pwd:”user123”})</strong> </li>
        </ul>
          <br/>
           <li> <strong> Configuring cloned project </strong> </li>
           <ul>
              <li>  Go into project folder and type  <strong>npm install </strong> in your terminal to install server side dependencies. </li>
							<li> After sucessfully installing server side dependencies type <strong> npm run client-install </strong> to install client side dependencies. </li>
							<li> Now type <strong> npm run dev </strong> To concurrently run server and client </li>
           </ul>
      </ul>
  </li>
</ol>
