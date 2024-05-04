package com.patientManagementSystem.repository;



import com.patientmanagementsystem.patientmanagementsystem.entity.PatientModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepo extends CrudRepository<PatientModel, Long> {

}
