export interface ModuleItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  features: string[];
}

export interface ProjectModules {
  frontendModule: ModuleItem[];
  backendModule: ModuleItem[];
}

export interface ProjectAbout {
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface ProjectDataType {
  id: number;
  about: ProjectAbout;
  modules: ProjectModules;
  image: string;
  link: string;
}

export interface ProjectsCollection {
  ecommerce: ProjectDataType;
  taskmanagement: ProjectDataType;
  studentinformationsystem: ProjectDataType;
  expensetrackerapplication: ProjectDataType;
  socialmediadashboard: ProjectDataType;
  restaurantbookingwebsite:ProjectDataType;
  onlinequizapplication:ProjectDataType;
  petAdoptionPlatform:ProjectDataType;
  realEstateListingWebsite:ProjectDataType;
  appointmentSchedulingApp:ProjectDataType;
}

export const ProjectData: ProjectsCollection = {
  ecommerce: {
    id: 1,
    image: "/projectsimg/ProjectFive.jpg",
    about: {
      title: "E-commerce Platform",
      description:
        "An E-commerce Website is an online platform that enables businesses to sell products or services to customers over the internet. It provides a virtual storefront where users can browse, select, and purchase items, including product listings, carts, and secure payments.",
      image: "/projectsimg/ProjectFive.jpg",
      icon: "ShoppingCart",
    },

    modules: {
      frontendModule: [
        {
          id: 1,
          title: "User Authentication Module",
          icon: "Lock",
          color: "from-blue-500 to-cyan-500",
          description:
            "Handles user registration, login, and authentication, ensuring secure access.",
          features: [
            "User Registration",
            "Login / Logout",
            "Password Recovery",
            "Session Management",
          ],
        },
        {
          id: 2,
          title: "Product Management Module",
          icon: "Package",
          color: "from-purple-500 to-pink-500",
          description:
            "Manages the entire product lifecycle from creation to inventory tracking.",
          features: [
            "Product Creation & Editing",
            "Category Management",
            "Inventory Tracking",
            "Price Management",
            "Search & Filter Options",
            "Product Reviews & Ratings",
          ],
        },
        {
          id: 3,
          title: "Shopping Cart Module",
          icon: "ShoppingCart",
          color: "from-orange-500 to-red-500",
          description:
            "Allows customers to add and manage selected items before checkout.",
          features: [
            "Add / Remove Items",
            "Quantity Update",
            "Promo Code Support",
            "Real-Time Price Calculation",
          ],
        },
        {
          id: 4,
          title: "Order Tracking and History Module",
          icon: "Clock",
          color: "from-green-500 to-teal-500",
          description:
            "Allows users to track order statuses and view past orders.",
          features: [
            "Order History Overview",
            "Real-Time Order Tracking",
            "Instant Notifications",
            "Downloadable Invoices",
          ],
        },
      ],

      backendModule: [
        {
          id: 1,
          title: "Database Management Module",
          icon: "Database",
          color: "from-indigo-500 to-blue-500",
          description:
            "Stores user profiles, product info, order data and transactions.",
          features: [
            "Optimized Data Storage",
            "Schema Design",
            "Query Handling",
            "Indexing",
            "Backup & Recovery",
            "ACID Transactions",
          ],
        },
        {
          id: 2,
          title: "API Layers",
          icon: "Layers",
          color: "from-cyan-500 to-teal-500",
          description:
            "REST APIs to manage product, user and order operations.",
          features: [
            "RESTful Endpoints",
            "Validation",
            "Middleware Config",
            "Authentication",
            "CRUD Support",
            "API Versioning",
            "Error Handling",
          ],
        },
        {
          id: 3,
          title: "User Authentication and Authorization Module",
          icon: "Lock",
          color: "from-violet-500 to-purple-500",
          description: "Validates credentials and controls user access.",
          features: [
            "JWT Auth",
            "Role-Based Access Control",
            "Session Management",
            "Password Encryption",
          ],
        },
      ],
    },

    link: "/project/ecommerce",
  },

  taskmanagement: {
    id: 2,
    image: "/projectsimg/ProjectOne.jpg",
    about: {
      title: "Task Management System",
      description:
        "A system for organizing and tracking tasks, assignments, and deadlines with powerful project and productivity features.",
      image: "/projectsimg/ProjectOne.jpg",
      icon: "CircleCheckBig",
    },

    modules: {
      frontendModule: [
        {
          id: 1,
          title: "User Authentication Module",
          icon: "Lock",
          color: "from-blue-600 to-cyan-500",
          description:
            "Handles registration, login, and access control for users.",
          features: [
            "User Registration Form",
            "Login / Logout UI",
            "Password Reset UI",
            "Form Validation",
            "Token Storage Handling",
            "Alerts & Notifications",
          ],
        },
        {
          id: 2,
          title: "Task Creation & Editing Module",
          icon: "ClipboardCheck",
          color: "from-purple-500 to-pink-500",
          description:
            "Users can create, edit and assign tasks with deadlines.",
          features: [
            "Create / Edit Tasks",
            "Due Date & Priority",
            "Assign Members",
            "Notes Editor",
          ],
        },
        {
          id: 3,
          title: "Task List Module",
          icon: "ListCheck",
          color: "from-orange-500 to-red-500",
          description:
            "Displays tasks with filtering, sorting and search options.",
          features: [
            "Sorting & Filtering",
            "Search Bar",
            "Quick Actions",
            "Pagination / Infinite Scroll",
          ],
        },
        {
          id: 4,
          title: "Project Management Module",
          icon: "FolderGit2",
          color: "from-green-500 to-teal-500",
          description: "Create and manage projects and track their progress.",
          features: [
            "Project Creation",
            "Project Overview",
            "Assign Members",
            "Progress Visualization",
          ],
        },
        {
          id: 5,
          title: "User Dashboard",
          icon: "LayoutDashboard",
          color: "from-amber-200 to-yellow-500",
          description: "Shows upcoming tasks, reminders, and project progress.",
          features: [
            "Upcoming Tasks",
            "Overdue Alerts",
            "Project Summary",
            "Activity Feed",
          ],
        },
      ],

      backendModule: [
        {
          id: 1,
          title: "Database Management Module",
          icon: "Database",
          color: "from-indigo-600 to-blue-600",
          description:
            "Stores users, tasks, projects and assignments securely.",
          features: [
            "Relational Mapping",
            "User Table",
            "Tasks Table",
            "Project Table",
            "Validation Rules",
          ],
        },
        {
          id: 2,
          title: "API Layer",
          icon: "Layers",
          color: "from-purple-500 to-purple-900",
          description:
            "RESTful APIs powering CRUD operations for tasks and projects.",
          features: [
            "REST Endpoints",
            "CRUD Support",
            "Input Sanitization",
            "Error Handling",
            "Middleware Auth",
            "Pagination & Sorting",
          ],
        },
        {
          id: 3,
          title: "Authentication Module",
          icon: "Lock",
          color: "from-emerald-500 to-emerald-900",
          description:
            "Validates credentials and implements secure access control.",
          features: [
            "JWT Auth",
            "RBAC",
            "Token Generation",
            "Password Encryption",
            "MFA Ready",
          ],
        },
        {
          id: 4,
          title: "Notification Module",
          icon: "Bell",
          color: "from-red-500 to-orange-500",
          description: "Generates alerts and updates for user activities.",
          features: [
            "Task Alerts",
            "Deadline Notifications",
            "Project Updates",
            "Activity Logs",
          ],
        },
        {
          id: 5,
          title: "Task Status Tracking Module",
          icon: "ClipboardClock",
          color: "from-slate-300 to-slate-500",
          description:
            "Tracks task progression, completion and performance metrics.",
          features: [
            "Status History",
            "Progress Charts",
            "Completion Logs",
            "Performance Insights",
          ],
        },
      ],
    },

    link: "/project/taskmanagement",
  },
  studentinformationsystem: {
    id: 3,
    image: "/projectsimg/ProjectFour.jpg",
    about: {
      title: "Student Information System (SIS)",
      description:
        "A comprehensive system used by educational institutions to manage student data, academic records, courses, grades, and administrative functions. It improves communication and streamlines operations for students, teachers, and administrators.",
      image: "/projectsimg/ProjectFour.jpg",
      icon: "CircleCheckBig",
    },

    modules: {
      frontendModule: [
        {
          id: 1,
          title: "User Authentication Module",
          icon: "Lock",
          color: "from-blue-600 to-cyan-500",
          description:
            "Handles user registration, login, and secure access for students, teachers, and admins.",
          features: [
            "User Registration Form",
            "Login / Logout UI",
            "Password Reset UI",
            "Form Validations",
            "JWT / Token Handling",
            "Secure Session Management",
            "Error & Success Notifications",
          ],
        },
        {
          id: 2,
          title: "Student Profile Module",
          icon: "UserPen",
          color: "from-red-500 to-orange-500",
          description:
            "Allows students to view, update their profile, enrolled courses, and academic records.",
          features: [
            "View Personal Information",
            "Edit / Update Profile Details",
            "View Enrolled Courses",
            "Access Academic Records",
            "Profile Photo Upload",
            "Mobile-Friendly Student Dashboard",
          ],
        },
        {
          id: 3,
          title: "Teacher Dashboard",
          icon: "LayoutDashboard",
          color: "from-purple-500 to-pink-500",
          description:
            "Provides teachers tools for attendance, grade entry, and student communication.",
          features: [
            "Attendance Management",
            "Grade Entry & Updates",
            "Student Communication Tools",
            "Class & Course Overview",
            "Assignment Upload / Management",
            "Performance Analytics",
          ],
        },
        {
          id: 4,
          title: "Admin Panel",
          icon: "ShieldUser",
          color: "from-emerald-400 to-cyan-400",
          description:
            "Allows administrators to manage students, teachers, courses, and system settings.",
          features: [
            "Manage Student Accounts",
            "Manage Teacher Accounts",
            "Create / Edit Courses",
            "Generate Reports",
            "Role & Permission Management",
            "System Settings Control",
          ],
        },
        {
          id: 5,
          title: "Course Registration Module",
          icon: "Package",
          color: "from-rose-400 to-red-500",
          description:
            "Students can browse courses, register for classes, and view schedules.",
          features: [
            "Browse Available Courses",
            "Course Search & Filters",
            "Add / Drop Classes",
            "Semester-wise Course Selection",
            "View Course Schedule",
            "Registration Confirmation Alerts",
          ],
        },
      ],

      backendModule: [
        {
          id: 1,
          title: "Database Management Module",
          icon: "Database",
          color: "from-lime-400 to-lime-500",
          description:
            "Stores and manages students, teachers, courses, grades, and records securely.",
          features: [
            "Structured Database Schema Design",
            "Student, Course, and User Data Storage",
            "Data Integrity Enforcement",
            "Backup & Recovery Support",
            "Optimized Query Performance",
            "Relationship Management (FK Constraints)",
          ],
        },
        {
          id: 2,
          title: "API Layer",
          icon: "Layers",
          color: "from-purple-500 to-purple-900",
          description:
            "REST APIs enabling frontend communication for students, courses, accounts, and records.",
          features: [
            "RESTful API Endpoints",
            "CRUD Operations for Students, Courses & Users",
            "Request Validation & Sanitization",
            "API Response Standardization",
            "Error Handling & Status Codes",
            "Secure Communication (HTTPS)",
          ],
        },
        {
          id: 3,
          title: "User Authentication & Authorization Module",
          icon: "Lock",
          color: "from-emerald-500 to-emerald-900",
          description:
            "Validates credentials and implements secure, role-based user access.",
          features: [
            "Credential Validation",
            "JWT / Token Generation",
            "Role-Based Access Control",
            "Secure Password Encryption",
            "Session Management",
            "Multi-Role Support (Student/Teacher/Admin)",
          ],
        },
        {
          id: 4,
          title: "Academic Record Management Module",
          icon: "LibraryBig",
          color: "from-indigo-400 to-cyan-400",
          description:
            "Manages grades, assignments, and student academic progress.",
          features: [
            "Grade Entry & Updates",
            "Assignment Score Tracking",
            "Student Academic Progress Records",
            "Report Generation",
            "Analytics & Performance Insights",
            "Data Consistency Across Modules",
          ],
        },
        {
          id: 5,
          title: "Attendance Tracking Module",
          icon: "Logs",
          color: "from-blue-600 to-cyan-500",
          description: "Tracks student attendance and generates reports.",
          features: [
            "Daily Attendance Recording",
            "Bulk Attendance Upload",
            "Attendance Reports for Teachers/Admins",
            "Absence & Late Tracking",
            "Class-Wise Attendance Overview",
            "Exportable Attendance Data",
          ],
        },
      ],
    },

    link: "/project/studentinformationsystem",
  },
  expensetrackerapplication: {
    id: 4,
    image: "/projectsimg/ProjectSeven.jpg",
    about: {
      title: "Expense Tracker Application",
      description:
        "An Expense Tracker helps individuals or businesses record and categorize expenses, visualize spending patterns with summaries and charts, and make informed budgeting decisions.",
      image: "/projectsimg/ProjectSeven.jpg",
      icon: "CircleCheckBig",
    },

    modules: {
      frontendModule: [
        {
          id: 1,
          title: "User Authentication Module",
          icon: "Lock",
          color: "from-blue-600 to-cyan-500",
          description:
            "Handles user registration, login, and secure access to the application.",
          features: [
            "User Registration Form",
            "Login / Logout Interface",
            "Password Reset Flow",
            "Secure Token / JWT Handling",
            "Session Management",
            "Form Validation & Error Handling",
            "Success & Error Notifications",
          ],
        },
        {
          id: 2,
          title: "Expense Entry Module",
          icon: "UserPen",
          color: "from-red-500 to-orange-500",
          description:
            "Enables users to input expenses with date, category, amount, and notes.",
          features: [
            "Add Daily Expense Form",
            "Date, Category, Amount & Notes Input",
            "Form Validation",
            "Auto-fill Category Options",
            "Real-time Input Error Handling",
            "Save / Cancel Actions",
            "Responsive Mobile-friendly UI",
          ],
        },
        {
          id: 3,
          title: "Expense List Module",
          icon: "LayoutDashboard",
          color: "from-purple-500 to-pink-500",
          description:
            "Displays, filters and manages expense entries with edit/delete options.",
          features: [
            "List View of All Expenses",
            "Sort by Date, Category or Amount",
            "Search & Filter Options",
            "Inline Edit Option",
            "Delete Expense Functionality",
            "Pagination / Infinite Scroll",
            "Loading & Empty State Screens",
          ],
        },
        {
          id: 4,
          title: "Budget Management Module",
          icon: "ShieldUser",
          color: "from-emerald-400 to-cyan-400",
          description:
            "Set and track monthly or category-specific budgets with alerts for overspending.",
          features: [
            "Monthly Budget Setup",
            "Category-wise Budget Creation",
            "Real-time Budget vs Expense Indicator",
            "Warning Alerts for Exceeding Budgets",
            "Edit / Update Budget",
            "Budget Progress Bars",
            "Budget Reset for New Month",
          ],
        },
        {
          id: 5,
          title: "Dashboard & Reporting Module",
          icon: "Package",
          color: "from-rose-400 to-red-500",
          description:
            "Visual summaries and downloadable reports to analyze spending patterns.",
          features: [
            "Expense Summary Cards",
            "Pie Charts for Category Breakdown",
            "Bar / Line Graphs for Monthly Trends",
            "Daily, Weekly, Monthly Views",
            "Downloadable Reports (PDF/CSV)",
            "Filter by Date Range",
            "Interactive & Responsive Charts",
          ],
        },
      ],

      backendModule: [
        {
          id: 1,
          title: "Database Management Module",
          icon: "Database",
          color: "from-lime-400 to-lime-500",
          description:
            "Stores user accounts and expense records with data integrity and performance in mind.",
          features: [
            "User & Expense Data Storage",
            "Relational / NoSQL Database Setup",
            "Data Integrity & Constraints",
            "Backup & Recovery Handling",
            "Efficient Query Optimization",
            "Database Indexing",
            "Secure Data Access Policies",
          ],
        },
        {
          id: 2,
          title: "API Layer",
          icon: "Layers",
          color: "from-purple-500 to-purple-900",
          description:
            "RESTful APIs for CRUD operations on expenses and user accounts.",
          features: [
            "RESTful Endpoints for CRUD Operations",
            "Expense Management APIs",
            "User Account Management APIs",
            "Request Validation & Sanitization",
            "Response Formatting (JSON)",
            "Rate Limiting & Throttling",
            "Error Handling & Status Codes",
          ],
        },
        {
          id: 3,
          title: "User Authentication and Authorization Module",
          icon: "Lock",
          color: "from-emerald-500 to-emerald-900",
          description:
            "Validates credentials, issues tokens, and protects routes with RBAC support.",
          features: [
            "Credential Validation",
            "JWT / Token Generation",
            "Role-Based Access Control (RBAC)",
            "Secure Password Hashing",
            "Session Validation Middleware",
            "Protected Routes Handling",
            "Token Refresh & Expiry Management",
          ],
        },
        {
          id: 4,
          title: "Expense Processing Module",
          icon: "LibraryBig",
          color: "from-indigo-400 to-cyan-400",
          description:
            "Validates, processes and aggregates expense data; keeps totals and history accurate.",
          features: [
            "Expense Data Validation",
            "CRUD Logic for Expenses",
            "Auto-Calculate Daily / Monthly Totals",
            "Database Update Operations",
            "Data Normalization & Sanitization",
            "Duplicate Entry Prevention",
            "Performance Optimized Processing",
          ],
        },
        {
          id: 5,
          title: "Notification Module",
          icon: "Logs",
          color: "from-blue-600 to-cyan-500",
          description:
            "Delivers email/in-app reminders and budget milestone alerts via background workers.",
          features: [
            "Email Notification Service",
            "In-App Alerts for Budget Milestones",
            "Reminder Notifications for Expenses",
            "Scheduled Notification Workers / Cron Jobs",
            "Queue Management (RabbitMQ / Redis)",
            "Configurable Notification Templates",
            "Delivery Status Tracking",
          ],
        },
      ],
    },

    link: "/project/expensetrackerapplication",
  },

  socialmediadashboard: {
  id: 4,
  image: "/projectsimg/ProjectEight.jpg",
  about: {
    title: "Social Media Dashboard",
    description:
      "A Social Media Dashboard is a web-based platform that provides users with a unified space to interact, post updates, view content, and track analytics across multiple connected social platforms.",
    image: "/projectsimg/ProjectEight.jpg",
    icon: "CircleCheckBig",
  },

  modules: {
    frontendModule: [
      {
        id: 1,
        title: "User Authentication Module",
        icon: "Lock",
        color: "from-blue-600 to-cyan-500",
        description:
          "Handles user registration, login, and authentication for secure dashboard access.",
        features: [
          "User Registration Form",
          "Login / Logout Interface",
          "Password Reset Flow",
          "Secure JWT / Token Handling",
          "Form Validation",
          "Session Management",
          "Error & Success Notifications",
        ],
      },
      {
        id: 2,
        title: "User Profile Module",
        icon: "UserPen",
        color: "from-red-500 to-orange-500",
        description:
          "Enables users to manage their profile details, upload profile pictures, and personalize dashboard settings.",
        features: [
          "Edit Profile Details",
          "Upload Profile Picture",
          "Change Password Option",
          "Theme & Dashboard Customization",
          "Profile Data Validation",
          "Preview Before Saving",
          "Responsive Layout",
        ],
      },
      {
        id: 3,
        title: "Content Feed Module",
        icon: "LayoutDashboard",
        color: "from-purple-500 to-pink-500",
        description:
          "Displays aggregated content (posts, tweets, videos) from connected social media accounts.",
        features: [
          "Unified Content Feed",
          "Display Posts, Tweets, Reels, etc.",
          "Like, Comment & Share Actions",
          "Filter Feed by Platform",
          "Infinite Scroll / Pagination",
          "Media Rendering (Images / Videos)",
          "Real-time Content Updates",
        ],
      },
      {
        id: 4,
        title: "Analytics Dashboard",
        icon: "ShieldUser",
        color: "from-emerald-400 to-cyan-400",
        description:
          "Visualizes social media metrics such as engagement, follower count, and post performance.",
        features: [
          "Follower Growth Charts",
          "Engagement Rate Insights",
          "Post Performance Graphs",
          "Platform-wise Metrics Breakdown",
          "Custom Date Range Filters",
          "Downloadable Reports",
          "Interactive & Responsive Visuals",
        ],
      },
      {
        id: 5,
        title: "Notification Center",
        icon: "Package",
        color: "from-rose-400 to-red-500",
        description:
          "Shows alerts related to new followers, likes, comments, and activity updates.",
        features: [
          "New Followers Alerts",
          "Likes & Comments Notifications",
          "Real-time Updates",
          "Push / In-App Notifications",
          "Read / Unread Status",
          "Grouped Notifications",
          "Notification Preferences Settings",
        ],
      },
    ],

    backendModule: [
      {
        id: 1,
        title: "Database Management Module",
        icon: "Database",
        color: "from-lime-400 to-lime-500",
        description:
          "Stores user profiles, connected accounts, and dashboard settings securely.",
        features: [
          "User Profile Data Storage",
          "Social Media Account Connection Storage",
          "Dashboard Preference Management",
          "Data Integrity & Constraints",
          "Backup & Recovery Handling",
          "Query Optimization & Indexing",
          "Secure Access Policies",
        ],
      },
      {
        id: 2,
        title: "API Integration Module",
        icon: "Layers",
        color: "from-purple-500 to-purple-900",
        description:
          "Integrates the system with social media platforms like Facebook, Twitter, and Instagram.",
        features: [
          "OAuth / Token Handling for Platforms",
          "Facebook, Twitter, Instagram API Integration",
          "Fetch Posts, Comments, Follower Data",
          "Rate Limit Handling",
          "Scheduled Sync Jobs",
          "Error Handling for API Failures",
          "Token Refresh Mechanism",
        ],
      },
      {
        id: 3,
        title: "API Layer",
        icon: "Lock",
        color: "from-emerald-500 to-emerald-900",
        description:
          "Provide RESTful API endpoints for frontend interaction and data synchronization.",
        features: [
          "RESTful Endpoints",
          "Data Retrieval from Backend",
          "Social Platform Sync Endpoints",
          "Request Validation & Sanitization",
          "Consistent JSON Response",
          "Error Handling & Logging",
          "Rate Limiting & Throttling",
        ],
      },
      {
        id: 4,
        title: "User Authentication & Authorization Module",
        icon: "LibraryBig",
        color: "from-indigo-400 to-cyan-400",
        description:
          "Validates user credentials, manages sessions and tokens, and supports social login.",
        features: [
          "Credential Validation",
          "JWT / Token Generation",
          "Role-Based Access Control (RBAC)",
          "Password Hashing",
          "Session & Token Expiry Handling",
          "Protected Routes Middleware",
          "OAuth Integration for Social Login",
        ],
      },
    ],
  },

  link: "/project/socialmediadashboard",
},
restaurantbookingwebsite: {
  id: 5,
  image: "/projectsimg/ProjectThree.jpg",
  about: {
    title: "Restaurant Booking Website",
    description:
      "A Restaurant Booking Website simplifies table reservations by letting users browse restaurants, view menus, check availability, and book tables. It also offers reviews, ratings, special offers, and tools for owners to manage reservations and analyze feedback.",
    image: "/projectsimg/ProjectThree.jpg",
    icon: "CircleCheckBig",
  },

  modules: {
    frontendModule: [
      {
        id: 1,
        title: "User Authentication Module",
        icon: "Lock",
        color: "from-blue-600 to-cyan-500",
        description:
          "Handles user registration, login, verification, and secure access to the website.",
        features: [
          "User Registration Form",
          "Login / Logout Interface",
          "Password Reset Functionality",
          "Email / Mobile Verification (Optional)",
          "Secure Token Handling (JWT)",
          "Form Validation & Error Alerts",
          "Session Management",
          "Social Login Support (Optional)",
        ],
      },
      {
        id: 2,
        title: "Restaurant Listings Module",
        icon: "UserPen",
        color: "from-red-500 to-orange-500",
        description:
          "Displays restaurants with details like location, cuisine, menu, ratings, and available reservation slots.",
        features: [
          "Restaurant List View",
          "Search by Name / Cuisine / Location",
          "Filter & Sort Options",
          "Restaurant Detail Page",
          "Menu Display Component",
          "Ratings & Review Display",
          "Responsive Grid / Card UI",
          "Dynamic Pagination / Infinite Scroll",
        ],
      },
      {
        id: 3,
        title: "Reservation Module",
        icon: "LayoutDashboard",
        color: "from-purple-500 to-pink-500",
        description:
          "Lets users search available slots, pick date/time, set guest count, and make reservations with confirmations.",
        features: [
          "Date & Time Slot Picker",
          "Guest Count Selector",
          "Real-time Slot Availability Check",
          "Reservation Form & Confirmation Screen",
          "Calendar Integration",
          "Modify / Cancel Reservation",
          "Success & Error Notifications",
          "Mobile-Responsive UI",
        ],
      },
      {
        id: 4,
        title: "User Profile Module",
        icon: "ShieldUser",
        color: "from-emerald-400 to-cyan-400",
        description:
          "Allows users to manage profiles, view reservation history, and set preferences.",
        features: [
          "Profile Creation & Edit Form",
          "Profile Picture Upload",
          "Reservation History Display",
          "Saved Restaurants / Preferences",
          "Update Email / Password",
          "Notification Settings",
          "Delete Account Option",
        ],
      },
      {
        id: 5,
        title: "Review and Rating Module",
        icon: "Package",
        color: "from-rose-400 to-red-500",
        description:
          "Enables guests to leave reviews and ratings, helping other users choose and giving owners feedback.",
        features: [
          "Write Review Form",
          "Star Rating Input",
          "Edit / Delete Review",
          "Review Moderation Rules",
          "Review List with Sorting",
          "Helpful / Like Review Feature",
          "User-generated Content Validation",
        ],
      },
    ],

    backendModule: [
      {
        id: 1,
        title: "Database Management Module",
        icon: "Database",
        color: "from-lime-400 to-lime-500",
        description:
          "Stores user profiles, restaurant details, reservations, and reviews while enforcing integrity and performance.",
        features: [
          "Schema Design for Users, Restaurants, Reservations, Reviews",
          "Data Validation Rules",
          "Efficient Indexing & Query Optimization",
          "Relationship Management",
          "Backup & Restore Mechanisms",
          "Database Security & Access Control",
        ],
      },
      {
        id: 2,
        title: "API Layer",
        icon: "Layers",
        color: "from-purple-500 to-purple-900",
        description:
          "Exposes RESTful endpoints for CRUD operations on reservations, restaurants, reviews, and user accounts.",
        features: [
          "RESTful API Endpoints",
          "CRUD Operations for Users / Restaurants / Reservations",
          "Request & Response Validation",
          "Error Handling Middleware",
          "API Rate Limiting",
          "Pagination & Filtering Support",
          "Secure Token Verification Middleware",
        ],
      },
      {
        id: 3,
        title: "User Authentication and Authorization Module",
        icon: "Lock",
        color: "from-emerald-500 to-emerald-900",
        description:
          "Validates credentials, issues tokens, and enforces roles (admin / user) and security measures.",
        features: [
          "User Credential Verification",
          "JWT / Access Token Generation",
          "Password Hashing (e.g., bcrypt)",
          "Role-Based Access Control (Admin / User)",
          "Session Expiry & Token Refresh",
          "Multi-factor Authentication Support",
          "Account Lockout for Failed Attempts",
        ],
      },
      {
        id: 4,
        title: "Reservation Processing Module",
        icon: "LibraryBig",
        color: "from-indigo-400 to-cyan-400",
        description:
          "Handles reservation slot management, conflict checking, confirmations and notifications to users/restaurants.",
        features: [
          "Slot Availability Management",
          "Reservation Conflict Checking",
          "Reservation Confirmation Workflow",
          "Email / SMS Notifications",
          "Cancellation & Modification Handling",
          "Integration with Calendar / Time Services",
          "Admin Controls for Slot Management",
        ],
      },
      {
        id: 5,
        title: "Review Aggregation and Analytics Module",
        icon: "LibraryBig",
        color: "from-indigo-400 to-cyan-400",
        description:
          "Aggregates reviews and ratings to generate insights and recommendations for users and restaurants.",
        features: [
          "Review Storage & Filtering",
          "Rating Calculation & Aggregation",
          "Sentiment Analysis (Optional)",
          "Spam / Fake Review Detection",
          "Restaurant Recommendation Insights",
          "Analytics API for Dashboard",
        ],
      },
    ],
  },

  link: "/project/restaurantbookingwebsite",
},

onlinequizapplication: {
  id: 6,
  image: "/projectsimg/ProjectNine.jpg",
  about: {
    title: "Online Quiz Application",
    description: "An Online Quiz Application is a digital platform that allows users to take quizzes on various topics. Users can access a database of questions, take quizzes, and receive scores based on their performance. This project helps freshers gain experience in building authentication, managing dynamic question data, and implementing quiz logic.",
    image: "/projectsimg/ProjectNine.jpg",
    icon: "CircleCheckBig"
  },

  "modules": {
    "frontendModule": [
      {
        "id": 1,
        "title": "User Authentication Module",
        "icon": "Lock",
        "color": "from-blue-600 to-cyan-500",
        "description": "Handles secure sign-up, login, logout and authentication workflows.",
        "features": [
          "User Registration Form",
          "Login / Logout Interface",
          "Password Reset Flow",
          "Secure Token Handling (JWT)",
          "Form Validation",
          "Session Management",
          "Error & Success Notifications"
        ]
      },
      {
        "id": 2,
        "title": "Quiz Creation Module",
        "icon": "UserPen",
        "color": "from-red-500 to-orange-500",
        "description": "Allows administrators or instructors to create and manage quizzes.",
        "features": [
          "Quiz Creation Form",
          "Add / Edit / Delete Questions",
          "Multiple Choice Answer Setup",
          "Correct Answer Selection",
          "Quiz Preview Mode",
          "Role-Based Access (Admin / Instructor)",
          "Draft & Publish Quiz Options",
          "Form Validation & Error Handling"
        ]
      },
      {
        "id": 3,
        "title": "Quiz Taking Module",
        "icon": "LayoutDashboard",
        "color": "from-purple-500 to-pink-500",
        "description": "Allows users to browse quizzes and take them with interactive UI.",
        "features": [
          "Quiz List & Category Filters",
          "Start / Continue Quiz Interface",
          "Timed or Untimed Quiz Modes",
          "Interactive MCQ Selection",
          "Immediate Feedback After Each Question",
          "Progress Indicator",
          "Responsive & Mobile-Friendly UI",
          "Auto-Save Answers (Optional)"
        ]
      },
      {
        "id": 4,
        "title": "Quiz Results Module",
        "icon": "ShieldUser",
        "color": "from-emerald-400 to-cyan-400",
        "description": "Displays quiz results and insights",
        "features": [
          "Score Display Dashboard",
          "Correct vs Incorrect Answer Review",
          "Answer Explanations",
          "Time Taken Summary",
          "Performance Analytics (Accuracy, Attempts)",
          "Download / Share Result (Optional)",
          "Retry Quiz Option"
        ]
      },
      {
        "id": 5,
        "title": "Leaderboard Module",
        "icon": "Package",
        "color": "from-rose-400 to-red-500",
        "description": "Shows top scorers and rankings",
        "features": [
          "Top Scorers Display",
          "Global & Category-wise Ranking",
          "User Profile Linking",
          "Real-Time Score Updates",
          "Pagination & Filters",
          "Highlight Current User Rank",
          "Performance Badges or Levels"
        ]
      }
    ],

    "backendModule": [
      {
        "id": 1,
        "title": "Database Management Module",
        "icon": "Database",
        "color": "from-lime-400 to-lime-500",
        "description": "Manages storage for users, quizzes, questions, answers and results.",
        "features": [
          "Schema Design for Users, Quizzes, Questions, Answers",
          "Relationship Management",
          "Data Validation Rules",
          "Indexing & Query Optimization",
          "Backup & Restore Support",
          "Database Security & Permissions"
        ]
      },
      {
        "id": 2,
        "title": "API Layer",
        "icon": "Layers",
        "color": "from-purple-500 to-purple-900",
        "description": "Provides REST APIs for quizzes, results and user management.",
        "features": [
          "RESTful Endpoints for Users / Quizzes / Results",
          "CRUD Operations for Quizzes & Questions",
          "Input Validation & Sanitization",
          "Standardized API Responses",
          "Error Handling Middleware",
          "Pagination & Filtering Support",
          "Authentication Middleware Integration"
        ]
      },
      {
        "id": 3,
        "title": "User Authentication & Authorization Module",
        "icon": "Lock",
        "color": "from-emerald-500 to-emerald-900",
        "description": "Handles secure login authentication and role-based access.",
        "features": [
          "User Credential Verification",
          "JWT Token Generation & Validation",
          "Password Hashing (bcrypt)",
          "Role-Based Access Control",
          "Token Refresh Logic",
          "Secure Session Handling",
          "Account Lockout & Retry Limits"
        ]
      },
      {
        "id": 4,
        "title": "Quiz Logic Module",
        "icon": "LibraryBig",
        "color": "from-indigo-400 to-cyan-400",
        "description": "Implements core quiz functionality.",
        "features": [
          "Quiz Creation Engine",
          "Dynamic Question Delivery",
          "Scoring Algorithm",
          "Answer Validation",
          "Result Generation & Storage",
          "Timer & Quiz Progress Tracking",
          "Random Question Distribution (Optional)"
        ]
      },
      {
        "id": 5,
        "title": "Notification Module",
        "icon": "LibraryBig",
        "color": "from-indigo-400 to-cyan-400",
        "description": "Sends alerts related to quizzes and results.",
        "features": [
          "Email / SMS Notification Support",
          "Quiz Invitation Alerts",
          "Quiz Completion Notifications",
          "Reminder Scheduling",
          "Template-based Message Formatting",
          "Integration with Third-party Email Services"
        ]
      }
    ]
  },

  "link": "/project/onlinequizapplication"
},

petAdoptionPlatform: {
  id: 1,
  image: "/projectsimg/ProjectTen.jpg",
  about: {
    title: "PetAdoptionPlatform",
    description:
      "The Pet Adoption Platform is a web application designed to facilitate the adoption of pets by connecting prospective pet owners with animals in need of homes. The platform serves as a centralized hub where animal shelters, rescue organizations, and individuals can list pets available for adoption. Users can browse through listings, learn about the pets, and initiate the adoption process.",
    image: "/projectsimg/ProjectTen.jpg",
    icon: "CircleCheckBig",
  },

  modules: {
    frontendModule: [
      {
        id: 1,
        title: "User Authentication Module",
        icon: "Lock",
        color: "from-blue-600 to-cyan-500",
        description:
          "Allows users to create accounts, log in, and securely access the platform.",
        features: [
          "User Registration Form",
          "Login / Logout Interface",
          "Password Recovery Flow",
          "Secure Token Handling (JWT)",
          "Form Validation",
          "Session Management",
          "Error & Success Notifications",
        ],
      },
      {
        id: 2,
        title: "Pet Listings Module",
        icon: "UserPen",
        color: "from-red-500 to-orange-500",
        description:
          "Displays listings of pets with filters, search and responsive UI.",
        features: [
          "Pet Listings Grid / List View",
          "Search by Species / Breed / Location",
          "Advanced Filters (Age, Gender, Size)",
          "Sort Options (Newest, Age, Distance)",
          "Responsive Card-Based UI",
          "Pagination or Infinite Scroll",
          "Bookmark / Save Pet Option (Optional)",
        ],
      },
      {
        id: 3,
        title: "Pet Details Module",
        icon: "LayoutDashboard",
        color: "from-purple-500 to-pink-500",
        description:
          "Shows detailed pet profiles, photos, temperament and adoption requirements.",
        features: [
          "Pet Profile Page",
          "Photo Gallery or Carousel",
          "Detailed Description & Temperament Info",
          "Adoption Requirements Display",
          "Contact / Ask About Pet Button",
          "Share Pet Profile Feature",
          "Related Pets Suggestion Section",
        ],
      },
      {
        id: 4,
        title: "Adoption Application Module",
        icon: "ShieldUser",
        color: "from-emerald-400 to-cyan-400",
        description:
          "Enables users to submit and manage adoption applications for pets.",
        features: [
          "Adoption Application Form",
          "Personal & Household Details Input",
          "Document Upload (Optional)",
          "Form Validation & Progress Indicators",
          "View Submitted Applications",
          "Edit or Withdraw Application",
          "Success & Error Notification Alerts",
        ],
      },
      {
        id: 5,
        title: "Messaging Module",
        icon: "Package",
        color: "from-rose-400 to-red-500",
        description:
          "Facilitates communication between adopters and shelters/organizations.",
        features: [
          "User-to-Organization Messaging Interface",
          "Send & Receive Messages",
          "Chat UI with Timestamps",
          "Pet-Specific Message Threads",
          "Real-Time or Polling-Based Updates",
          "Notifications for New Messages",
          "Message History Display",
        ],
      },
    ],

    backendModule: [
      {
        id: 1,
        title: "Database Management Module",
        icon: "Database",
        color: "from-lime-400 to-lime-500",
        description:
          "Manages storage for pets, users, applications and messages with secure schema.",
        features: [
          "Schema for Pets, Users, Applications, Messages",
          "Relationship Management Between Tables",
          "Data Validation & Constraints",
          "Efficient Indexing & Optimized Queries",
          "Backup & Restore Capabilities",
          "Database Security & Access Control",
        ],
      },
      {
        id: 2,
        title: "API Layer",
        icon: "Layers",
        color: "from-purple-500 to-purple-900",
        description:
          "RESTful APIs to handle CRUD operations and serve frontend requests.",
        features: [
          "RESTful API Endpoints",
          "CRUD Operations for Pets, Users, Applications, Messages",
          "Request Validation & Sanitization",
          "Error Handling Middleware",
          "Pagination & Filtering Support",
          "Authentication Middleware Integration",
        ],
      },
      {
        id: 3,
        title: "User Authentication and Authorization Module",
        icon: "Lock",
        color: "from-emerald-500 to-emerald-900",
        description:
          "Handles credential validation, token management and role-based access.",
        features: [
          "User Credential Verification",
          "JWT Token Generation & Validation",
          "Password Hashing (bcrypt)",
          "Role-Based Access Control (User / Admin)",
          "Token Refresh Logic",
          "Secure Session Handling",
          "Account Lockout for Failed Attempts",
        ],
      },
      {
        id: 4,
        title: "Adoption Management Module",
        icon: "LibraryBig",
        color: "from-indigo-400 to-cyan-400",
        description:
          "Tracks adoption applications, statuses and admin review workflow.",
        features: [
          "Application Submission & Storage",
          "Application Status Management",
          "Pet Availability Update Logic",
          "Admin Review Workflow",
          "Approve / Reject Application Actions",
          "History & Audit Tracking",
          "Integration With Messaging System",
        ],
      },
      {
        id: 5,
        title: "Notification Module",
        icon: "LibraryBig",
        color: "from-indigo-400 to-cyan-400",
        description:
          "Sends email/in-app notifications about application updates and new listings.",
        features: [
          "Email / In-App Notification Support",
          "Application Status Alerts",
          "New Pet Listing Notifications",
          "Message Notification System",
          "Template-Based Email Formatting",
          "Scheduled or Event-Based Notifications",
        ],
      },
    ],
  },

  link: "/project/pet-adoption",
},

realEstateListingWebsite: {
  id: 2,
  image: "/projectsimg/ProjectSix.jpg",
  about: {
    title: "RealEstateListingWebsite",
    description:
      "Develops an intuitive and user-friendly interface for easy navigation and property search. Includes features such as property search filters, interactive maps, and responsive design for seamless browsing across devices.",
    image: "/projectsimg/ProjectSix.jpg",
    icon: "CircleCheckBig",
  },

  modules: {
    frontendModule: [
      {
        id: 1,
        title: "User Interface",
        icon: "Lock",
        color: "from-blue-600 to-cyan-500",
        description:
          "Allows users to navigate the platform easily and access property search features.",
        features: [
          "Intuitive and User-Friendly Navigation",
          "Advanced Property Search Bar",
          "Search Filters (Price, Location, Size, Amenities)",
          "Interactive Property Map",
          "Responsive Design for All Devices",
          "Clean UI with Grid & List Viewing Options",
          "Fast Loading & Optimized UI Performance",
        ],
      },
      {
        id: 2,
        title: "Property Listing",
        icon: "UserPen",
        color: "from-red-500 to-orange-500",
        description:
          "Displays comprehensive listings of properties with filters and search options.",
        features: [
          "List & Grid View Layouts",
          "Display of Property Location, Price, Size, Amenities",
          "Advanced Filters & Sorting Options",
          "Search by Keyword, Location, or Property Type",
          "Pagination or Infinite Scrolling",
          "Save / Favorite Property Option",
          "Real-Time Property Availability Updates",
        ],
      },
      {
        id: 3,
        title: "Property Details",
        icon: "LayoutDashboard",
        color: "from-purple-500 to-pink-500",
        description:
          "Shows detailed property information including images, tours, and floor plans.",
        features: [
          "Property Detail Page with Full Description",
          "Photo Gallery / Image Carousel",
          "Virtual Tour / 360° Property View",
          "Floor Plans & Layout Previews",
          "Neighborhood & Nearby Amenities Info",
          "Interactive Map of Property Location",
          "Contact or Inquiry Button",
          "Share Property Link Feature",
        ],
      },
      {
        id: 4,
        title: "User Accounts",
        icon: "ShieldUser",
        color: "from-emerald-400 to-cyan-400",
        description:
          "Allows users to create accounts, save favorites, and manage search preferences.",
        features: [
          "User Registration & Login",
          "Password Reset & Account Recovery",
          "Profile Management",
          "Save Favorite Properties",
          "Manage Search Preferences",
          "Email Alerts for Matching Listings",
          "View Inquiry History",
          "Secure Authentication",
        ],
      },
      {
        id: 5,
        title: "Contact and Inquiry Forms",
        icon: "Package",
        color: "from-rose-400 to-red-500",
        description:
          "Integrates forms for direct communication with sellers or agents securely.",
        features: [
          "Inquiry Form on Property Page",
          "User Details & Message Input",
          "Validation & Error Handling",
          "Secure Submission & Privacy Protection",
          "Direct Message to Agent or Seller",
          "Success Confirmation Notifications",
          "Spam / Bot Protection (Captcha Optional)",
        ],
      },
    ],

    backendModule: [
      {
        id: 1,
        title: "Database Management",
        icon: "Database",
        color: "from-lime-400 to-lime-500",
        description:
          "Manages storage for properties, users, inquiries, and transactions efficiently.",
        features: [
          "Relational Database Structure",
          "Tables for Properties, Users, Inquiries, Transactions",
          "Optimized Data Retrieval & Indexing",
          "Secure Storage of Sensitive Data",
          "Data Validation & Constraints",
          "Backup & Recovery Mechanisms",
          "Efficient Query Optimization",
        ],
      },
      {
        id: 2,
        title: "API Layer",
        icon: "Layers",
        color: "from-purple-500 to-purple-900",
        description:
          "Provides REST APIs for frontend communication and CRUD operations on properties and users.",
        features: [
          "RESTful API Endpoints",
          "CRUD for Properties, Users, Inquiries",
          "Filtering, Sorting & Pagination APIs",
          "Input Validation & Sanitization",
          "Error Handling Middleware",
          "Authentication Middleware",
          "File Upload Support (Images, Documents)",
        ],
      },
      {
        id: 3,
        title: "User Authentication and Authorization Module",
        icon: "Lock",
        color: "from-emerald-500 to-emerald-900",
        description:
          "Handles secure user authentication, role-based access, and session management.",
        features: [
          "Secure User Registration & Login",
          "Password Hashing (bcrypt)",
          "Token-Based Authentication (JWT)",
          "Role-Based Access Control (User, Admin, Agent)",
          "Session Handling & Token Refresh",
          "Brute Force Protection & Login Limits",
        ],
      },
      {
        id: 4,
        title: "Property Management",
        icon: "LibraryBig",
        color: "from-indigo-400 to-cyan-400",
        description:
          "Admin tools for adding, editing, and managing property listings, categories, and multimedia.",
        features: [
          "Admin Panel for Adding & Editing Properties",
          "Property Categorization & Attributes Setup",
          "Status Management (Available, Sold, Rented)",
          "Price Updates & Modification Tools",
          "Upload Images, Videos, Floor Plans",
          "Bulk Upload Support",
          "Audit Logging for Updates",
        ],
      },
      {
        id: 5,
        title: "Notification System",
        icon: "LibraryBig",
        color: "from-indigo-400 to-cyan-400",
        description:
          "Sends notifications to users about new listings, inquiries, and updates via email or in-app alerts.",
        features: [
          "Email Alerts for New Listings or Price Changes",
          "In-App Notifications for Saved Searches",
          "Inquiry Status Updates",
          "Push Notifications (Optional)",
          "User Notification Preferences",
          "Event-Triggered Notification System",
          "Template-Based Email Formatting",
        ],
      },
    ],
  },

  link: "/project/real-estate",
},
appointmentSchedulingApp: {
  id: 3,
  image: "/projectsimg/ProjectTwo.jpg",
  about: {
    title: "AppointmentSchedulingApp",
    description:
      "A digital platform to streamline booking appointments and managing schedules efficiently. Users can schedule appointments, view available slots, receive reminders, and manage bookings.",
    image: "/projectsimg/ProjectTwo.jpg",
    icon: "CircleCheckBig",
  },

  modules: {
    frontendModule: [
      {
        id: 1,
        title: "User Interface",
        icon: "Lock",
        color: "from-blue-600 to-cyan-500",
        description:
          "Develops an intuitive interface with calendar views, date pickers, and responsive design for smooth navigation.",
        features: [
          "Intuitive and user-friendly navigation",
          "Interactive calendar views and date pickers",
          "Responsive design for mobile, tablet, and desktop",
          "Clear visual layout for browsing service providers",
          "Quick access to appointment booking flow",
          "Smooth transitions and optimized UI performance",
        ],
      },
      {
        id: 2,
        title: "Appointment Booking",
        icon: "UserPen",
        color: "from-red-500 to-orange-500",
        description:
          "Provides a booking interface to select services, choose time slots, and submit booking requests.",
        features: [
          "Booking interface to select services and providers",
          "Real-time appointment availability",
          "Time slot selection and booking confirmation",
          "Display of service categories and appointment durations",
          "Form validation for secure and accurate submissions",
          "Instant success/error messages",
        ],
      },
      {
        id: 3,
        title: "Appointment Management",
        icon: "LayoutDashboard",
        color: "from-purple-500 to-pink-500",
        description:
          "Enables users to view, modify, and manage appointments, with communication and notes features.",
        features: [
          "View upcoming and past appointments",
          "Reschedule, cancel, or modify appointments",
          "Add appointment notes or attach files",
          "In-app communication with service providers",
          "Appointment status tracking (pending, confirmed, completed)",
          "User-friendly dashboard for managing bookings",
        ],
      },
      {
        id: 4,
        title: "Service Provider Profiles",
        icon: "ShieldUser",
        color: "from-emerald-400 to-cyan-400",
        description:
          "Displays profiles of service providers with services, availability, and reviews.",
        features: [
          "Detailed provider profiles with services offered",
          "Display of availability schedules",
          "Provider contact details and location",
          "User reviews and ratings",
          "Filter and search providers by service or expertise",
          "Quick action button to book an appointment directly",
        ],
      },
      {
        id: 5,
        title: "Notification System",
        icon: "Package",
        color: "from-rose-400 to-red-500",
        description:
          "Sends reminders, confirmations, and updates via email, SMS, or push notifications.",
        features: [
          "Email, SMS, or push notifications",
          "Appointment reminders and confirmations",
          "Updates for rescheduled or canceled appointments",
          "Customizable notification preferences",
          "Real-time alerts for appointment changes",
          "Automated reminder scheduling",
        ],
      },
    ],

    backendModule: [
      {
        id: 1,
        title: "Database Management",
        icon: "Database",
        color: "from-lime-400 to-lime-500",
        description:
          "Stores users, providers, appointments, and schedules securely with relational structures.",
        features: [
          "Secure storage for users, providers, appointments, and schedules",
          "Relational database with well-defined relationships",
          "Efficient data retrieval with indexing",
          "Backup and recovery mechanisms",
          "Data validation and referential integrity",
          "Optimized querying for large-scale scheduling data",
        ],
      },
      {
        id: 2,
        title: "API Layer",
        icon: "Layers",
        color: "from-purple-500 to-purple-900",
        description:
          "Provides RESTful APIs for frontend-backend communication and CRUD operations.",
        features: [
          "RESTful API endpoints for all core operations",
          "CRUD operations for users, providers, and appointments",
          "Endpoints for notifications and schedule management",
          "Authentication and authorization middleware",
          "Input validation and structured error responses",
          "Support for pagination, filtering, and sorting",
        ],
      },
      {
        id: 3,
        title: "User Authentication and Authorization Module",
        icon: "Lock",
        color: "from-emerald-500 to-emerald-900",
        description:
          "Secure user registration, login, password management, and role-based access control.",
        features: [
          "Secure registration and login",
          "Password encryption & secure reset flows",
          "JWT or session-based authentication",
          "Role-based access control (User, Admin, Provider)",
          "Multi-factor authentication support (optional)",
          "Protection against brute-force and unauthorized access",
        ],
      },
      {
        id: 4,
        title: "Appointment Scheduling Algorithm",
        icon: "LibraryBig",
        color: "from-indigo-400 to-cyan-400",
        description:
          "Optimizes appointment slots based on provider availability, appointment duration, and user preferences.",
        features: [
          "Smart slot allocation based on availability",
          "Conflict detection and prevention",
          "Supports variable appointment durations",
          "Optimizes scheduling efficiency for providers",
          "Auto-suggests best available time slots",
          "Handles provider breaks, blackout dates, and holidays",
        ],
      },
      {
        id: 5,
        title: "Integration with Calendar Systems",
        icon: "LibraryBig",
        color: "from-indigo-400 to-cyan-400",
        description:
          "Syncs appointments with external calendars to prevent double bookings and keep users organized.",
        features: [
          "Sync with Google Calendar, Outlook, and Apple Calendar",
          "Prevent double bookings across platforms",
          "Export appointment data to external calendars",
          "Real-time sync for updates and cancellations",
          "OAuth-based secure integration",
          "User controls to enable or disable calendar sync",
        ],
      },
    ],
  },

  link: "/project/appointment-scheduling",
},


};
