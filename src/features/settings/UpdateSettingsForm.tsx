import { Field, Form } from 'react-final-form';
import Spinner from '../../ui/Spinner.tsx';
import { useProfile } from '../profile/useProfile.ts';
import Button from '../../ui/Button.tsx';
import { useUpdateProfile } from './useUpdateProfile.ts';
import { IUpdateUserProfile } from '../../interfaces/user.ts';

const UpdateSettingsForm = () => {
  const { isLoading, profile } = useProfile();

  const { isUpdating, updateProfile } = useUpdateProfile();

  console.log('isUpdating', isUpdating);

  if (isLoading) return <Spinner />;

  const onSubmit = (values: IUpdateUserProfile) => {
    updateProfile({ id: profile?.id, values });
  };

  return (
    <>
      <Form<IUpdateUserProfile>
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="custom-form">
            <div className="form-control">
              <label htmlFor="profilePicture">Profile Picture URL</label>
              <Field<string>
                name="profilePicture"
                defaultValue={profile?.profilePicture}
                component="input"
                type="text"
              />
            </div>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field<string> name="name" defaultValue={profile?.name} component="input" type="text" />
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <Field<string> name="email" defaultValue={profile?.email} component="input" type="text" />
            </div>
            <div className="form-control">
              <label htmlFor="bio">bio</label>
              <Field<string> name="bio" defaultValue={profile?.bio} component="input" type="text" />
            </div>
            <Button type={'submit'}>Submit</Button>
          </form>
        )}
      />
    </>
  );
};

export default UpdateSettingsForm;
