#!/usr/bin/env python3
"""
Python function that lists all documents in a collection
"""
from pymongo import MongoClient


def list_all(mongo_collection):
    """lists all documents in a collection"""

    cursor = mongo_collection.find()
    documents = list(cursor)
    return documents
