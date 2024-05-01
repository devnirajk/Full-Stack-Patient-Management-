package com.patientManagement;


import org.springframework.data.jpa.repository.JpaRepository;
import com.patientManagement.PatientModel;

public interface PatientRepository extends JpaRepository<PatientModel, Long> {
}
