// import React from 'react'
// import { Button, Card, CardBody,CardText } from 'reactstrap'

// function Post({post={title:"This is default post title",content:"This is default post content"}}) {
//   // ={title:"This is default post title",content:"This is default post content"}
//   return (
//     <Card className='border-0 shadow-sm mt-3'>
//         <CardBody>
//             <h1>{post.title}</h1>
//         <CardText>
//             <p>{post.content}</p>
//         </CardText>
//         <div className="">
//           <Button>
//             Read More
//           </Button>
//         </div>
//         </CardBody>
//     </Card>
//   )
// }

// export default Post


import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardText } from 'reactstrap';

function Post({ post = {title: "This is default post title", content: "This is default post content" } }) {
  return (
    <Card className='border-0 shadow-sm mt-3'>
      <CardBody>
        <h1>{post.title}</h1>
        <CardText>
        <span dangerouslySetInnerHTML={{ __html: post.content.length > 60 ? `${post.content.substring(0, 60)}...` : post.content }} />

          {/* <span dangerouslySetInnerHTML={{ __html: post.content}} /> */}
        </CardText>
        <div>
          <Link className='btn btn-secondary' to={"/post/"+post.postId}>
            Read More
          </Link>
        </div>
      </CardBody>
    </Card>
  )
}

export default Post;
