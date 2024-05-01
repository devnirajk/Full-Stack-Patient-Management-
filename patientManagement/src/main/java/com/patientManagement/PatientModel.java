package com.patientManagement;

import jakarta.persistence.*;

@Entity(name = "patient_model")
public class PatientModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private int age;
    private String healthIssue;


    public PatientModel(String name, int age, String healthIssues) {
        this.name = name;
        this.age = age;
        this.healthIssue = healthIssues;
    }

    public PatientModel() {

    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getHealthIssue() {
        return healthIssue;
    }

    public void setHealthIssue(String healthIssue) {
        this.healthIssue = healthIssue;
    }
}
