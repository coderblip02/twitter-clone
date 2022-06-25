import { SparklesIcon } from "@heroicons/react/outline";
import React from "react";
import Input from "./Input";
import Post from "./Post";

function Feed() {
  const posts = [
    {
      id: "1",
      name: "Sahand Ghavidel ",
      username: "codewithsahand",
      userImg: "https://www.adscientificindex.com/pictures/0b/50734.jpg",
      img: "https://firebasestorage.googleapis.com/v0/b/twitter-v4.appspot.com/o/posts%2F0SaLxsL3eBeztp6n49kb%2Fimage?alt=media&token=717e5fe4-6de2-4d83-b8e5-9407d3afb933",
      text: "Ragnar Lothbrok",
      timestamp: "2 hours ago"
    },
    {
      id: "2",
      name: "Sahand Ghavidel ",
      username: "codewithsahand",
      userImg: "https://www.adscientificindex.com/pictures/0b/50734.jpg",
      img: "https://images8.alphacoders.com/874/thumbbig-874369.webp",
      text: "Lucifer Morningstar",
      timestamp: "2 days ago"
    },
  ];
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9 ">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      {posts.map((post)=>(
        <Post key={post.id} post={post}/>
      ))}
    </div>
  );
}

export default Feed;
