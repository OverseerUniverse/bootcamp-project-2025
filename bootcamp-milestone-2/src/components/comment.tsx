import style from "@/components/comment.module.css";

type IComment = {
  name: string;
  comment: string;
  date: Date;
};
{
  /* When we pass props, the name that we use to pass values
		is the key for the type
*/
}
type CommentProps = {
  comment: IComment | any;
};

{
  /* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/
}
function parseCommentTime(time: any): Date | null {
  if (!time) return null;
  const parsed = new Date(time);
  return parsed;
}

function Comment({ comment }: CommentProps) {
  let user: string = comment.name;
  let text: string = comment.comment;
  const parsed = parseCommentTime(comment.date);

  return (
    <div className={style.comment}>
      <h4>{user || "Unknown"}</h4>
      <p>{text}</p>
      <span>{parsed ? parsed.toDateString() : "No comments found"}</span>
    </div>
  );
}

export default Comment;
