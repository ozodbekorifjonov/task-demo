import Heading from '../ui/Heading';
import UpdateSettingsForm from '../features/settings/UpdateSettingsForm.tsx';
import Row from '../ui/Row.tsx';

const Settings = () => {
  return (
    <Row>
      <Heading as="h3">Update user info</Heading>
      <UpdateSettingsForm />
    </Row>
  );
};

export default Settings;
