const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get("/", async (req, res) => {
  try {
    // Get all comments and JOIN with id data
    const commentData = await Comment.findAll({
      include: [
        {
          model: Comment,
          attributes: ["id"],
        },
      ],
    });

    // Serialize data so the template can read it
    const comments = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("blog-page", {
      blogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  const body = req.body;

  try {
    const newComment = await Comment.create({
      ...body,
      userId: req.session.userId,
    });
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;