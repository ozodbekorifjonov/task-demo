import styled from 'styled-components';
import { useProfile } from '../profile/useProfile.ts';

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

const Avatar = styled.img`
  display: block;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

const Name = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 10rem;
`;

const UserAvatar = () => {
  const { profile } = useProfile();

  return (
    <StyledUserAvatar>
      <Avatar src={profile?.profilePicture || 'default-user.jpg'} alt={`Avatar of ${profile?.name}`} />
      <Name>{profile?.name}</Name>
    </StyledUserAvatar>
  );
};

export default UserAvatar;
