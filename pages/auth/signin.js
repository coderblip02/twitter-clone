import { getProviders, signIn } from "next-auth/react";

function signin({ providers }) {
  return (
    <div className="flex justify-center mt-20 space-x-4">
      <img
        src="https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/en/twitter-tips/desktop-assets/ch-02/ch-2-7-app-store.png.twimg.1920.png"
        className="hidden object-cover md:w-44 md:h-80 rotate-6 md:inline-flex"
      />
      <div className="">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className=" flex flex-col items-center">
            <img
              className="w-36 object-cover"
              src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
              alt="twitter-logo"
            />
            <p className="text-center text-sm italic my-10">
              Twitter Clone Created for fun
            </p>
            <button
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              className="bg-blue-400 text-white rounded-lg p-3 hover:bg-blue-500"
            >
              Sign In with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}

export default signin;
