interface ILastPost {
  title: string;
  image: string;
  date: string;
}

const LastPost = ({ title, image, date }: ILastPost) => {
  return (
    <div className="second__column">
      <div className="calculate__image">
        <img src={image} alt="" />
        <div className="footer__calc__block">
          <h1 className="heading__block__calc">{title}</h1>
          <p className="paragraph__block__calc">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default LastPost;
