import { Card, Image, Typography } from "antd";

const PostCard = () => {
  return (
    <div className="post__card">
      <Card className="container__block">
        <div className="post__card__img">
          <Image  src="/favicon.ico"/>
        </div>
        <Typography.Title className="heading__card" level={4}>
              В Туве бесплатным углем обеспечат более 3200 семей          
        </Typography.Title>

        <Typography.Text className="date__card" type="secondary">5 марта 2023, 17:17</Typography.Text>
      </Card>
    </div>
  );
};

export default PostCard;
