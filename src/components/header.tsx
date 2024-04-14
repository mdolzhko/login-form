import Logo from "./logo";

export default function Header() {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <Logo />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
        Sign in to your account
      </h2>
    </div>
  );
}
