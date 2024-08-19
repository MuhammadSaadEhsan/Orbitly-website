// import React, { useEffect, useState } from 'react'
// import { loadAllPosts } from '../services/post-service'
// import { Col, Row } from 'reactstrap';
// import Post from './Posts.jsx';

// function NewFeed() {


//     const [postContent,setPostContent] = useState(null);

//     useEffect(() => {
//         loadAllPosts()
//         .then(data => {
//             console.log(data)
//             setPostContent(data);
//         })
//         .catch(err => console.log(err));
//     }, []);

//     return (
//         <div className="container-fluid">
//             <Row>
//                 <Col md={
//                     {
//                         size: 10,
//                         offset:1,
//                     }
//                 }>
//                     <h1>Blogs Count ({postContent?.totalElements})</h1>   
//                     {/* {
//                         postContent.content.map((post)=>(
//                             <Post post={post}/>
//                         ))
//                     }             */}
//                      {
//                         postContent && postContent.content && postContent.content.length > 0 ? (
//                             postContent.content.map((post) => (
//                                 <Post key={post.id} title={post.title} content={post.content} />
//                             ))
//                         ) : (
//                             <p>No posts available</p>
//                         )
//                     }
//                 </Col>
//             </Row>
//         </div>
//     )
// }

// export default NewFeed

import './NewsFeed.css';
import React, { useEffect, useState } from 'react';
import { loadAllPosts } from '../services/post-service';
import { Col, Row, Pagination, PaginationItem,PaginationLink, Container } from 'reactstrap';
import Post from './Posts.jsx';

function NewFeed() {
  const [postContent, setPostContent] = useState(null);

  useEffect(() => {
    loadAllPosts()
      .then(data => {
        console.log(data);
        setPostContent(data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container-fluid">
      <Row>
        <Col md={{ size: 10, offset: 1 }}>
          <h1 className="main-heading">BLOGS COUNT ({postContent?.totalElements})</h1>
          {postContent && postContent.content && postContent.content.length > 0 ? (
            postContent.content.map((post) => (
              <Post key={post.postId} post={post} />
            ))
          ) : (
            <p>No posts available</p>
          )}

          <Container className="mt-3">
          <Pagination>
            <PaginationItem>
                <PaginationLink previous>
                </PaginationLink>
            </PaginationItem>

            <PaginationItem>
                <PaginationLink >1
                </PaginationLink>
            </PaginationItem>

            <PaginationItem>
                <PaginationLink next>
                </PaginationLink>
            </PaginationItem>
          </Pagination>
          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default NewFeed;
