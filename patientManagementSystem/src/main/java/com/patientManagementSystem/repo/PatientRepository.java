package com.patientManagementSystem.repo;


import org.springframework.data.jpa.repository.JpaRepository;

import com.patientManagementSystem.model.PatientModel;

public interface PatientRepository extends JpaRepository<PatientModel, Long> {
}
