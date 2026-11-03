
-- Patient prescription database

PRAGMA foreign_keys = ON;

-- =========================================
-- 1. Patients
-- =========================================

CREATE TABLE IF NOT EXISTS patients (
    patient_id INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name TEXT NOT NULL
);

-- =========================================
-- 2. Prescriptions
-- =========================================

CREATE TABLE IF NOT EXISTS prescriptions (
    prescription_id INTEGER PRIMARY KEY AUTOINCREMENT,
    patient_id INTEGER NOT NULL,
    prescription_name TEXT NOT NULL,
    common_name TEXT,
    usage TEXT NOT NULL,
    prescribing_doctor TEXT NOT NULL,
    prescription_date TEXT NOT NULL,
    dosage_amount REAL NOT NULL CHECK (dosage_amount > 0),
    dosage_unit TEXT NOT NULL,
    frequency TEXT NOT NULL,
    last_verifier TEXT NOT NULL,
    verification_date TEXT NOT NULL,

    FOREIGN KEY (patient_id)
        REFERENCES patients(patient_id)
        ON DELETE RESTRICT
);

-- =========================================
-- 3. Indexes
-- =========================================

CREATE INDEX IF NOT EXISTS idx_prescriptions_patient
ON prescriptions(patient_id);
