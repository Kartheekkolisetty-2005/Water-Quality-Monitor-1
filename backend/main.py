from fastapi import FastAPI
from backend.database import create_db_and_tables
from backend.routes.users import router as user_router
from backend.routes.reports import router as report_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Water Quality Monitor API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create tables on startup
@app.on_event("startup")
def on_startup():
    create_db_and_tables()

# Include routers
app.include_router(user_router)
app.include_router(report_router)

@app.get("/")
def root():
    return {"message": "Server is running"}
