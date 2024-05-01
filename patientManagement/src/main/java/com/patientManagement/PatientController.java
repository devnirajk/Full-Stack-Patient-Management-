package com.patientManagement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;


import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/patients")
public class PatientController {

    @Autowired
    private PatientService patientService;

    @GetMapping
    public ResponseEntity<List<PatientModel>> getAllPatients() {
        List<PatientModel> patients = patientService.getAllPatients();
        return ResponseEntity.ok(patients);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PatientModel> getPatientById(@PathVariable Long id) {
        Optional<PatientModel> patient = patientService.getPatientById(id);
        return patient.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<PatientModel> createPatient(@RequestBody PatientModel patient) {
        System.out.println("From");
        System.out.println(patient);
        PatientModel createdPatient = patientService.createPatient(patient.getName(), patient.getAge(), patient.getHealthIssue());
        return new ResponseEntity<>(createdPatient, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PatientModel> updatePatient(@PathVariable Long id, @RequestBody PatientModel patient) {
        PatientModel updatedPatient = patientService.updatePatient(id, patient.getName(), patient.getAge(), patient.getHealthIssue());
        if (updatedPatient != null) {
            return ResponseEntity.ok(updatedPatient);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, String>> deletePatient(@PathVariable Long id) {
        patientService.deletePatient(id);

        // Create a response map with a success message
        Map<String, String> response = new HashMap<>();
        response.put("message", "Patient with ID " + id + " deleted successfully");

        // Return the response with HTTP status 200 OK
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }
}

