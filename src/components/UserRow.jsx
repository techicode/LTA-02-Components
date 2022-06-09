import UserStatus from './UserStatus';
import UserType from './UserType';

const UserRow = ({ name, status, type }) => (
  <div class='flex justify-between border-2 border-blue-600 rounded-xl p-5 mx-5 my-2 max-w-xl'>
    <div className='w-1/2'>{name}</div>
    <UserStatus status={status} />
    <UserType type={type} />
  </div>
);

export default UserRow;
