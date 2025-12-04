import mongoose, { Schema } from "mongoose";

type IComment = {
  name: string;
  comment: string;
  date: Date;
};

// typescript type (can also be an interface)
interface Blog {
  title: string;
  slug: string;
  date: Date;
  description: string; // for preview
  content: string; // text content for individual blog page
  image: string; // url for string in public
  imageAlt: string; // alt for image
  comments?: IComment[]; // array for comments
}

// mongoose schema
const blogSchema = new Schema<Blog>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
  content: { type: String, required: true },
  comments: {
    type: [
      {
        name: { type: String, required: true },
        comment: { type: String, required: true },
        date: { type: Date, required: false, default: Date.now },
      },
    ],
    default: [],
  },
});

// defining the collection and model
const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default Blog;
