# How to Add Your Profile Image

## Option 1: Place image in public folder (Recommended)

1. Create a folder called `images` in the `public` directory:
   ```
   personal/public/images/
   ```

2. Copy your profile image to this folder and name it `profile.jpg` (or update the path in HeroSection.tsx)

3. Supported formats: .jpg, .jpeg, .png, .gif, .webp

## Option 2: Update the image path

If you want to use a different path or filename, edit the `profileImage` variable in:
```
src/components/HeroSection.tsx
```

Change this line:
```typescript
const profileImage = '/images/profile.jpg';
```

To match your image path, for example:
```typescript
const profileImage = '/assets/my-photo.png';
```

## Option 3: Use an absolute path

You can also use an absolute path to an image on your computer:
```typescript
const profileImage = 'file:///C:/Users/YourName/Pictures/profile.jpg';
```

## Recommended Image Specifications

- **Size**: 400x400 pixels or larger (square aspect ratio works best)
- **Format**: JPG or PNG
- **File size**: Under 1MB for faster loading
- **Background**: Transparent or solid color works well with the design 