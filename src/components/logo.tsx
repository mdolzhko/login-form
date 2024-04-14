import logoVite from "/vite.svg";
import logoReact from "../assets/react.svg";
import logoTailwind from "../assets/tailwind.svg";

const logos = [
  { _id: "_vite", img: logoVite },
  { _id: "_react", img: logoReact },
  { _id: "_tailwind", img: logoTailwind },
];

export default function Logos() {
  return (
    <div className="flex justify-center gap-4">
      {logos.map((item) => (
        <img key={item._id} src={item.img} className="h-8" alt={`logo ${item._id}`} />
      ))}
    </div>
  );
}
