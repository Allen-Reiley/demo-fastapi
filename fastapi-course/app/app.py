from fastapi import FastAPI, HTTPException  
from app.schemas import PostCreate, PostResponse

app = FastAPI()

text_post = {
    1: {
        "title": "New Content",
        "content": "This is the content of the post"
    },
    2: {
        "title": "Tech Trends 2026",
        "content": "Exploring the rise of AI-driven design and modular web solutions."
    },
    3: {
        "title": "AuraWorks Update",
        "content": "We've launched a new branding toolkit to streamline client workflows."
    },
    4: {
        "title": "Developer Tips",
        "content": "Use Docker with WSL2 for seamless cross-platform development."
    },
    5: {
        "title": "Creative UI Ideas",
        "content": "Experiment with ASCII art splash screens to personalize your dev environment."
    },
    6: {
        "title": "Community Spotlight",
        "content": "Highlighting innovative projects built with Next.js and FastAPI."
    },
    7: {
        "title": "Weekly Reflection",
        "content": "Balancing creativity with scalability is the key to sustainable growth."
    }
}


@app.get("/posts")
def get_all_posts(limit: int = None):
    if limit:
        return list(text_post.values())[:limit]
    return text_post

@app.get("/posts/{id}")
def get_post(id: int) -> PostResponse:
    if id not in text_post:
        raise HTTPException(status_code=404, detail="Post not found")
    return text_post.get(id) 



@app.post("/posts")
def create_post(post: PostCreate) -> PostResponse:
    new_post = {
        "title": post.title,
        "content": post.content
    }
    text_post[max(text_post.keys()) + 1] = new_post
    return PostResponse(**new_post)