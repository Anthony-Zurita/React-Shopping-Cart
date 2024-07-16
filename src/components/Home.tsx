import TypingAnimation from "./TypingAnimation";

const Home = () => {
  return (
    <div 
      style={{
        backgroundImage: `url('/images/camping-background3.jpg')`,
        backgroundSize: "cover", // Cover the entire div
        backgroundPosition: "center", // Center the background image
        width: "100vw",
        height: "100vh",
      }}
    >
      <h1 className="page-heading">Welcome to <span style={{ color: 'yellow' }}>The Camp Store</span></h1>
      <p className="description-text">
        The Camp Store has all yuor needs covered! We have tents, sleeping bags,
        flashlights and lanterns, and camping cookware. Everything you need for
        your next camping trip! We provide the best quality products at the best
        prices. Shop now!
      </p>
      <TypingAnimation />
    </div>
  );
};

export default Home;
