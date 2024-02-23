import { render, screen } from '@testing-library/react';
import UserAvatar from '../UserAvatar.tsx';
import { useProfile } from '../useProfile.ts';

// Mock the useProfile hook
jest.mock('../useProfile.ts');

describe('UserAvatar', () => {
  it('renders user avatar and name', () => {
    // Mock profile data
    const profile = {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      bio: 'Software engineer',
      profilePicture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO78Djeugly7SsTHwoNk4cUJtTAvo3rHTG5w&usqp=CAU',
    };
    // Mock the useProfile hook to return the mock profile
    (useProfile as jest.Mock).mockReturnValue({ profile });

    render(<UserAvatar />);

    // Expect the avatar image to be rendered with the correct source and alt text
    const avatarImage = screen.getByAltText(`Avatar of ${profile.name}`) as HTMLImageElement;
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage.src).toBe(profile.profilePicture);

    // Expect the name to be rendered
    const nameElement = screen.getByText(profile.name);
    expect(nameElement).toBeInTheDocument();
  });

  it('renders default user avatar if profile picture is not provided', () => {
    // Mock profile data without profile picture
    const profile = {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      bio: 'Software engineer',
    };
    // Mock the useProfile hook to return the mock profile
    (useProfile as jest.Mock).mockReturnValue({ profile });

    render(<UserAvatar />);

    // Expect the default user avatar to be rendered
    const defaultAvatar = screen.getByAltText('Avatar of John Doe') as HTMLImageElement;
    expect(defaultAvatar).toBeInTheDocument();
    expect(defaultAvatar.src).toContain('default-user.jpg');
  });
});
