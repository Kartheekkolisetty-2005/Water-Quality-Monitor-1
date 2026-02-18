from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime
from datetime import datetime
from backend.database import Base

class Alert(Base):
    __tablename__ = "alerts"

    id = Column(Integer, primary_key=True, index=True)
    type = Column(String)
    message = Column(String)
    location = Column(String)
    issued_at = Column(DateTime, default=datetime.utcnow)
