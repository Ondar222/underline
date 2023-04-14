import { Image } from "antd";
import { useEffect, useState } from "react";

type TImageSize = {
  size: imageSize;
};

enum imageSize {
  large = "large",
  middle = "middle",
  small = "small",
}

interface ILastPost {
  title: string;
  image: string;
  date: string;
  size: "large" | "middle" | "small";
}

const LastPost = ({ title, image, date, size }: ILastPost) => {
  const [width, setWidth] = useState<number>(264);
  const [heigth, setHeigth] = useState<number>(264);
  const [classes, setClasses] = useState<string>("");

  useEffect(() => {
    switch (size) {
      case "small":
        setWidth(264);
        setHeigth(300);
        setClasses("block__small");
        break;
      case "middle":
        setWidth(512);
        setHeigth(512);
        setClasses("block__middle");
        break;
      case "large":
        setWidth(776);
        setHeigth(776);
        setClasses("block__large");
        break;
    }
  }, []);
  return (
    <div className="calculate__image">
      <Image src={image} height={230}/>
      <div className={classes}>
        <h1 className="heading__block__calc">{title}</h1>
        <p className="paragraph__block__calc">{date}</p>
      </div>
      <div className="block__small__fade"></div>
    </div>
  );
};

export default LastPost;
