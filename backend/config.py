import os

BASE_URL = os.getenv("BASE_URL", "https://imgssapp.vercel.app")
UPLOAD_DIR = os.path.join(os.path.dirname(__file__), "image_store")
