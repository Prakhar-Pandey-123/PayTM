<h1>PayTM Clone - Full Stack Payment Platform</h1>

<p>This is a <strong>PayTM-inspired web application</strong> built with a modern MERN stack. The platform allows users to register, log in, view balances, transfer money to other users, and search for users in real-time. It includes secure authentication, role-based access, and integrates payment transfer functionalities.</p>

<h2>Features</h2>
<ul>
  <li>User Signup and Login with <strong>JWT</strong> and <strong>OTP verification</strong></li>
  <li>Secure password storage using <strong>Bcrypt</strong></li>
  <li>View and manage account balance</li>
  <li>Transfer money to other users with authentication</li>
  <li>Search users dynamically with real-time filtering</li>
  <li>Responsive UI with <strong>Tailwind CSS</strong></li>
  <li>Backend API built using <strong>Node.js</strong> and <strong>Express.js</strong></li>
  <li>Database powered by <strong>MongoDB</strong> with <strong>Mongoose</strong></li>
  <li>Axios used for frontend-backend communication</li>
</ul>

<h2>Tech Stack</h2>
<ul>
  <li><strong>Frontend:</strong> React.js, Tailwind CSS</li>
  <li><strong>Backend:</strong> Node.js, Express.js</li>
  <li><strong>Database:</strong> MongoDB, Mongoose</li>
  <li><strong>Authentication:</strong> JWT, Bcrypt</li>
  <li><strong>HTTP Requests:</strong> Axios</li>
</ul>

<h2>How it Works</h2>
<p>Users can log in or sign up to their account. Once logged in, they can view their balance and transfer money to other users securely. The search functionality allows finding users dynamically. All sensitive operations are protected via JWT-based authentication, ensuring only authorized users can perform transfers.</p>

<h2>Getting Started</h2>
<p>Clone the repository and install dependencies for both frontend and backend:</p>
<pre>
<code>git clone &lt;repo-url&gt;
cd backend
npm install
npm start

cd ../frontend
npm install
npm start
</code>
</pre>

<p>Ensure you set up a <code>.env</code> file for JWT secret, MongoDB URI, and any other sensitive configs.</p>

<h2>Notes</h2>
<ul>
  <li>This is a learning project and does not handle real payments.</li>
  <li>Designed for understanding full-stack payment flows, authentication, and user management.</li>
</ul>
