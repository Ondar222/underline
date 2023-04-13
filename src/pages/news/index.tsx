import PostCard from "@/components/Post/Card";
import MainLayout from "@/layouts";
import { observer } from "mobx-react-lite";

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
