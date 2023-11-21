package com.example.demo.entities;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "TBL_USERS")
@Getter
@Setter
public class User {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int id;

    @Column
    private String firstname;
    @Column
    private String lastname;
    @Column
    private String username;
    @Column
    private String password;

}
