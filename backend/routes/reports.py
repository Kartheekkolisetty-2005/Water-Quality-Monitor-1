from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from backend.database import SessionLocal
from backend.models import Report
from backend.schemas import ReportCreate, ReportResponse
from backend.auth import get_current_user
from typing import List

router = APIRouter(prefix="/reports", tags=["Reports"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=ReportResponse)
def create_report(
    report: ReportCreate,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    new_report = Report(
        location=report.location,
        ph=report.ph,
        turbidity=report.turbidity,
        description=report.description,
        owner_id=current_user.id
    )

    db.add(new_report)
    db.commit()
    db.refresh(new_report)

    return new_report


@router.get("/", response_model=List[ReportResponse])
def get_reports(db: Session = Depends(get_db)):
    return db.query(Report).all()
