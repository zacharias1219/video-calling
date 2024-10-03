import MeetingTypeList from '@/components/MeetingTypeList';
import Type from '@/components/Type';

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="bg-dark-4 text-black rounded-xl p-8 mb-8">
        <div className="flex flex-row  bg-white rounded-2xl font-nunito p-3 justify-between items-center mb-8">
          <h1 className="text-2xl font-bold mb-4 md:mb-0">Welcome to MySivi</h1>
          <button className="bg-white text-blue-900 text-xl rounded-full px-4 py-2">
            Select Mode
          </button>
        </div>
        <div className="flex items-center justify-center pt-7 pb-7 flex-row lg:space-x-20 gap-40 font-nunito space-x-40 md:space-y-0 md:space-x-4">
          <Type  heading="Talk with a Person" description="AI Bot As Moderator" link="/channel" img="/rectangle-1@2x.png"/>
          <Type heading="Talk with AI Bot" description="AI bot will roleplay and talk with you." link="" img="/Robot-Emoji.png"/>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;