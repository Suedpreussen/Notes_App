from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


class Message(BaseModel):
    text: str
    
@app.get("/")
def read_root():
    return {"message": "Hello FastAPI!"}

@app.post("/echo")
async def echo_message(msg: Message) -> dict:
    return {
        "received": msg.text,
        "length": len(msg.text),
    }