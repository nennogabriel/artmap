import dynamic from 'next/dynamic';

export default function Home() {
  const Map = dynamic(
    () => import('../components/map'), // replace '@components/map' with your component's location
    {
      loading: () => <p>A map is loading</p>,
      ssr: false, // This line is important. It's what prevents server-side render
    }
  );
  return (
    <div className="flex justify-center items-center h-screen p-8">
      <div className="border-8 border-black w-full h-full p-2">
        <div className="border-8 border-black w-full h-full p-8">
          <div className="w-full h-full overflow-hidden relative">
            <Map
              apiKey="pk.eyJ1IjoibmVubm9nYWJyaWVsIiwiYSI6ImNrZzZ0MzFmczAwbXIycm81ZDQyYzJvbTYifQ.hcHlx_YQxYmmYLV3rjNWnA"
              className="absolute inset-0 z-0 "
            />
            <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col text-center">
              <div className="bg-gradient-to-t from-white to-transparent text-3xl p-4">
                top message
              </div>
              <div className="bg-white flex-auto text-green text-6xl p-4 text-red-800">
                mid message
              </div>
              <div className="bg-white text-2xl p-4">bottom message</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 left-0 z-20 flex flex-col bg-blue-200"></div>
    </div>
  );
}
