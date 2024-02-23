import { IUser } from '../../interfaces/user.ts';
import styled from 'styled-components';
import Table from '../../ui/Table.tsx';

const Img = styled.img`
  display: block;
  width: 4rem;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  margin-left: 10px;
  transform: scale(1.5) translateX(-7px);

  @media (max-width: 480px) {
    width: 2.4rem;
  }
`;

const TableData = styled.div`
  font-size: 1.2rem;
  text-align: center;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`;

const Bio = styled.div`
  font-size: 1.2rem;
  color: var(--color-grey-600);
  text-align: center;
  font-family: 'Sono';
`;

const ProfileRow = ({ user }: { user: IUser }) => {
  const { profilePicture, name, email, bio } = user;

  return (
    <Table.Row>
      <Img src={profilePicture} alt={profilePicture} />
      <TableData>{name}</TableData>
      <TableData>{email}</TableData>
      <Bio>{bio}</Bio>
    </Table.Row>
  );
};

export default ProfileRow;
