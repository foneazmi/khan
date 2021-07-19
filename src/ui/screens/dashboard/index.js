import photo from "../../../assets/images/me.jpg";

export const DashboardScreen = () => {
  return (
    <section className="flex bg-khan h-screen w-screen bg-center bg-cover">
      <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125 flex mx-auto my-auto flex-col items-center bg-gradient-to-r from-blue-500 to-green-400 hover:from-purple-500 hover:to-red-500  md:flex-row py-8 md:py-0 rounded-lg overflow-hidden">
        <img
          alt="Ordinary Guy"
          src={photo}
          className=" rounded-full md:rounded-none w-36 h-36 md:w-56 md:h-56"
        />
        <div className="text-center md:text-left mx-3">
          <p className="flex text-4xl md:text-6xl font-black text-white flex-row items-center">
            Farkhan Azmi
          </p>
          <p className="text-xl md:text-3xl font-thin text-white">
            Ordinary Khan
          </p>
        </div>
      </div>
    </section>
  );
};
