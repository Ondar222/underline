import PostCard from "@/components/Post/Card";
import { Layout } from "antd";
import { observer } from "mobx-react-lite";
import MainLayout from "@/layouts";

const News = observer(() => {
  return (
    <MainLayout>
      <div className="container__news">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </MainLayout>
  );
});

export default News;
