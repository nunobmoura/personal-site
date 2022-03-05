import React from "react"
import PostHeader from "./postHeader"
import Post from "./post"
import Footer from "../../components/footer"

const PostTemplate = () => {
  return (
    <div>
      <PostHeader />
      <Post />
      <Footer />
    </div>
  )
}

export default PostTemplate
