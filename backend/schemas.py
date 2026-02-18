from pydantic import BaseModel


# ---------------------------
# USER SCHEMAS (Milestone 1)
# ---------------------------

class UserRegister(BaseModel):
    name: str
    email: str
    password: str
    role: str


class UserLogin(BaseModel):
    email: str
    password: str


# ---------------------------
# REPORT SCHEMAS (Milestone 2)
# ---------------------------

class ReportCreate(BaseModel):
    location: str
    ph: float
    turbidity: float
    description: str


class ReportResponse(BaseModel):
    id: int
    location: str
    ph: float
    turbidity: float
    description: str
    owner_id: int

    class Config:
        from_attributes = True
