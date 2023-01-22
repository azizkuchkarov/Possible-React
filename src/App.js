const User = ({ firstName, lastName, link }) => {
  return (
    <div>
      <h1>
        Mening ismim - {firstName}, Sharifim {lastName()}
      </h1>
      <a href={link}>Link</a>
    </div>
  );
};
const App = () => {
  return (
    <div>
      <User
        firstName="Aziz"
        lastName={() => "Kuchkarov"}
        link="www.google.com"
      />
      <User firstName="Laziz" lastName={() => "Boqiev"} link="youtube.com" />
    </div>
  );
};

export default App;
