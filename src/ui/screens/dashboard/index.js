import photo from "../../../assets/images/me.jpg";

export const DashboardScreen = () => {
  console.log("sdasd");
  return (
    <section className="flex bg-khan h-screen w-screen bg-center">
      <a
        href="https://www.linkedin.com/in/farkhanazmi/"
        className="flex mx-auto my-auto flex-col items-center md:flex-row"
      >
        <img
          alt="Ordinary Guy"
          src={photo}
          className="rounded-full w-36 h-36"
        />
        <div className="md:ml-3 text-center md:text-left">
          <p
            className="flex text-5xl md:text-6xl font-semibold  text-gray-300 flex-row items-center"
            data-aos="zoom-y-out"
          >
            Farkhan
            <span className="bg-clip-text text-transparent font-black bg-gradient-to-r from-red-600 to-yellow-600 ml-2">
              Azmi
            </span>
          </p>
          <p className="text-xl md:text-2xl font-thin text-gray-100 ">
            Ordinary Khan
          </p>
        </div>
      </a>
    </section>
  );
};
