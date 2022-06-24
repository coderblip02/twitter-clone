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
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      text: "Technology is life",
      timestamp: "2 hours ago"
    },
    {
      id: "2",
      name: "Sahand Ghavidel ",
      username: "codewithsahand",
      userImg: "https://www.adscientificindex.com/pictures/0b/50734.jpg",
      img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      text: "Autonomy is the future",
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
