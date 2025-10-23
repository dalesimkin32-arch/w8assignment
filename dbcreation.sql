-- removed , after id line

CREATE TABLE IF NOT EXISTS week8_blog_posts (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY
);


-- Added INT to post_id line
CREATE TABLE IF NOT EXISTS week8_blog_comments (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    post_id INT REFERENCES week8_blog_posts(id),
    username VARCHAR(30),
    comment TEXT
)

-- ran OK
CREATE TABLE IF NOT EXISTS week8_blog_tags (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
    name VARCHAR(255) NOT NULL
)

-- added INT to tag_id and post_id lines and changed GENERATES to GENERATED
CREATE TABLE IF NOT EXISTS week8_blog_tags_posts (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    tag_id INT REFERENCES week8_blog_tags(id),
    post_id INT REFERENCES week8_blog_posts
)