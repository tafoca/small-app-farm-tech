from model import Todo
# Driver 
import pymongo  
from pymongo import MongoClient

HOST = 'localhost'
PORT = 27017
client = MongoClient(HOST, PORT)

database = client.TodoList
collection = database.todo 

async def fetch_one_todo(title):
    document = collection.find_one({"title":title})
    return document

async def fetch_all_todo():
    todos = []
    cursor =  collection.find({})
    for document in cursor:
        todos.append(Todo(**document))
    return todos

async def create_todo(todo):
    document = todo
    result = collection.insert_one(document)
    return result

async def update_todo(title,desc):
    collection.update_one({"title":title},{"$set":{"description":desc}})
    document = collection.find_one({"title":title})
    return document

async def delete_todo(title):
    collection.delete_one({"title":title})
    return True