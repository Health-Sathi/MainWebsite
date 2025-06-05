# HealthSathi Website

## License

Copyright © 2024 HealthSathi. All Rights Reserved.

This software and its documentation are proprietary and confidential. Unauthorized copying, distribution, modification, public display, or public performance of this software, via any medium, is strictly prohibited.

### Terms of Use
- This codebase is the exclusive property of HealthSathi
- No part of this software may be reproduced, distributed, or transmitted in any form or by any means
- No commercial use, modification, distribution, or reproduction is permitted without prior written consent
- Any unauthorized use of this software is strictly prohibited and may result in legal action

For licensing inquiries, please contact:
- Email: jaytirthjoshi@outlook.com
- Website: https://health-sathi.org

---

# HealthSathi Internal Documentation

## TODO List

### Accessibility
- [ ] Implement Userway Accessibility Widget
  - Account ID: `xLJwr0AOgV`
  - Add to layout.tsx or Footer.tsx
  - Use environment variable: `NEXT_PUBLIC_USERWAY_ACCOUNT_ID`

### Team Section Updates
- [ ] Add team member contribution guidelines
- [ ] Create team photo directory: `public/images/team/`
- [ ] Document image requirements:
  - Square aspect ratio (1:1)
  - 400x400 pixels
  - JPG/PNG format
  - Lowercase with hyphens naming

### Development Tasks
- [ ] Set up environment variables
- [ ] Document PR process
- [ ] Add code style guidelines
- [ ] Update deployment documentation

## Contributing to Team Section

To add yourself to the About Us/Our Team section:

1. Navigate to `src/app/about-us/page.tsx`
2. Find the `teamMembers` array
3. Add your information following this format:
```typescript
{
  name: 'Your Full Name',
  role: 'Your Role',
  bio: 'A brief bio (2-3 sentences) about your background and contribution to HealthSathi',
  imageUrl: '/images/team/your-photo.jpg', // Add your photo to the public/images/team directory
}
```

### Pull Request Process
1. Create a new branch: `git checkout -b feature/add-team-member`
2. Add your information to the team section
3. Add your photo to the public/images/team directory
4. Commit your changes
5. Create a PR with the following information:
   - Title: "Add [Your Name] to Team Section"
   - Description: Include your role and a brief summary of your contribution
   - Link to your photo (if applicable)

## Development Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file with the following variables:
```env
NEXT_PUBLIC_USERWAY_ACCOUNT_ID=xLJwr0AOgV
```

4. Run the development server:
```bash
npm run dev
```

## Code Style Guidelines

- Use TypeScript for all new code
- Follow the existing component structure
- Use Tailwind CSS for styling
- Keep components modular and reusable
- Add proper TypeScript types for all props and functions

## Important Notes

- Always use environment variables for sensitive information
- Keep the codebase clean and well-documented
- Follow the existing naming conventions
- Test your changes locally before creating a PR

