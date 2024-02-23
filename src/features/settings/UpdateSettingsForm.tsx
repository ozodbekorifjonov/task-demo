import { Field, Form } from 'react-final-form';
import Spinner from '../../ui/Spinner.tsx';
import { useProfile } from '../profile/useProfile.ts';
import Button from '../../ui/Button.tsx';
import { useUpdateProfile } from './useUpdateProfile.ts';
import { IUpdateUserProfile } from '../../interfaces/user.ts';
import { toast } from 'react-hot-toast';

const UpdateSettingsForm = () => {
  const { isLoading, profile } = useProfile();

  const { updateProfile, isUpdating } = useUpdateProfile();

  if (isLoading) return <Spinner />;

  const onSubmit = (values: IUpdateUserProfile) => {
    if (!values) return;

    if (profile?.id) {
      updateProfile({ id: profile.id, values });
    } else {
      toast.error('Profile id is undefined');
    }
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
                id="profilePicture"
                name="profilePicture"
                defaultValue={profile?.profilePicture}
                component="input"
                type="text"
              />
            </div>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field<string> id="name" name="name" defaultValue={profile?.name} component="input" type="text" />
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <Field<string> id="email" name="email" defaultValue={profile?.email} component="input" type="text" />
            </div>
            <div className="form-control">
              <label htmlFor="bio">Bio</label>
              <Field<string> id="bio" name="bio" defaultValue={profile?.bio} component="input" type="text" />
            </div>
            <Button type={'submit'} disabled={isUpdating}>
              Submit
            </Button>
          </form>
        )}
      />
    </>
  );
};

export default UpdateSettingsForm;
