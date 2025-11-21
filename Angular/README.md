# To-Do List Application – Requirements

This document describes the client-side requirements for building a To-Do List application using Angular.

---

## 1. User Authentication

### 1.1 Registration Page
- Full Name
- Email
- Password
- Confirm Password
- Form validations (email format, required fields, password rules)

### 1.2 Login Page
- Email
- Password
- Show error for invalid login
- Redirect to Dashboard on successful login

### 1.3 Session Handling
- Store authentication state using localStorage
- Restrict access to protected pages
- Logout option to clear session

---

## 2. Application Layout

### 2.1 Header
- Application Logo
- Logged-in user's name
- Logout Button

### 2.2 Sidebar (Optional but recommended)
- Dashboard
- All Tasks
- Completed Tasks
- Pending Tasks
- Categories
- Profile

---

## 3. Task Management Features

### 3.1 Add New Task
Fields:
- Task Title (required)
- Description (optional)
- Category (Work, Personal, Shopping, Custom)
- Due Date
- Priority (Low, Medium, High)

### 3.2 Task List Page
Each task should show:
- Title
- Due Date
- Priority
- Category
- Status
- Actions: Edit, Delete, Mark Completed

### 3.3 Edit Task
- Pre-fill form using patchValue()
- Update task details
- Save updated data using API

### 3.4 Delete Task
- Confirm before deleting
- Remove task from API and refresh the list

### 3.5 Mark as Completed
- Allow marking a task as completed
- Move completed tasks to a separate section or apply separate styling

---

## 4. Search, Filter and Sort

### 4.1 Search
- Search tasks by title or description

### 4.2 Filters
- Completed tasks
- Pending tasks
- High priority tasks
- Category filters

### 4.3 Sorting
- Sort by Title
- Sort by Priority
- Sort by Due Date
- Sort by Recently Added

---

## 5. User Profile Page
Profile page should show:
- Full Name
- Email
- Total tasks created
- Completed tasks count
- Pending tasks count

Optional:
- Update name
- Update password
- Upload profile picture

---

## 6. Additional Features (Optional but recommended)
- Light/Dark Mode Theme
- JSON Server integration for full CRUD
- Pagination for long task lists
- Due date warnings or highlights
- Category icons for better visibility

---

## 7. Final Deliverables
The project should include:
- Login and Registration system
- Complete CRUD for tasks
- User Profile section
- Search, filter, sort options
- Dashboard showing statistics
- Clean and responsive UI
- Angular Control Flow (@if, @for, @switch)
- JSON Server backend API
