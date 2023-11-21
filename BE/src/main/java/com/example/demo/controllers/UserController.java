package com.example.demo.controllers;

import com.example.demo.entities.User;
import com.example.demo.services.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    private final UserService userService;

    @PostMapping
    @ResponseStatus(value = HttpStatus.CREATED)
    public User registerUser(@RequestBody User user) {
        log.error("the user is:  {}", user);
        return this.userService.insert(user);
    }

    @GetMapping
    @ResponseStatus(value = HttpStatus.OK)
    public List<User> findAllUser() {
        return this.userService.findAllUser();
    }

    @GetMapping(value = "/{id}")
    @ResponseStatus(value = HttpStatus.OK)
    public User findById(@PathVariable int id) {
        return this.userService.findById(id);
    }

    @PutMapping(value = "/{id}")
    @ResponseStatus(value = HttpStatus.OK)
    public User updateUser(@PathVariable int id, @RequestBody User user) {
        return this.userService.updateUser(id, user);
    }

    @DeleteMapping(value = "/{id}")
    @ResponseStatus(value = HttpStatus.ACCEPTED)
    public void deleteUser(@PathVariable int id) {
        this.userService.delete(id);
    }
}
