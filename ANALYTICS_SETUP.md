# Google Analytics 4 Setup Guide

Your portfolio now has comprehensive analytics tracking set up! Here's how to complete the setup and start tracking visitors.

## Step 1: Create a Google Analytics 4 Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring" or "Admin" (gear icon)
4. Create a new account and property:
   - **Account Name**: Your name or "Portfolio"
   - **Property Name**: "Portfolio Website"
   - **Time Zone**: Select your timezone
   - **Currency**: Select your currency

## Step 2: Set Up a Data Stream

1. After creating the property, click "**Data Streams**"
2. Click "**Add stream**" → "**Web**"
3. Enter your website details:
   - **Website URL**: Your portfolio URL (e.g., `https://yourdomain.com`)
   - **Stream name**: "Portfolio Website"
4. Click "**Create stream**"

## Step 3: Get Your Measurement ID

1. After creating the stream, you'll see your **Measurement ID**
2. It looks like: `G-XXXXXXXXXX`
3. Copy this ID

## Step 4: Add Your Measurement ID to the Code

1. Open `src/App.jsx`
2. Find this line:
   ```javascript
   const GA4_MEASUREMENT_ID = 'YOUR_GA4_MEASUREMENT_ID'
   ```
3. Replace `'YOUR_GA4_MEASUREMENT_ID'` with your actual ID:
   ```javascript
   const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX'
   ```
4. Save the file

## Step 5: Deploy Your Site

Once you've added your Measurement ID:
1. Build your site: `npm run build`
2. Deploy to your hosting platform
3. Wait a few hours for data to start appearing in Google Analytics

## What's Being Tracked

### Automatic Tracking
- **Page Views**: Every time someone visits a page
- **User Sessions**: How long people stay on your site
- **Traffic Sources**: Where visitors come from
- **Device Info**: Desktop vs mobile, browser types
- **Geographic Data**: Country and city of visitors

### Custom Events You Can See

#### Engagement Events
- **CV Download**: When someone downloads your CV
- **Easter Egg**: When someone clicks your profile photo
- **Dark Mode Toggle**: When someone switches themes

#### Navigation Events
- **Page Clicks**: Navigation between pages
- Track which pages are most popular

#### External Links
- **Calendar Booking**: Cal.com link clicks
- **Social Media Clicks**: Twitter and LinkedIn clicks

## Viewing Your Analytics

### Real-Time Reports
1. Go to Google Analytics
2. Click "**Reports**" → "**Realtime**"
3. See live visitors and their actions

### Engagement Reports
1. Navigate to "**Reports**" → "**Engagement**"
2. See "**Events**" to view:
   - CV downloads
   - Easter egg clicks
   - Dark mode toggles
   - Social media clicks

### Traffic Analysis
1. Go to "**Reports**" → "**Acquisition**"
2. See where your traffic comes from:
   - Direct traffic
   - Social media
   - Referral sites
   - Search engines

### User Behavior
1. Navigate to "**Reports**" → "**Engagement**" → "**Pages and screens**"
2. See which pages are most visited
3. View average time on page

## Privacy Considerations

### Adding a Privacy Policy
Since you're using Google Analytics, you should add a privacy policy:

1. State that you use Google Analytics
2. Mention cookies are used for analytics
3. Link to Google's privacy policy

Example text:
```
This website uses Google Analytics to understand how visitors interact
with the site. Google Analytics collects information anonymously and
reports website trends without identifying individual visitors.
```

### Cookie Consent (Optional)
For EU visitors (GDPR), you may want to add a cookie consent banner. Popular options:
- **Cookiebot** (free tier available)
- **OneTrust**
- Simple DIY banner

## Advanced: Setting Up Custom Dashboards

1. In Google Analytics, go to "**Explore**"
2. Create custom reports for:
   - Most downloaded content (CV downloads)
   - Most clicked social links
   - Dark mode vs light mode preference
   - Easter egg discovery rate

## Troubleshooting

### Not seeing data?
- Wait 24-48 hours after deployment
- Check Real-time reports for immediate activity
- Verify your Measurement ID is correct
- Make sure you're testing on the deployed site (not localhost)

### Testing locally?
- Analytics won't work on `localhost` by default
- Deploy to a staging environment to test
- Or temporarily allow localhost in GA4 settings

## Additional Resources

- [Google Analytics 4 Documentation](https://support.google.com/analytics/answer/9304153)
- [GA4 Event Tracking Guide](https://support.google.com/analytics/answer/9267735)
- [Understanding GA4 Reports](https://support.google.com/analytics/answer/9212670)

## Questions?

If you need help or want to track additional events:
1. Check the `src/analytics.js` file for available tracking functions
2. Add new tracking functions following the existing patterns
3. Call them from your components where needed

---

**Remember**: Analytics data typically takes 24-48 hours to fully populate. Be patient and check back!
