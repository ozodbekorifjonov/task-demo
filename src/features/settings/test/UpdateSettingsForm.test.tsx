import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import UpdateSettingsForm from '../UpdateSettingsForm.tsx';
import { useUpdateProfile } from '../useUpdateProfile.ts';
import { useProfile } from '../../profile/useProfile.ts';

jest.mock('../../profile/useProfile');
jest.mock('../useUpdateProfile');

describe('UpdateSettingsForm', () => {
  beforeEach(() => {
    (useProfile as jest.Mock).mockReturnValue({
      isLoading: false,
      profile: {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        bio: 'Software engineer',
        profilePicture:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO78Djeugly7SsTHwoNk4cUJtTAvo3rHTG5w&usqp=CAU',
      },
    });

    (useUpdateProfile as jest.Mock).mockReturnValue({
      updateProfile: jest.fn(),
      isUpdating: false,
    });
  });

  test('renders form with profile data', () => {
    render(<UpdateSettingsForm />);

    // Check if form fields are rendered with profile data
    expect(screen.getByLabelText('Profile Picture URL')).toHaveValue(
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO78Djeugly7SsTHwoNk4cUJtTAvo3rHTG5w&usqp=CAU',
    );
    expect(screen.getByLabelText('Name')).toHaveValue('John Doe');
    expect(screen.getByLabelText('Email')).toHaveValue('john@example.com');
    expect(screen.getByLabelText('Bio')).toHaveValue('Software engineer');

    // Check if submit button is rendered
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  test('submits form data on submit button click', async () => {
    const updateProfileMock = jest.fn();
    (useUpdateProfile as jest.Mock).mockReturnValueOnce({
      updateProfile: updateProfileMock,
      isUpdating: false,
    });

    render(<UpdateSettingsForm />);

    // Simulate user input
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'New Name' } });

    // Submit form
    fireEvent.click(screen.getByText('Submit'));

    // Check if the form is submitted with the correct data
    await waitFor(() => {
      expect(updateProfileMock).toHaveBeenCalledWith({
        id: 1,
        values: {
          name: 'New Name',
          email: 'john@example.com',
          bio: 'Software engineer',
          profilePicture:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO78Djeugly7SsTHwoNk4cUJtTAvo3rHTG5w&usqp=CAU',
        },
      });
    });
  });
});
