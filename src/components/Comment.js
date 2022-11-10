import "./Comment.css";
import CommentDate from "./CommentDate";
import CommentUserInfo from "./CommentUserInfo";
import CommentWrapper from "./CommentWrapper";

function Comment({ data }) {
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <CommentWrapper className="comment-first">
              <CommentUserInfo
                avatarUrl={item.author.avatarUrl}
                name={item.author.name}
              />
            </CommentWrapper>
            <CommentWrapper className="Comment-first-date">
              <div className="Comment-text">{item.text}</div>
              <CommentDate date={item.date} />
            </CommentWrapper>
          </div>
        );
      })}
    </div>
  );
}
export default Comment;
