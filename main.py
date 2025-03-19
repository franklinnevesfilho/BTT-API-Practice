# from task_router import task_router  # This import is commented out and not used
from task_model import Task  # Imports the Task model class
from task_service import *  # Imports all functions from task_service
from fastapi import FastAPI  # Imports FastAPI framework

app = FastAPI()  # Creates a new FastAPI application instance

# Root endpoint - returns a simple greeting
@app.get("/")
def root():
    return "Hello World"

# Endpoint to get all tasks
@app.get("/tasks/all")
def get_all():
    return get_all_tasks()  # Calls the service function to get all tasks

# Endpoint to create a new task
@app.post("/task")
def create(task: Task):
    return create_task(task)  # Calls the service function to create a task

# Endpoint to update a task by ID
@app.put("/{task_id}")
def update(task_id: int, updated: Task):
    return update_task(task_id, updated)  # Calls service function to update a task

# Endpoint to delete a task by ID
@app.delete("/task/delete/{task_id}")
def delete(task_id: int):
    return delete_task(task_id)  # Calls service function to delete a task

# Endpoint to get a specific task by ID
@app.get("/get-task/{task_id}")
def get(task_id: int):
    return get_task(task_id)  # Calls service function to get a specific task