# Vercel Deployment Guide

## Environment Variables Required

To deploy the GameLayer website with AI assistant functionality on Vercel, you need to set the following environment variables in your Vercel project settings:

### Required Variables

1. **OPENAI_API_KEY**
   - Your OpenAI API key for GPT-4o-mini access
   - Format: `sk-proj-...`

2. **SUPABASE_URL**
   - Your Supabase project URL
   - Format: `https://your-project-id.supabase.co`

3. **SUPABASE_KEY**
   - Your Supabase anonymous key
   - Format: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

### Optional Variables

4. **EMAIL_USER** (for contact form)
   - Gmail address for sending emails
   - Format: `your-email@gmail.com`

5. **EMAIL_PASS** (for contact form)
   - Gmail app password
   - Format: `your-app-password`

## How to Set Environment Variables in Vercel

1. Go to your Vercel dashboard
2. Select your GameLayer project
3. Go to Settings → Environment Variables
4. Add each variable with the exact names above
5. Set the environment to "Production"
6. Redeploy your project

## Current Configuration

The Vercel configuration (`vercel.json`) is set up to:
- Serve the React app from the `build` directory
- Route API calls (`/api/*`) to the Node.js server
- Route chat endpoints (`/chat/*`) to the Node.js server
- Handle CORS for Vercel domains

## Troubleshooting

If the AI assistant is not working:
1. Check that all environment variables are set correctly
2. Verify the Supabase database is accessible
3. Ensure the OpenAI API key is valid
4. Check Vercel function logs for errors

## Local Development

For local development, create a `.env` file with the same variables:

```bash
OPENAI_API_KEY=your_key_here
SUPABASE_URL=your_url_here
SUPABASE_KEY=your_key_here
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
``` 