package com.patientmanagementsystem.patientmanagementsystem.service;

import com.patientmanagementsystem.patientmanagementsystem.entity.PatientModel;
import com.patientmanagementsystem.patientmanagementsystem.repository.PatientRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

import java.util.List;

@Service
public class PatientServiceImplement implements  PatientService{

    @Autowired
    private PatientRepo patientModelRepository;

    // Save operation
    @Override
    public PatientModel savePatient(PatientModel patientModel)
    {
        return patientModelRepository.save(patientModel);
    }

    // Read operation
    @Override
    public List<PatientModel> fetchPatient()
    {
        return (List<PatientModel>)
                patientModelRepository.findAll();
    }

    // Update operation
    @Override
    public PatientModel
    updatePatient(PatientModel patientModel,
                     Long patientModelId)
    {

        PatientModel depDB
                = patientModelRepository.findById(patientModelId)
                .get();

        if (Objects.nonNull(patientModel.getName())
                && !"".equalsIgnoreCase(
                patientModel.getName())) {
            depDB.setName(
                    patientModel.getName());
        }




        return patientModelRepository.save(depDB);
    }

    // Delete operation
    @Override
    public void deletePatient(Long PatientModelId)
    {
        patientModelRepository.deleteById(PatientModelId);
    }
}