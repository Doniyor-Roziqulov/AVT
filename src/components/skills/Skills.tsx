const Skills = () => {
  return (
    <section className="bg-[#DFE3E8] pt-24 lg:pt-[150px] relative pb-10 lg:pb-[80px] overflow-x-hidden">
      <div className="mx-auto container">
        <div>
          <p className="text-[80px] text-skills text-slate-600 animate-pulse pointer-events-none font-semibold absolute top-0 lg:left-[300px] xl:left-[350px]">
            Fakultet ma’muriyati:
          </p>
        </div>
        <div className="flex flex-col gap-y-6">
          <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-x-3 mt-10">
            <img
              className="w-full h-[300px] lg:h-[350px] min-[580px]:h-[350px] xl:h-[400px] object-contain shadow-2xl"
              src="https://static.tuit.uz/uploads/1/FjqjRMgOtPG39zg3SdZxjutHpiwYbQUC.png"
              alt="developer photo"
            />
            <div className="flex items-center justify-center">
              <div>
                <p className="text-lg">
                  Televizion texnologiyalar fakulteti dekani
                </p>
                <h2
                  data-aos="zoom-out-up"
                  className="text-center text-4xl min-[540px]:text-7xl xl:text-6xl lg:text-4xl text-slate-700 mb-3 pointer-events-none"
                >
                  Nazirova Elmira Shodmonovna
                </h2>
                <p data-aos="zoom-out-up">
                  <strong>Qabul vaqti:</strong> chorshanba-payshanba 16:00-18:00
                </p>
                <p data-aos="zoom-out-up">
                  <strong>Telefon:</strong>{" "}
                  <a href="tel:+998712386528">(+99871) 238-65-28</a>
                </p>
                <p data-aos="zoom-out-up">
                  <strong> E-mail:</strong>
                  <a href="mailto:e.nazirova@tuit.uz">e.nazirova@tuit.uz</a>
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-x-3">
            <div className="flex items-center justify-center">
              <div className="pl-4">
                <p className="text-lg">
                  Yoshlar masalalari bo‘yicha dekan muovini
                </p>
                <h2
                  data-aos="zoom-out-up"
                  className="text-center text-5xl min-[540px]:text-7xl xl:text-6xl lg:text-6xl text-slate-700 mb-3"
                >
                  Mo‘minov Sanjar Sailqulovich
                </h2>
                <p data-aos="zoom-out-up">
                  <strong>Qabul vaqti:</strong> Har kuni 15:00-18:00
                </p>
                <p data-aos="zoom-out-up">
                  <strong>Telefon:</strong>{" "}
                  <a href="tel:+998712386575">(+99871) 238-65-75</a>
                </p>
                <p data-aos="zoom-out-up">
                  <strong> E-mail:</strong>
                  <a href="mailto:s.muminov@tuit.uz">s.muminov@tuit.uz</a>
                </p>
              </div>
            </div>
            <img
              className="w-full h-[300px] lg:h-[350px] min-[580px]:h-[350px] xl:h-[400px] object-contain shadow-2xl"
              src="https://static.tuit.uz/uploads/1/O6fylzqhiDdN4pqQgm_70NcxzvlAjQHM.png"
              alt="developer photo"
            />
          </div>
          <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-x-3">
            <img
              className="w-full h-[300px] lg:h-[350px] min-[580px]:h-[350px] xl:h-[400px] object-contain shadow-2xl"
              src="https://static.tuit.uz/uploads/1/A5Mjp2dHa2iYrE4GpBLblN0vdC2aKgHM.png"
              alt="developer photo"
            />
            <div className="flex items-center justify-center">
              <div>
                <p className="text-lg">AVT kafedra mudiri:</p>
                <h2
                  data-aos="zoom-out-up"
                  className="text-center text-4xl min-[540px]:text-7xl xl:text-6xl lg:text-4xl text-slate-700 mb-3 pointer-events-none"
                >
                  Beknazarova Saida Safibullayevna
                </h2>
                <p data-aos="zoom-out-up">
                  <strong>Qabul vaqti:</strong> Dushanba – Shanba (15.00-17.00
                  gacha)
                </p>
                <p data-aos="zoom-out-up">
                  <strong>Telefon:</strong>{" "}
                  <a href="tel:+03712386561">(0 371) 238-65-61</a>
                </p>
                <p data-aos="zoom-out-up">
                  <strong> E-mail:</strong>{" "}
                  <a href="mailto:beknazarova@tuit.uz">beknazarova@tuit.uz</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
