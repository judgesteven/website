# Vercel AI Assistant Troubleshooting Guide

## Quick Fix Checklist

### 1. Environment Variable (MOST IMPORTANT)
- Go to Vercel Dashboard → Your Project → Settings → Environment Variables
- Add: `OPENAI_API_KEY` = `your_actual_openai_api_key`
- Redeploy after adding the environment variable

### 2. Test API Endpoints
After deployment, test these endpoints:

**Health Check:**
```
https://your-domain.vercel.app/api/health
```

**Test Endpoint:**
```
https://your-domain.vercel.app/api/test
```

**AI Chat Endpoint:**
```
https://your-domain.vercel.app/api/chat/ai
```

### 3. Browser Console Debugging
1. Open your Vercel app in browser
2. Press F12 to open Developer Tools
3. Go to Console tab
4. Try using the AI assistant
5. Look for error messages and API calls

### 4. Common Issues & Solutions

#### Issue: "AI Assistant is not configured"
**Solution:** Set `OPENAI_API_KEY` environment variable in Vercel

#### Issue: "Cannot POST /api/chat/ai"
**Solution:** Check if the API route is deployed correctly

#### Issue: CORS errors
**Solution:** API routes include CORS headers, should work automatically

#### Issue: Network errors
**Solution:** Check if the domain is correct and API is accessible

### 5. Manual Testing

Test the API directly using curl or Postman:

```bash
# Test health endpoint
curl https://your-domain.vercel.app/api/health

# Test AI endpoint
curl -X POST https://your-domain.vercel.app/api/chat/ai \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello", "conversationId": "test"}'
```

### 6. Vercel Function Logs
1. Go to Vercel Dashboard → Your Project → Functions
2. Click on the function that's failing
3. Check the logs for error messages

### 7. Expected Behavior

**Working AI Assistant:**
- Shows "AI Active" status
- Responds to questions about gamification
- Provides GameLayer information
- No console errors

**Not Working:**
- Shows "AI Assistant is not configured"
- Console shows network errors
- API calls fail with 404 or 500 errors

### 8. Emergency Fallback

If the AI assistant still doesn't work:
1. Check Vercel function logs
2. Verify environment variable is set
3. Test API endpoints manually
4. Check browser console for errors
5. Ensure the domain is correct

## Support

If issues persist:
1. Check Vercel deployment logs
2. Verify all environment variables
3. Test API endpoints manually
4. Check browser console for detailed error messages 