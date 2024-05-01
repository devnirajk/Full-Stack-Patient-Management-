package com.patientManagement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.patientManagement.PatientModel;
import com.patientManagement.PatientRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    // Create operation
    public PatientModel createPatient(String name, int age, String healthIssue) {
        PatientModel patient = new PatientModel(name, age, healthIssue);
        return patientRepository.save(patient);
    }

    // Read operation
    public List<PatientModel> getAllPatients() {
        return patientRepository.findAll();
    }

    public Optional<PatientModel> getPatientById(Long id) {
        return patientRepository.findById(id);
    }

    // Update operation
    public PatientModel updatePatient(Long id, String name, int age, String healthIssue) {
        Optional<PatientModel> optionalPatient = patientRepository.findById(id);
        if (optionalPatient.isPresent()) {
            PatientModel patient = optionalPatient.get();
            patient.setName(name);
            patient.setAge(age);
            patient.setHealthIssue(healthIssue);
            return patientRepository.save(patient);
        }
        return null; 
    }

    // Delete operation
    public void deletePatient(Long id) {
        patientRepository.deleteById(id);
    }
}
