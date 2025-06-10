import { HomeWrapper } from "../components/ui/modals/HomeWrapper";
import Time from "../components/ui/Time";

function Home() {
  return (
    <HomeWrapper>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl">Hey, and Welcome To My World</h1>
        <h1 className="text-2xl font-light">Where Dreams Are Forged</h1>
      </div>

      {/* Time, Sprite, and Widget module */}
      <div className="flex w-full px-8 justify-between absolute bottom-5">
        <Time/>
      </div>
    </HomeWrapper>
  );
}

export default Home;
