import photo from "../../../assets/images/photo.png";
export const DashboardScreen = () => {
  return (
    <section className="relative bg-khan h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <section className="hero container max-w-screen-lg mx-auto pb-4">
              <img
                alt=""
                src={photo}
                width="150"
                height="150"
                className="mx-auto"
              />
            </section>
            <a
              href="https://www.youtube.com/watch?v=5XD_f-OaX-o&ab_channel=DevNobody"
              className="text-5xl md:text-6xl font-semibold  leading-tighter tracking-tighter mb-4 text-gray-300"
              data-aos="zoom-y-out"
            >
              Farkhan{" "}
              <span className="bg-clip-text text-transparent font-extrabold bg-gradient-to-r from-red-500 to-yellow-500">
                Azmi
              </span>
            </a>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl font-thin text-gray-100"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Ordinary Khan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
