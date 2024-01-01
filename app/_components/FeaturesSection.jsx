import { Gamepad, BookOpen, Star, Award } from 'lucide-react';

const FeatureCard = ({ Icon, title, description }) => (
  <div className="text-center p-4 md:w-1/4">
    <Icon className="mx-auto h-12 w-12 text-blue-500" />
    <h3 className="text-lg font-semibold my-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const FeaturesSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Platform Features</h2>
          <p className="text-xl">Explore what makes us special</p>
        </div>
        <div className="flex flex-wrap -mx-4">
          <FeatureCard
            Icon={Gamepad}
            title="Extensive Game Guides"
            description="Dive into detailed guides and master your favorite games."
          />
          <FeatureCard
            Icon={BookOpen}
            title="Community Reviews"
            description="Read and write reviews to share your gaming experience."
          />
          <FeatureCard
            Icon={Star}
            title="Earn Rewards"
            description="Complete challenges and earn points for exclusive rewards."
          />
          <FeatureCard
            Icon={Award}
            title="Leaderboards"
            description="Climb up the ranks and make a name for yourself among gamers."
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;