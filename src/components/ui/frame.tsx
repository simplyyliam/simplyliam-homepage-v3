import { PlusElement } from "./modals/GraphicElements";

function ElementFrame() {
  return (
    <div>
      <PlusElement className="absolute bottom-4 left-5" />
      <PlusElement className="absolute top-4 left-5" />
      <PlusElement className="absolute bottom-4 right-5" />
      <PlusElement className="absolute top-4 right-5" />
    </div>
  );
}

export default ElementFrame;
