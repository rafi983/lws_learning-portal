# Crystal Academy - Learning Platform

A comprehensive learning management system built with React.js and Redux Toolkit, featuring separate admin and student portals with video courses, assignments, quizzes, and leaderboard functionality.

## 🌟 Features

### Student Portal
- **Video Learning**: Stream educational videos with progress tracking
- **Interactive Quizzes**: Take quizzes related to video content
- **Assignments**: Submit assignments with deadline tracking
- **Leaderboard**: View rankings based on quiz and assignment performance
- **Course Player**: Watch videos with sidebar navigation
- **Student Registration**: Self-registration system for students

### Admin Dashboard
- **Video Management**: Add, edit, and delete educational videos
- **Assignment Management**: Create and manage assignments with deadlines
- **Quiz Management**: Create quizzes with multiple questions and options
- **Assignment Marking**: Review and grade student submissions
- **User Management**: Manage student accounts and access

### Authentication & Security
- **Role-based Access Control**: Separate access for admins and students
- **Protected Routes**: Secure routing based on user roles
- **JWT Authentication**: Secure token-based authentication system

## 🏗️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Redux Toolkit** - State management
- **React Router v6** - Client-side routing
- **Mantine UI** - Modern React components library
- **Tailwind CSS** - Utility-first CSS framework
- **React Player** - Video player component
- **Moment.js** - Date manipulation
- **React Icons** - Icon library
- **React Toastify** - Toast notifications

### Backend
- **JSON Server** - REST API simulation
- **JSON Server Auth** - Authentication middleware
- **bcrypt** - Password hashing

### Build Tools
- **Create React App** - React application setup
- **npm/yarn** - Package management

## 📁 Project Structure

```
├── public/                     # Static assets
│   ├── assets/image/          # Images and logos
│   └── index.html             # Main HTML file
├── server/                    # Backend API server
│   ├── db.json               # Database simulation
│   └── package.json          # Server dependencies
├── src/
│   ├── app/                  # Redux store configuration
│   ├── components/           # React components
│   │   ├── AdminDashboard/   # Admin-specific components
│   │   │   ├── Dashboard.js
│   │   │   ├── AssignmentMarks/
│   │   │   ├── Assignments/
│   │   │   ├── Quizzes/
│   │   │   └── Videos/
│   │   ├── ProtectedRoutes/  # Route protection components
│   │   ├── shared/           # Shared components
│   │   └── StudentPortal/    # Student-specific components
│   │       ├── CoursePlayer/
│   │       ├── LeaderBoard/
│   │       ├── Quiz/
│   │       └── StudentRegistration/
│   ├── features/             # Redux slices and API
│   │   ├── admin/           # Admin-related APIs
│   │   ├── auth/            # Authentication logic
│   │   ├── student/         # Student-related APIs
│   │   └── api/             # Base API configuration
│   ├── hooks/               # Custom React hooks
│   └── utils/               # Utility functions
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd lws_learning-platform
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd server
   npm install
   cd ..
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd server
   npm start
   ```
   The API server will run on `http://localhost:9000`

2. **Start the frontend application**
   ```bash
   npm start
   ```
   The React app will run on `http://localhost:3000`

## 🔐 Default Credentials

### Admin Access
- **Email**: `admin@learnwithsumit.com`
- **Password**: `lws@123456`
- **Role**: Administrator
- **Access**: Full admin dashboard with video, assignment, quiz management and grading capabilities

### Student Access
Multiple student accounts are available for testing:

#### Student 1 - Saad Hasan
- **Email**: `saad.hasan@learnwithsumit.com`
- **Password**: `lws@123456`
- **Role**: Student

#### Student 2 - Akash Ahmed
- **Email**: `akash.ahmed@learnwithsumit.com`
- **Password**: `lws@123456`
- **Role**: Student

#### Student 3 - Mohammad Salahuddin
- **Email**: `md.salahuddin@learnwithsumit.com`
- **Password**: `lws@123456`
- **Role**: Student

#### Student 4 - Ferdous
- **Email**: `ferdous.shohag@learnwithsumit.com`
- **Password**: `lws@123456`
- **Role**: Student

#### Student 5 - Riyadh
- **Email**: `riyadh.vai@learnwithsumit.com`
- **Password**: `lws@123456`
- **Role**: Student

#### Student 8 - Naomi
- **Email**: `naomi@gmail.com`
- **Password**: `123456789`
- **Role**: Student

### Testing Different User Experiences
- Use the **admin account** to manage content, view submissions, and grade assignments
- Use any **student account** to experience the learning portal, take quizzes, submit assignments, and view leaderboard
- Switch between different student accounts to see how rankings and progress vary
- All student except one accounts have the same password (`lws@123456`) for easy testing

### New User Registration
- Students can also create new accounts using the registration page at `/register`
- Only students can self-register; admin accounts must be created manually

## 📋 Available Scripts

### Frontend Scripts
- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

### Backend Scripts
- `npm start` - Starts the JSON server with authentication

## 🎯 Key Functionalities

### For Students
1. **Registration**: Create a new student account
2. **Video Learning**: Access course videos with progress tracking
3. **Quiz Participation**: Take quizzes and receive instant feedback
4. **Assignment Submission**: Submit assignments before deadlines
5. **Leaderboard**: View performance rankings
6. **Profile Management**: Manage personal information

### For Admins
1. **Content Management**: Add, edit, delete videos, quizzes, and assignments
2. **Student Monitoring**: View student progress and submissions
3. **Grading System**: Review and grade student assignments
4. **Analytics**: Track student performance and engagement
5. **User Management**: Manage student accounts and permissions

## 📊 API Endpoints

The application uses a RESTful API with the following main endpoints:

- `GET/POST /users` - User management
- `GET/POST/PUT/DELETE /videos` - Video management
- `GET/POST/PUT/DELETE /assignments` - Assignment management
- `GET/POST/PUT/DELETE /quizzes` - Quiz management
- `GET/POST/PUT /assignmentMarks` - Assignment grading
- `GET/POST /quizMarks` - Quiz results

## 🔒 Authentication Flow

1. **Login**: Users authenticate with email/password
2. **Token Generation**: JWT tokens are issued upon successful login
3. **Route Protection**: Protected routes verify tokens and user roles
4. **Auto-logout**: Tokens expire and users are redirected to login

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:
- **Desktop** computers
- **Tablet** devices
- **Mobile** phones

## 🎨 UI/UX Features

- **Modern Design**: Clean and intuitive interface
- **Dark/Light Themes**: Customizable theme options
- **Toast Notifications**: Real-time feedback for user actions
- **Loading States**: Smooth loading indicators
- **Error Handling**: Graceful error messages and fallbacks

## 📈 Performance Optimizations

- **Code Splitting**: Lazy loading of components
- **Memoization**: React.memo and useMemo for performance
- **Efficient State Management**: Redux Toolkit for optimized state updates
- **Image Optimization**: Compressed assets for faster loading

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```
REACT_APP_API_URL=http://localhost:9000
```

### Custom Styling
The project uses Tailwind CSS for styling. Customize themes in:
- `src/index.css` - Global styles
- `src/App.css` - Component-specific styles
- `src/utils/customStyles.js` - Mantine theme customization

## 🚨 Assignment Submission Guidelines

### Deadline Policy
1. **On Time**: Full marks awarded
2. **1 Hour Late**: 10% marks deducted
3. **1-24 Hours Late**: 30% marks deducted
4. **24+ Hours Late**: 50% marks deducted
5. **After Course End**: No marks awarded

### Important Notes
- Submit assignments within course duration
- Code changes after submission deadline will result in mark deduction
- Final marks will be provided within 7-10 days

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 👥 Authors

- **Sumit Saha** - *Learn with Sumit*
- **Development Team** - *LWS Learning Platform*

## 🆘 Support

For support and questions:
- Check the documentation
- Open an issue in the repository
- Contact the development team

## 🚀 Future Enhancements

- **Real-time Chat**: Student-teacher communication
- **Video Conferencing**: Live classes integration
- **Mobile App**: React Native application
- **Advanced Analytics**: Detailed progress tracking
- **Course Certificates**: Completion certificates
- **Payment Integration**: Paid course functionality

---

**Happy Learning! 🎓**
