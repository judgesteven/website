# Email Setup for Access Request Form

## Overview
The access request form now sends emails to `steve@gamelayer.co` when users submit their information.

## Environment Variables Required

Create a `.env` file in the root directory with the following variables:

```env
# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key_here

# Email Configuration (Gmail)
EMAIL_USER=your_gmail_address@gmail.com
EMAIL_PASS=your_gmail_app_password_here

# Server Configuration
PORT=3001
```

## Gmail Setup Instructions

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Navigate to Security
   - Under "2-Step Verification", click "App passwords"
   - Generate a new app password for "Mail"
   - Use this password in the `EMAIL_PASS` variable

## Email Format

The email sent to `steve@gamelayer.co` will include:
- **Subject**: "New GameLayer Access Request"
- **Content**: 
  - Name
  - Email address
  - Project description (formatted with line breaks)

## Testing

1. Start the server: `npm start`
2. Navigate to the Testing page
3. Fill out the form with all required fields
4. Submit the form
5. Check the email at `steve@gamelayer.co`

## Troubleshooting

- Ensure all environment variables are set correctly
- Verify Gmail app password is correct
- Check server logs for any email sending errors
- Make sure the server is running on the correct port 