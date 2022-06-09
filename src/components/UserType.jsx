const UserType = ({ type }) => {
  const TYPE_STYLE = {
    user: ['Usuario', 'bg-lime-500'],
    moderador: ['Moderador', 'bg-blue-500'],
    other: ['Otro', 'bg-slate-500'],
  };

  const [typeName, typeStyle] = TYPE_STYLE[type] || TYPE_STYLE.other;

  return (
    <div
      className={`w-1/5 flex justify-center items-center rounded-lg ${typeStyle}`}
    >
      {typeName}
    </div>
  );
};

export default UserType;
