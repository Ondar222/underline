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

  useEffect(() => {
    switch (size) {
      case "small":
        setWidth(264);
        setHeigth(264);
        break;
      case "middle":
        setWidth(512);
        setHeigth(512);
        break;
      case "large":
        setWidth(776);
        setHeigth(776);
        break;
    }
  }, []);
  return (
    <div className="second__column">
      <div className="calculate__image">
        <Image src={image}/>
        <div className="footer__calc__block">
          <h1 className="heading__block__calc">{title}</h1>
          <p className="paragraph__block__calc">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default LastPost;
