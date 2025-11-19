import style from "@/components/comment.module.css";

type IComment = {
  user: string;
  comment: string;
  time: Date;
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
  let user: string = "";
  let text: string = "";
  let timeValue: any = null;

  if (Array.isArray(comment)) {
    [user = "Unknown", text = "", timeValue = null] = comment;
  } else {
    user = comment.user ?? "Unknown";
    text = comment.text ?? "";
    timeValue = comment.time ?? null;
  }

  const parsed = parseCommentTime(timeValue);
  return (
    <div>
      <h4>{user}</h4>
      <p>{text}</p>
      <span>{parsed ? parsed.toDateString() : "No comments found"}</span>
    </div>
  );
}

export default Comment;
