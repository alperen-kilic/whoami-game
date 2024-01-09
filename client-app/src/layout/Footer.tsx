const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full h-10">
      <nav className="flex justify-center text-white">
        <a href="/" className="hover:font-semibold">
          Kullanım Şartları
        </a>
        <a
          href="/"
          className="before:content-['|'] before:mx-2 hover:font-semibold before:hover:font-normal"
        >
          Gizlilik
        </a>
        <a
          href="/"
          className="before:content-['|'] before:mx-2 hover:font-semibold before:hover:font-normal"
        >
          İletişim
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
