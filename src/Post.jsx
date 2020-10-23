import React, { useState, useEffect } from 'react';
import './Post.css';
import Avatar from "@material-ui/core/Avatar";
import { db } from './firebase';

function Post({ username, caption, imageUrl, postId}) {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

    useEffect(() => {
        let unsubscribe;
        if (postId) {
            unsubscribe = db
                .collection("posts")
                .doc(postId)
                .collection("comments")
                .onSnapshot((snapshot) => {
                    setComments(snapshot.docs.map((doc) => doc.data()));
                });
        }
        return () => {
            unsubscribe();
        }
    }, [postId]);

    const postComment = (e) => {
        
    }

    return (
        <div className="post">
            {/* header -> avatar + username */}
            <div className="post__header">
                <Avatar className="post__avatar"
                    alt={username}
                    src="/static/images/avatar/1/jpg"
                />
                <h3>{username}</h3>
            </div>
            {/* image */}
            <img src={imageUrl}
                alt=""
                className="post__image"/>

            {/* username + caption */}
            <h4 className="post__text"><strong>{username}:</strong> {caption}</h4>

            <form className="post__commentBox">
                <input
                    className="post__input"
                    type="text"
                    placeholder="add your comment here"
                    value={comment}
                    onChange={(e) => setComments(e.target.value)}
                />
                <button
                    className="post__button"
                    disabled={!comment}
                    type="submit"
                    onClick={postComment}
                >
                    Post
                    </button>
            </form>
        </div>
    )
}

export default Post
