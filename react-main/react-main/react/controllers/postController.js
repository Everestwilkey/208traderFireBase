import { nanoid } from "nanoid";

let posts = [
  { id: nanoid(), title: "First Post", content: "Hello!" },
  { id: nanoid(), title: "Second Post", content: "More text" },
];

export const getAllPosts = async (req, res) => {
  res.status(200).json({ posts });
};

export const getPost = async (req, res) => {
  const { id } = req.params;
  const post = posts.find((post) => post.id === id);
  if (!post) {
    return res.status(404).json({ msg: `No post with id ${id}` });
  }
  res.status(200).json({ post });
};

export const createPost = async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ msg: "Need title and content" });
  }
  const id = nanoid();
  const post = { id, title, content };
  posts.push(post);
  res.status(201).json({ post });
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  const post = posts.find((post) => post.id === id);
  if (!post) {
    return res.status(404).json({ msg: `No post with id ${id}` });
  }

  if (title) post.title = title;
  if (content) post.content = content;

  res.status(200).json({ post });
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  const postIndex = posts.findIndex((post) => post.id === id);

  if (postIndex === -1) {
    return res.status(404).json({ msg: `No post with id ${id}` });
  }

  posts = posts.filter((post) => post.id !== id);

  res.status(200).json({ msg: "Post Deleted" });
};
