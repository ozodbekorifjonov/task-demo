import UserProfile from '../features/profile/UserProfile.tsx';
import Heading from '../ui/Heading.tsx';
import Row from '../ui/Row.tsx';

const Profile = () => {
  return (
    <Row>
      <Heading as="h3">User profile</Heading>
      <UserProfile />
    </Row>
  );
};

export default Profile;
