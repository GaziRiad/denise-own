import Button from "./Button";

function SignupSection() {
  return (
    <section className="bg-brownLight py-32">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <h1 className="px-5 font-display text-xl text-brown lg:px-0 lg:text-3xl">
          Meld je aan voor de app
        </h1>
        <p className="mb-6 px-5 text-sm font-thin lg:px-0 lg:text-base">
          Ik ben zo blij dat ik een perfecte manier heb gevonden om samen met
          jullie gezond te eten, te werken aan een goede mindset en om
          natuurlijk samen te sporten! Meld je aan bij de app en we gaan samen
          werken aan <span className="font-medium">jouw beste versie!</span>
        </p>
        <Button color="dark">Aanmelden</Button>
      </div>
    </section>
  );
}

export default SignupSection;
