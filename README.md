# DevDive (In progress)

- Build a **blogging application** where users can register, login, setup their blog and write posts.

1. **User Registration**

   - Backend: Implement user registration endpoint (Node.js, Express).
   - Database: Set up MongoDB schema for user accounts.
   - Implement form validation using Vanilla JS.

2. **User Login**

   - Backend: Implement user login endpoint (Node.js, Express).
   - Implement form validation using Vanilla JS.
   - Set up session management (e.g., using JWT).

3. **Create and View Post**

   - Backend: Implement post creation and view endpoints.
   - Database: Set up MongoDB schema for posts.
   - Frontend: Create post creation form and post view page using HTML and TailwindCSS.
   - Implement form validation using Vanilla JS.

4. **List All Blogs and Posts**

   - Backend: Implement endpoints to list all blogs and posts.
   - Frontend: Create pages to display all blogs and posts using HTML and TailwindCSS.

5. **Write Tests**

   - Backend: Write basic tests for user authentication, blog, and post management.
   - Frontend: Test form validations and user interactions.

6. **Deploy Application**

   - Set up deployment pipeline (CI/CD).
   - Deploy the application to a server (e.g., using Heroku, AWS).

7. **Edit and Delete Post**

   - Backend: Implement post editing and deletion endpoints.
   - Frontend: Create post edit form and add delete button using HTML and TailwindCSS.

8. **Monitor and Log**
   - Implement logging and monitoring tools.
   - Regularly monitor application performance and errors.

## Expected File Structure

```
my-blog-app/
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── blogController.js
│   │   └── postController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Blog.js
│   │   └── Post.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── blogRoutes.js
│   │   └── postRoutes.js
│   ├── app.js
│   └── server.js
├── frontend/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── auth.js
│   │   ├── blog.js
│   │   └── post.js
│   ├── index.html
│   ├── register.html
│   ├── login.html
│   ├── profile.html
│   ├── create-blog.html
│   ├── blog.html
│   └── create-post.html
```
