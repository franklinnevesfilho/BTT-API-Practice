from task_router import task_router
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def root():
    return "Hello World"

app.include_router(task_router)