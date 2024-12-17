## Getting Started

### Backend Setup
1. Open a terminal and navigate to the backend directory if needed.
2. Install the required Python dependencies: `pip install -U flask-sqlalchemy flask-cors`
3. Start the flask server `flask run`

### Frontend Setup
1. Open another terminal and navigate to the backend directory if needed.
2. Install the required dependencies `npm install`
3. Start the react server `npm start`

## Testing the applcation
Browser: Use Google Chrome for testing.
Mobile View:
1. Open the application in Chrome.
2. Press Ctrl+Shift+I (Windows/Linux) or Cmd+Option+I (Mac) to open the Inspect Element panel.
3. Click on the Device Toolbar (mobile icon in the top left corner).
4. Select iPhone XR from the list of device options.

### Expected View
<img width="1467" alt="image" src="https://github.com/user-attachments/assets/105b3e07-edbe-4d64-848f-b4ccce6ad6e5" />

### Note
If you would like to test registering a user, try :
    curl -X POST http://127.0.0.1:5000/api/users/register \
    -H "Content-Type: application/json" \
    -d '{"name": "Maria Doe", "email": "mariadoe@example.com", "password": "testingtesting123"}' 

