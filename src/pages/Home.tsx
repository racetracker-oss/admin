import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const Home = () => {
  const user = useAppSelector((state) => state.auth.user);
  const isLoggedIn = useAppSelector((state) => state.auth.isAuthenticated);

  const greetings: string[] = [
    "Greetings, Brave Traveler! Before you enter the Hall of Secrets, I must be sure you are who you say you are. So, present your magical key, or the goblins will have you for lunch!",
    "Whoa! I see a daring adventurer standing at the entrance to the Secret Cave. But alas, only those who reveal their true selves may enter. Are you really the wise one you claim to be, or is the dragon's breath playing tricks on me? Show your magic spells, or wait for the next unsuspecting traveler!",
    "Hear ye, hear ye, dear Friend! If you wish to enter the Elves' Hideout, you must first prove that you are here to serve the common good, not just a wandering dreamer you are. Reveal all secrets about yourself, or the gate shall never open for you!",
    "Well, well, who do we have here? Another valiant soul wishing to enter the Forbidden Forest. There's only one way to pass — show that you are indeed who you claim to be and present your precious relics. Don't worry, the fauns don't bite... much.",
    "Look who's here, another adventurer seeking the secrets of the Enchanted Fortress. But remember, only those can enter who prove themselves. Do you have the entry permission and the right to stay? If not, you might just be another adventure novel here, at the gate!"
  ]

  return (
    <section className="m-10 mt-28 md:m-20">
      {isLoggedIn && user ? (
        <>
          <h2 className="mt-24 text-center text-2xl font-semibold hover:drop-shadow-4xl transition-all duration-700">
            Now I trust you, my wise friend. Let me {" "}
            <Link to="dashboard" className="[text-shadow:_0_4px_18px_#96f3ff] text-[#9ad8ff] text-2xl font-black hover:font-normal transition-all duration-700">
              lead
            </Link> you to the secret hideout.
          </h2>
        </>
      ) : (
        <>
          <h2 className="my-24 text-2xl hover:drop-shadow-4xl transition-all duration-700">{'"'}
            {greetings[Math.floor(Math.random() * (0 - greetings.length) + greetings.length)]}{'"'}
          </h2>
          <h4 className="cursor-pointer font-semibold italic text-xl block md:text-center p-2">I hope I can gain your trust by revealing my best-kept <Link to="login" className="text-xl font-black hover:drop-shadow-4xl transition-all duration-700 opacity-65 hover:opacity-90">secrets.</Link></h4>
        </>
      )}
    </section>
  );
};

export default Home;