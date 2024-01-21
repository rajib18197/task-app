import logo from "../../assets/lws-logo-en.svg";

export default function Logo() {
  return (
    <a href="/">
      <img className="h-[45px]" src={logo} alt="Lws" />
    </a>
  );
}
