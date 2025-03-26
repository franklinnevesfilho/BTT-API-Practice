from fastapi import APIRouter

my_router = APIRouter(
)

@my_router.get("/user")
def get_user():
    return "This is my user router"

