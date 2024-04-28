export function Research() {
  return (
    <>
      <div className="max-w-3xl flex sm:flex-row flex-col items-center justify-between p-4">
        <img
          src="/TIPSpen.png"
          alt="headshot"
          className="border-solid border-2 rounded-lg border-neutral-200 md:w-64 md:h-48 w-48 h-32 min-w-48 min-h-32 overflow-hidden object-cover"
        />
        <div>
          <p className="text-base sm:text-xl mt-4 mb-2 sm:ml-4 ml-0 text-neutral-200 flex-grow max-w-sm">
            TIPSLite
          </p>
          <p className="text-base text-sm text-neutral-400 mt-4 mb-2 sm:ml-4 ml-0 flex-grow max-w-sm">
            with Dr. Jörg Peters, under the CISE Department @ the University of
            Florida
          </p>
          <p className="text-base text-sm text-neutral-400 mt-4 sm:ml-4 ml-0 flex-grow max-w-sm">
            December 2023 — Present
          </p>
        </div>
      </div>

      <p className="text-sm text-neutral-400 text-left mx-4 my-4">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TIPSLite is a
        lightweight, portable addition to TIPS (Toolkit for Illustrations of
        Procedures in Surgery). The goal is to provide a cheap alternative to
        surgery simulation. The server is written in C++ and the iOS client is
        written in Swift. I am responsible connecting the two, so I have been
        working with BLE (Bluetooth Low Energy). We also hope to connect this
        project to another, allowing a full pipeline from MRI scan to point
        cloud to 3D model to surgery simulation.{"\n"}
      </p>
    </>
  );
}

export default Research;
