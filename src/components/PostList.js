import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

import UserHeader from './UserHeader';

class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchPosts()
    }
    renderList(){
        return this.props.posts.map(post =>{
            return(
                <div>
                    <div key={post.id}>
                        <h4>{post.id}</h4>
                        <div>
                           <b> {post.title}</b>
                        </div>
                        <br></br>
                        <div>
                            {post.body}
                        </div>
                        <br></br>
                 <UserHeader userId = {post.userId}></UserHeader>
                    </div>
                </div>
            )
        })
    }

    render() {
        return <div className="parent">{this.renderList()}</div>;
    }
}
const mapStateToProps = (state) =>{
    return {posts: state.postsReducer}
}
export default connect(mapStateToProps, { fetchPosts })(PostList);