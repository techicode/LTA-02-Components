const UserStatus = ({ status }) => {
  const activeClassName = status ? 'text-green-600' : 'text-red-600';
  return (
    <div className={`'w-1/5' ${activeClassName}`}>
      {status ? 'Activo' : 'Inactivo'}
    </div>
  );
};

export default UserStatus;
