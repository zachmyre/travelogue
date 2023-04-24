export default function Features(props: any) {
  return (
    <>
      <section className="pb-8 sm:pt-4 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Stay Inspired on Your Journeys
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Travelogue makes it easy to document your adventures with features
              like photo and video uploads, travel mapping, and the ability to
              share your experiences with others.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-3 lg:mt-20 lg:gap-x-12">
            <div className="rounded-md transition-all duration-200 bg-white hover:shadow-xl">
              <div className="py-10 px-9">
                <svg
                  className="w-16 h-16 text-secondary"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <h3 className="mt-8 text-lg font-semibold text-primary">
                  Personalized Travel Diary
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Keep a detailed record of your adventures with notes, maps,
                  and even mood tracking, all in one easy-to-use app that you
                  can access from anywhere.
                </p>
              </div>
            </div>

            <div className="rounded-md transition-all duration-200 bg-white hover:shadow-xl">
              <div className="py-10 px-9">
                <svg
                  className="w-16 h-16 text-secondary"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
                <h3 className="mt-8 text-lg font-semibold text-primary">
                  Discover New Destinations
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Browse other travelers&apos; public diaries and get personal
                  insights and recommendations for new places to visit, or use
                  the app&apos;s mapping features to plan your own itinerary.
                </p>
              </div>
            </div>

            <div className="rounded-md transition-all duration-200 bg-white hover:shadow-xl">
              <div className="py-10 px-9">
                <svg
                  className="w-16 h-16 text-secondary"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <h3 className="mt-8 text-lg font-semibold text-primary">
                  Social Sharing
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Connect with other travelers and share your experiences on the
                  app&apos;s social platform, where you can view others journeys
                  or keep your travels private.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
