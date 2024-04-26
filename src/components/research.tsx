import Spacer from "@/components/spacer";

export function Research() {
  return (
    <>
      <div className="max-w-3xl flex items-center justify-between p-4">
        <img
          src="/TIPSpen.png"
          alt="headshot"
          className="border-solid border-2 rounded-lg border-neutral-200 w-64 h-48 min-w-48 min-h-48 overflow-hidden object-cover"
        />
        <div>
          <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200 flex-grow max-w-sm">
            TIPSLite
          </p>
          <p className="text-base text-sm text-neutral-400 mt-4 mb-2 flex-grow max-w-sm">
            with Dr. Jörg Peters, CISE @ University of Florida
          </p>
          <p className="text-base text-sm text-neutral-400 mt-4 mb-2 flex-grow max-w-sm">
            December 2023 — Present
          </p>
        </div>
      </div>

      <Spacer size={20} />

      <p className="text-sm text-neutral-400 text-left">
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
