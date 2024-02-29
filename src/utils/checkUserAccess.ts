export const checkUserAccess = async (
  prisma: any,
  userId: any,
  postId: any
) => {
  // right user check
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
//   console.log("user:", user);

  if (!user) {
    return {
      userError: "User not found!",
      post: null,
    };
  }

  // Editable post exits or not check
  const post = await prisma.post.findUnique({
    where: {
      id: Number(postId),
    },
  });
//   console.log("post:", post );
  
  if (!post) {
    return {
      userError: "post not found!",
      post: null,
    };
  }

  // right user = post author check
  if (post.authorId !== user.id) {
    return {
      userError: "Post not owned by User!",
      post: null,
    };
  }

};
