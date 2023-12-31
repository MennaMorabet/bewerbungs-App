package com.example.demo.utils;

import com.example.demo.entities.User;
import org.springframework.stereotype.Service;

@Service
public class UserUtils {
    public void update(User oldUser, User user){
        oldUser.setFirstname(user.getFirstname());
        oldUser.setLastname(user.getLastname());
        oldUser.setPassword(user.getPassword());
        oldUser.setUsername(user.getUsername());
    }
}
