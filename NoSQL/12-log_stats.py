#!/usr/bin/env python3
"""
This script provides statistics about Nginx logs stored in MongoDB.
"""

from pymongo import MongoClient, errors

def main():
    """Main function to print statistics."""
    try:
        client = MongoClient('mongodb://localhost:27017/')
        db = client.logs
        collection = db.nginx

        total_logs = collection.count_documents({})
        print(f"{total_logs} logs")

        print("Methods:")
        methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
        for method in methods:
            count = collection.count_documents({"method": method})
            print(f"\tmethod {method}: {count}")

        status_check = collection.count_documents({"method": "GET", "path": "/status"})
        print(f"{status_check} status check")

    except errors.ConnectionError as e:
        print(f"Error connecting to MongoDB: {e}")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()
