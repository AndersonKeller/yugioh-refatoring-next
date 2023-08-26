import { AiFillStar } from "react-icons/ai";
interface StarsProps {
  levels: number;
}
export function Stars({ levels }: StarsProps) {
  let levelsArray = [];
  for (let i = 0; i < levels; i++) {
    levelsArray.push(i);
  }
  return levelsArray.map((item, index) => {
    return <AiFillStar key={index} />;
  });
}
