package com.example.demo.services;

import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepository;
import com.example.demo.utils.UserUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class UserService {
    private final UserRepository userRepository;
    private final UserUtils userUtils;

    public User insert(User user) {
        return this.userRepository.save(user);
    }

    public List<User> findAllUser() {
        Iterable<User> result = this.userRepository.findAll();
        List<User> resultList = new ArrayList<>();
        result.forEach(resultList::add);
        return resultList;
    }

    public User findById(int id) {
        return this.userRepository.findById(id).orElse(null);

    }

    public User updateUser(int id, User user) throws RuntimeException {
        User oldUser = this.findById(id);
        if (this.findById(id) == null) {
            throw new RuntimeException("User Not found");
        } else {
            this.userUtils.update(oldUser,user);
            this.userRepository.save(oldUser);
            return new User();
        }
    }

    public void delete(int id) {
        User finduser = this.findById(id);
        if (this.findById(id) == null) {
            throw new RuntimeException("User not found!");
        } else {
            findAllUser().remove(0);
        }
    }
}
