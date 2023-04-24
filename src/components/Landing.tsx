import Image from "next/image";
import Link from "next/link";

export default function Landing(props: any) {
  return (
    <>
      <section className="overflow-hidden">
        <div className="flex flex-col md:flex-row lg:items-stretch lg:h-screen">
          <div className="flex items-center justify-center w-full lg:w-7/12">
            <div className="h-full px-4 pt-8 pb-4 sm:px-6 lg:px-24 2xl:px-32 lg:pt-40 lg:pb-14">
              <div className="flex flex-col justify-between flex-1 h-full">
                <div>
                  <h1 className="text-5xl font-bold text-black sm:text-6xl xl:text-7xl">
                    Travelogue: <br />
                    Your Personal Travel Journal
                  </h1>
                  <p className="mt-6 text-lg text-black sm:text-xl">
                    Document Your Journeys and Share Your Experiences with
                    Others on Our Social Platform. Connect with Travelers from
                    Around the Globe and Get Insider Tips on the Best Places to
                    Visit.
                  </p>
                  <Link
                    href="/signup"
                    title=""
                    className="btn-primary mt-8"
                    role="button"
                  >
                    {" "}
                    Sign Up Today{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center pb-4">
            <Image alt="map" src={"/landing.png"} height={450} width={450} />
          </div>
        </div>
        <div className="w-full px-12 mt-8 border-t-2 border-black lg:mt-auto sm:mt-14">
          <div className="pt-8 sm:flex sm:items-center sm:justify-between sm:pt-14">
            <p className="text-base font-semibold text-black">
              App coming soon on
            </p>

            <div className="flex items-center mt-5 space-x-5 sm:mt-0">
              <Image
                className="w-auto opacity-50 rounded-full h-14 sm:h-16"
                height={300}
                width={300}
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/app-store-button.png"
                alt=""
              />

              <Image
                className="w-auto opacity-50 rounded-full h-14 sm:h-16"
                height={300}
                width={300}
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/play-store-button.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
