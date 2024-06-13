# DevDive (In progress)

- Build a simple blogging application where users can register, login, setup their blog and write posts.

## Day 1-2: User Authentication

1. **User Registration**

   - Backend: Implement user registration endpoint (Node.js, Express).
   - Database: Set up MongoDB schema for user accounts.
   - Frontend: Create registration form using HTML and TailwindCSS.
   - Implement form validation using Vanilla JS.

2. **User Login**
   - Backend: Implement user login endpoint (Node.js, Express).
   - Frontend: Create login form using HTML and TailwindCSS.
   - Implement form validation using Vanilla JS.
   - Set up session management (e.g., using JWT).

## Day 3: User Profile

3. **Profile Setup and Edit**
   - Backend: Implement profile setup and edit endpoints.
   - Database: Update MongoDB schema for user profiles.
   - Frontend: Create profile setup and edit pages using HTML and TailwindCSS.
   - Implement form validation using Vanilla JS.

## Day 4-5: Blog Management

4. **Create and View Blog**
   - Backend: Implement blog creation and view endpoints.
   - Database: Set up MongoDB schema for blogs.
   - Frontend: Create blog creation form and blog view page using HTML and TailwindCSS.
   - Implement form validation using Vanilla JS.

## Day 6-7: Post Management

5. **Create and View Post**
   - Backend: Implement post creation and view endpoints.
   - Database: Set up MongoDB schema for posts.
   - Frontend: Create post creation form and post view page using HTML and TailwindCSS.
   - Implement form validation using Vanilla JS.

## Day 8: List Blogs and Posts

6. **List All Blogs and Posts**
   - Backend: Implement endpoints to list all blogs and posts.
   - Frontend: Create pages to display all blogs and posts using HTML and TailwindCSS.

## Day 9: Testing and Deployment

7. **Write Tests**

   - Backend: Write basic tests for user authentication, blog, and post management.
   - Frontend: Test form validations and user interactions.

8. **Deploy Application**
   - Set up deployment pipeline (CI/CD).
   - Deploy the application to a server (e.g., using Heroku, AWS).

## Day 10: Post Management Enhancements

9. **Edit and Delete Post**
    - Backend: Implement post editing and deletion endpoints.
    - Frontend: Create post edit form and add delete button using HTML and TailwindCSS.

## Continuous: Maintenance and Monitoring

10. **Monitor and Log**
    - Implement logging and monitoring tools.
    - Regularly monitor application performance and errors.

## Total Estimate

- **MVP (Core Features):** ~9 days
- **Enhancements and Additional Features:** ~1 day

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