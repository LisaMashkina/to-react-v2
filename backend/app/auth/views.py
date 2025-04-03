from fastapi import APIRouter, Form
from app.auth import crud
from twilio.rest import Client
import random

router = APIRouter(prefix='/auth', tags=['auth'])

def get_token_for_submit():
    pass

@router.get('/login')
async def login(username: str, password: str):
    return crud.login(username, password)