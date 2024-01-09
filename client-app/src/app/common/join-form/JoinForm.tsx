const JoinForm = () => {
  return (
    <form className="mt-6 flex flex-col" action="">
      <input
        type="text"
        id="username"
        className="outline-none rounded-md border-2 border-dark px-2 py-1 focus:border-alternate"
        placeholder="Kullanıcı Adı"
      />
      <input
        type="submit"
        value="Oyna"
        className="bg-primary mt-4 py-2 rounded-xl cursor-pointer hover:bg-secondary uppercase font-semibold"
      />
    </form>
  );
};

export default JoinForm;
