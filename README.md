## Getting Started

### Backend Setup
1. Open a terminal and navigate to the backend directory if needed.
2. Install the required Python dependencies: `pip install -U flask-sqlalchemy flask-cors`
3. Start the flask server `flask run`

### Frontend Setup
1. Open another terminal and navigate to the backend directory if needed.
2. Install the required dependencies `npm install`
3. Start the react server `npm start`

## Testing the application
Browser: Use Google Chrome for testing.

Mobile View:
1. Open the application in Chrome.
2. Press Ctrl+Shift+I (Windows/Linux) or Cmd+Option+I (Mac) to open the Inspect Element panel.
3. Click on the Device Toolbar (mobile icon in the top left corner).
4. Select iPhone XR from the list of device options.

### Expected View
<img width="1467" alt="image" src="https://github.com/user-attachments/assets/105b3e07-edbe-4d64-848f-b4ccce6ad6e5" />

## Available Routes
| Route            | Description                                         |
|-------------------|-----------------------------------------------------|
| `/`              | Default route, leads to the homepage of the mock user. |
| `/login`         | Access the login page.                              |
| `/create-account`| Access the account creation page.                   |
| `/messaging`     | Full-page chat interface. The main goal is to integrate the real message system with the main application. |

## Project Demo and Presentation
You can find the presentation demo video [here](https://drive.google.com/file/d/1aztAbQ8bP18Q-oGTWSjKHIhC51_PBfYu/view?usp=share_link) _(accessible only to LionMail user)_. This project is part of the User Interface Design course (Fall 2024), led by Prof. Brian Smith. We would like to sincerely acknowledge the guidance and support provided by Prof. Smith and all the TAs throughout the semester.

## Final Notes
For our chatbot back-end system, we use Gemini AI API provided by Google to develop, with the help of [this tutorial](https://www.youtube.com/watch?v=pTcunloZ-_o).

If you would like to test registering a user, try :
    curl -X POST http://127.0.0.1:5000/api/users/register \
    -H "Content-Type: application/json" \
    -d '{"name": "Maria Doe", "email": "mariadoe@example.com", "password": "testingtesting123"}' 
