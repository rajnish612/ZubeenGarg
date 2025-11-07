# Debug: Tributes Not Loading in Production

## Common Issues & Solutions:

### 1. Environment Variables
**Check your production environment has:**
```env
MONGO_URI=mongodb+srv://rnish612:rZmgq96zx74W6gws@cluster0.cfbttzc.mongodb.net/zubeenDa
```

**Vercel/Netlify:** Add this in your platform's environment variables section
**Other hosting:** Ensure .env variables are properly set

### 2. Database Connection Issues
- MongoDB Atlas IP whitelist (allow all: 0.0.0.0/0)
- Database user permissions
- Network connectivity

### 3. API Route Issues
- Check if `/api/tributes` route is accessible
- Verify serverless function timeout settings
- Check platform-specific API route configuration

### 4. Database Name/Collection
Current setup uses database: `zubeenDa`
Collection: `tributes` (auto-created)

### 5. Quick Debug Steps:

1. **Test API directly:** Visit `https://yoursite.com/api/tributes`
2. **Check browser console** for fetch errors
3. **Monitor platform logs** for server errors
4. **Verify MongoDB connection** in Atlas dashboard

### 6. Add Debug Logging:

Add to your API route (temporary):
```typescript
console.log('MongoDB URI exists:', !!process.env.MONGO_URI);
console.log('Connecting to DB...');
```

### 7. MongoDB Atlas Checklist:
- [ ] Cluster is running
- [ ] Database user exists with read/write permissions
- [ ] IP address is whitelisted (0.0.0.0/0 for all)
- [ ] Connection string includes correct database name

### 8. Platform-Specific:
**Vercel:** Check Functions tab for errors
**Netlify:** Check Functions logs
**Other:** Check your platform's serverless function logs