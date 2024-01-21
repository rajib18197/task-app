import heroImage from "../../assets/frame.png";

export default function ImageBox() {
  return (
    <div className="flex justify-center md:order-2">
      <img
        className="max-md:w-full"
        src={heroImage}
        width="326"
        height="290"
        alt="frame"
      />
    </div>
  );
}
