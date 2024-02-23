import { useProfile } from './useProfile.ts';
import Table from '../../ui/Table.tsx';
import Spinner from '../../ui/Spinner.tsx';
import Empty from '../../ui/Empty.tsx';
import ProfileRow from './ProfileRow.tsx';

const UserProfile = () => {
  const { isLoading, profile } = useProfile();

  if (isLoading) return <Spinner />;
  if (!profile) return <Empty resourceName="user" />;

  return (
    <>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div>Picture</div>
          <div>Name</div>
          <div>Email</div>
          <div>BIO</div>
        </Table.Header>

        <Table.Body data={[profile]} render={(user) => <ProfileRow user={user} key={user.id} />} />
      </Table>
    </>
  );
};

export default UserProfile;
