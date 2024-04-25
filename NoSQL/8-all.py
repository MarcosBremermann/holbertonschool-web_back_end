#!/usr/bin/python3
"""
Python function that lists all documents in a collection
"""
from pymongo import MongoClient


def list_all(mongo_collection):
    """lists all documents in a collection"""

    empty_list = []
    if mongo_collection not NULL:
        return mongo_collection.find()
    return empty_list
